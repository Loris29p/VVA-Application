class Database {
    constructor() {
        this.link_api = "http://lorispoilly.online/receive_react.php"; // http://lorispoilly-online.preview-domain.com/receive_react.php
        this.secret = "8tn6kme24lfbea5ojzoci4";
    }
    
    select(request) {
        return fetch(this.link_api, {
            method: 'POST',
            body: JSON.stringify({
                secretWord: this.secret,
                type: "SELECT",
                request: request
            })
        }).then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            const responseJson = JSON.parse(response);
            return responseJson;
        });
    }
    
    insert(request) {
        return fetch(this.link_api, {
            method: 'POST',
            body: JSON.stringify({
                secretWord: this.secret,
                type: "INSERT",
                request: request
            })
        }).then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            const responseJson = JSON.parse(response);
            return responseJson;
        });
    }

    update(request) {
        return fetch(this.link_api, {
            method: 'POST',
            body: JSON.stringify({
                secretWord: this.secret,
                type: "UPDATE",
                request: request
            })
        }).then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            const responseJson = JSON.parse(response);
            return responseJson;
        });
    }

    delete(request) {
        return fetch(this.link_api, {
            method: 'POST',
            body: JSON.stringify({
                secretWord: this.secret,
                type: "DELETE",
                request: request
            })
        }).then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            const responseJson = JSON.parse(response);
            return responseJson;
        });
    }
}

export default Database;