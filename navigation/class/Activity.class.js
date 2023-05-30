class Activity {
    constructor(id, name, description, duration, id_type, hours, date, users, max_users, id_animation, id_site) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.id_type = id_type;
        this.hours = hours;
        this.date = date;
        this.users = users;
        this.max_users = max_users;
        this.id_animation = id_animation;
        this.id_site = id_site;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDuration() {
        return this.duration;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    getIdType() {
        return this.id_type;
    }

    setIdType(id_type) {
        this.id_type = id_type;
    }

    getHours() {
        return this.hours;
    }

    setHours(hours) {
        this.hours = hours;
    }

    getDate() {
        return this.date;
    }

    setDate(date) {
        this.date = date;
    }

    getUsers() {
        return this.users;
    }

    setUsers(users) {
        this.users = users;
    }

    getMaxUsers() {
        return this.max_users;
    }

    setMaxUsers(max_users) {
        this.max_users = max_users;
    }

    getIdAnimation() {
        return this.id_animation;
    }

    setIdAnimation(id_animation) {
        this.id_animation = id_animation;
    }

    getIdSite() {
        return this.id_site;
    }

    setIdSite(id_site) {
        this.id_site = id_site;
    }

    getAnimation() {
        return window.classAnimations.getAnimation(this.id_animation);
    }

    getSite() {
        return window.classSites.getSite(this.id_site);
    }

    getType() {
        return window.classTypes.getType(this.id_type);
    }
}

export default Activity;