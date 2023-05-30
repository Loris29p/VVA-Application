class UserActivities {
    constructor() {
        this.userActivities = [];

        const responseData = window.classDatabase.select("SELECT * FROM user_activities");
        responseData.then(function(response) {
            for (let i = 0; i < response.length; i++) {
                this.userActivities.push({
                    id: response.data[i].id,
                    id_user: response.data[i].id_user,
                    id_activity: response.data[i].id_activity
                })
            }
        });
    }

    getUserActivities() {
        return this.userActivities;
    }

    getUserActivitiesByUserId(userId) {
        const userActivities = this.userActivities.filter(function(userActivity) {
            return userActivity.id_user === userId;
        });

        return userActivities;
    }

    getUserActivitiesByActivityId(activityId) {
        const userActivities = this.userActivities.filter(function(userActivity) {
            return userActivity.activity_id === activityId;
        });

        return userActivities;
    }

    addUserActivity(userId, activityId) {
        const userActivities = this.userActivities;

        window.classDatabase.insert("INSERT INTO users_activities (id_user, id_activity) VALUES ('" + userId + "', '" + activityId + "')");
        setTimeout(function() {
            const responseData = window.classDatabase.select("SELECT * FROM users_activities WHERE id_user = '" + userId + "' AND id_activity = '" + activityId + "'");
            responseData.then(function(response) {
                if (response !== undefined) {
                    if (response.data.length > 0) {
                        userActivities.push({
                            id: response.data[0].id,
                            id_user: response.data[0].id_user,
                            id_activity: response.data[0].id_activity
                        })
                    }
                }
            });
        }, 1000);
    }

    removeUserActivity(userId, activityId) {
        const userActivity = this.userActivities.find(function(userActivity) {
            return userActivity.user_id === userId && userActivity.activity_id === activityId;
        });

        const responseData = window.classDatabase.delete("user_activities", userActivity.id);
        responseData.then(function(response) {
            this.userActivities.splice(this.userActivities.indexOf(userActivity), 1);
        });
    }
}

export default UserActivities;