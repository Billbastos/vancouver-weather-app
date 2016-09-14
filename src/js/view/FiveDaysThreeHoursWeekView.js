class FiveDaysThreeHoursWeekView {

  constructor(element) {
      this._element = element;
  }

  _template(data) {
      console.log(data.date);
      let day = DateHelper.getShortWeekDay(data.date);
      let iconw = IconCodeHelper.getIconCode(data.weather[0].icon);
      let minTemp = (Math.round(data.main.temp_min) / 10).toFixed(0);
      let maxTemp = (Math.round(data.main.temp_max) / 10).toFixed(0);

      return `
          <div class="row">
              <div class="day">${day}</div>
              <div class="icon-temp"><span data-icon="${iconw}" class="icon"></span><br /></div>
              <div class="max-temp">${maxTemp}</div>
              <div class="min-temp">${minTemp}</div>
          </div>
        `;
  }

  update(data) {

    let days = [];
    for(let i = 0; i < data.length; i++){
        if(days.some(d=>d===data[i].date.getDate()))
            continue;
        else
            days.push(data[i].date.getDate());
        this._element.innerHTML += this._template(data[i]);
    };
  }

}
