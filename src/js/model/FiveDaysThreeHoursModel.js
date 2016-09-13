class FiveDaysThreeHoursModel {

    constructor(date, main, weather, clouds, wind, rain, snow) {
        this._date      = new Date(date*1000);
        this._main      = main ? main : {};
        this._weather   = weather ? weather : {};
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
        return this._main.map((m)=>{return m;});
    }

    get weather(){
        return this._weather.map((w)=>{return w;});
    }

    get clouds(){
        return this._clouds.map((c)=>{return c;});
    }

    get wind(){
        return this._wind.map((w)=>{return w;});
    }

    get rain(){
        return this._rain.map((r)=>{return r;});
    }

    get snow(){
        return this._snow.map((s)=>{return s;});
    }

}
