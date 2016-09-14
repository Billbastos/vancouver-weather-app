class FiveDaysThreeHoursService {

    constructor(dao) {
        this._dao = dao;
        Object.freeze(this);
    }

    _parseData(d) {
      return new FiveDaysThreeHoursModel(
          d.dt,
          d.main,
          d.weather,
          d.clouds,
          d.wind,
          d.rain,
          d.snow
      );
    }

    get listAll() {

        return this._dao.list().then((data)=>{
            let arrRef = [];
            data.map((d)=>{
                arrRef.push(this._parseData(d));
            });
            return arrRef;
        }, (e)=>{
            throw new Error(e);
        });
    }

}
