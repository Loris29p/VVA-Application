class User {
    constructor(id, email, password, firstname, lastname, id_role, id_site) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.id_role = id_role;
        this.id_site = id_site;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getFirstname() {
        return this.firstname;
    }

    getLastname() {
        return this.lastname;
    }

    getIdRole() {
        return this.id_role;
    }

    getIdSite() {
        return this.id_site;
    }

    getSite() {
        return window.classSites.getSite(this.id_site);
    }

    setIdSite(id_site) {
        this.id_site = id_site;
    }

    setIdRole(id_role) {
        this.id_role = id_role;
    }

    setId(id) {
        this.id = id;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }

    getInitials() {
        return this.firstname.charAt(0) + this.lastname.charAt(0);
    }

    getAvatar() {
        return 'https://ui-avatars.com/api/?name=' + this.getInitials();
    }
}

export default User;