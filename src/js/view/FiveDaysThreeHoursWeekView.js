class FiveDaysThreeHoursWeekView {

  constructor(element) {
      this._element = element;
  }

  _template(data) {

      let day = DateHelper.getShortWeekDay(data.date);
      let iconw = IconCodeHelper.getIconCode(data.weather[0].icon);

      return `
          <div class="row">
              <div class="day">${day}</div>
              <div class="icon-temp"><span data-icon="${iconw}" class="icon"></span><br /></div>
              <div class="max-temp">${data.main.temp_max.toFixed(1)}</div>
              <div class="min-temp">${data.main.temp_min.toFixed(1)}</div>
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
