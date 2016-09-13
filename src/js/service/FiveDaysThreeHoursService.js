class FiveDaysThreeHoursService {

    constructor(dao) {
        this._dao = dao;
        Object.freeze(this);
    }

    parseData(d) {
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

    listAll() {
        this._dao.list().then((data)=>{
            let listFivaeDaysData = [];
            data.map((d)=>{
                listFivaeDaysData.push(this.parseData(d));
                // Montar o template aqui !!! 
            });
            console.log(listFivaeDaysData);
        }, (error)=>{
            console.log('Error '+ error);
        });
    }

}
