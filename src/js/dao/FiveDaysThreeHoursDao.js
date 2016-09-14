class FiveDaysThreeHoursDao {

    constructor() {
        this._url = "http://api.openweathermap.org/data/2.5/forecast?q=Vancouver,us&appid=411b84e404537fea26739061f4a36729";
        Object.freeze(this);
    }

    list() {

        return new Promise((resolve, reject)=>{

            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                try {
                    if (this.readyState == 4 && this.status == 200) {
                        let data = JSON.parse(this.responseText);
                        resolve(data.list);
                    } else if (this.readyState == 4 && this.status != 200) {
                        reject(this.statusText);
                    }
                } catch(e){
                    reject(e);
                }
            };

            xhttp.open("GET", this._url, true);
            xhttp.send();

        });

    }

}
