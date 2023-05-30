class Animation {
    constructor(id, name, description, path) {
        this.id = id;
        this.name = name;
        this.description = description;
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
}

export default Animation;