class FiveDaysThreeHoursModel {

    constructor(date, main, weather, clouds, wind, rain, snow) {
        this._date      = new Date(date*1000);
        this._main      = main ? main : {};
        this._weather   = weather ? weather : [];
        this._clouds    = clouds ? clouds : {};
        this._wind      = wind ? wind : {};
        this._rain      = rain ? rain : {};
        this._snow      = snow ? snow : {};
        Object.freeze(this);
    }

    get city(){
        return "Vancouver";
    }

    get date(){
        return new Date(this._date.getTime());
    }

    get main(){
        return Object.assign({}, this._main); // [].concat(arr)
    }

    get weather(){
        return [].concat(this._weather);
    }

    get clouds(){
        return Object.assign({}, this._clouds);
    }

    get wind(){
        return Object.assign({}, this._wind);
    }

    get rain(){
        return Object.assign({}, this._rain);
    }

    get snow(){
        return Object.assign({}, this._snow);
    }

}
