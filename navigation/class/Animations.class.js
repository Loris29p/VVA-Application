import Animation from './Animation.class';

class Animations {
    constructor() {
        this.animations = [];
        var animations = this.animations;

        const responseData = window.classDatabase.select("SELECT * FROM animations");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        let animation = new Animation(response.data[i].id, response.data[i].name, response.data[i].description);
                        animations.push(animation);
                    }
                }
            }
        });
    }
    
    createAnimation(animation) {
        window.classDatabase.insert("INSERT INTO animations (name, description) VALUES ('" + animation.name + "', '" + animation.description + "')");
        const responseData = window.classDatabase.select("SELECT * FROM animations WHERE name = '" + animation.name + "' AND description = '" + animation.description + "'");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    let animation = new Animation(response.data[0].id, response.data[0].name, response.data[0].description);
                    window.classAnimations.animations.push(animation);
                }
            }
        });
    }

    getAnimations() {
        return this.animations;
    }

    getAnimation(id) {
        var animationHasFound = undefined
        id = parseInt(id);
        this.animations.forEach(function(animation) {
            if (parseInt(animation.getId()) === id) {
                animationHasFound = animation;
            }
        });
        return animationHasFound;
    }

    deleteAnimation(id) {
        this.animations.splice(id, 1);

        const responseData = window.classDatabase.delete("DELETE FROM animations WHERE id = " + id);
        responseData.then(function(response) {
            console.log(response);
        });
    }

    updateAnimation(id, animation) {
        this.animations[id] = animation;
    }
}

export default Animations;