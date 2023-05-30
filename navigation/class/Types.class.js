import Type from './Type.class';

class Types {
    constructor() {
        this.types = [];

        const responseData = window.classDatabase.select("SELECT * FROM types");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        let type = new Type(response.data[i].id, response.data[i].name);
                        window.classTypes.types.push(type);
                    }
                }
            }
        });
    }

    createType(name) {
        window.classDatabase.insert("INSERT INTO types (name) VALUES ('" + name + "')");
        const responseData = window.classDatabase.select("SELECT * FROM types WHERE name = '" + name + "'");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    let type = new Type(response.data[0].id, response.data[0].name);
                    window.classTypes.types.push(type);
                }
            }
        });
    }

    getTypes() {
        return this.types;
    }

    getType(id) {
        var typeHasFound = undefined
        id = parseInt(id);
        this.types.forEach(function(type) {
            if (parseInt(type.getId()) === id) {
                typeHasFound = type;
            }
        });
        return typeHasFound;
    }

    deleteType(id) {
        this.types.splice(id, 1);

        const responseData = window.classDatabase.delete("DELETE FROM types WHERE id = " + id);
        responseData.then(function(response) {
            console.log(response);
        });
    }

    updateType(id, type) {
        this.types[id] = type;
    }
}

export default Types;