class FiveDaysThreeHoursController {

    constructor() {

      let $ = document.querySelector.bind(document);
      let dao = new   FiveDaysThreeHoursDao();
      let service = new FiveDaysThreeHoursService(dao);

      this._currentView = new FiveDaysThreeHoursCurrentView($('#currentWeatherView'));
      this._timeView = new FiveDaysThreeHoursTimeView($('#timeWeatherView'));
      this._descriptionView = new FiveDaysThreeHoursDescriptionView($('#descriptionWeatherView'));
      this._weekView = new FiveDaysThreeHoursWeekView($('#weekWeatherView'));

      service.listAll.then((data)=>{
          this._currentView.update(data);
          this._timeView.update(data);
          this._descriptionView.update(data);
          this._weekView.update(data);
      });

    }

}
