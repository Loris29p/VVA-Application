import Site from './Site.class';

class Sites {
    constructor() {
        this.sites = [];
        var sites = this.sites
        
        const responseData = window.classDatabase.select("SELECT * FROM sites");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        let site = new Site(response.data[i].id, response.data[i].name);
                        sites.push(site);
                    }
                }
            }
        });
    }

    createSite(name) {
        window.classDatabase.insert("INSERT INTO sites (name) VALUES ('" + name + "')");
        const responseData = window.classDatabase.select("SELECT * FROM sites WHERE name = '" + name + "'");
        responseData.then(function(response) {
            if (response !== undefined) {
                if (response.data.length > 0) {
                    let site = new Site(response.data[0].id, response.data[0].name);
                    window.classSites.sites.push(site);
                }
            }
        });
    }

    getSites() {
        return this.sites;
    }

    getSite(id) {
        var siteHasFound = undefined
        id = parseInt(id);
        this.sites.forEach(function(site) {
            if (parseInt(site.getId()) === id) {
                siteHasFound = site;
            }
        });
        return siteHasFound;
    }

    deleteSite(id) {
        this.sites.splice(id, 1);

        const responseData = window.classDatabase.delete("DELETE FROM sites WHERE id = " + id);
        responseData.then(function(response) {
            console.log(response);
        });
    }

    updateSite(id, site) {
        this.sites[id] = site;
    }
}

export default Sites;