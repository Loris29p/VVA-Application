import Activity from './Activity.class';

class Activities {
    constructor() {
        this.activities = [];
        var activities = this.activities;

        const responseData = window.classDatabase.select("SELECT * FROM activities");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        let activity = new Activity(response.data[i].id, response.data[i].name, response.data[i].description, response.data[i].duration, response.data[i].id_type, response.data[i].hours, response.data[i].date, response.data[i].users, response.data[i].max_users, response.data[i].id_animation, response.data[i].id_site);
                        activities.push(activity);
                    }
                }
            }
        });
    }

    createActivity(activity) {
        window.classDatabase.insert("INSERT INTO activities (name, description, duration, id_type, hours, date, users, max_users, id_animation, id_site) VALUES ('" + activity.name + "', '" + activity.description + "', '" + activity.duration + "', '" + activity.id_type + "', '" + activity.hours + "', '" + activity.date + "', '" + activity.users + "', '" + activity.max_users + "', '" + activity.id_animation + "', '" + activity.id_site + "')");
        const responseData = window.classDatabase.select("SELECT * FROM activities WHERE name = '" + activity.name + "' AND description = '" + activity.description + "' AND duration = '" + activity.duration + "' AND id_type = '" + activity.id_type + "' AND hours = '" + activity.hours + "' AND date = '" + activity.date + "' AND users = '" + activity.users + "' AND max_users = '" + activity.max_users + "' AND id_animation = '" + activity.id_animation + "' AND id_site = '" + activity.id_site + "'");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    let activity = new Activity(response.data[0].id, response.data[0].name, response.data[0].description, response.data[0].duration, response.data[0].id_type, response.data[0].hours, response.data[0].date, response.data[0].users, response.data[0].max_users, response.data[0].id_animation, response.data[0].id_site);
                    window.classActivities.activities.push(activity);
                }
            }
        });
    }


    getActivities() {
        return this.activities;
    }

    getActivity(id) {
        return this.activities[id];
    }

    deleteActivity(id) {
        this.activities.splice(id, 1);

        const responseData = window.classDatabase.delete("DELETE FROM activities WHERE id = " + id);
        responseData.then(function(response) {
            console.log(response);
        });
    }

    updateActivity(id, activity) {
        this.activities[id] = activity;
    }

    getActivitiesBySite(id_site) {
        const activities = this.activities.filter(function(activity) {
            return activity.id_site === id_site;
        });

        return activities;
    }
}

export default Activities;