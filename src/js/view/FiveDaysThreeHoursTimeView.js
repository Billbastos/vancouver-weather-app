class FiveDaysThreeHoursTimeView {

  constructor(element) {
      this._element = element;
  }

  _template(data) {

      let hour = `${data.date.getHours()}:00`;
      let iconw = IconCodeHelper.getIconCode(data.weather[0].icon);
      let temp = (Math.round(data.main.temp) / 10).toFixed(0);

      return `
          <ul class="item">
              <li class="unit">${hour}</li>
              <li class="unit"><span data-icon="${iconw}" class="icon"></span></li>
              <li class="unit">${temp} &#8451;</li>
          </ul>
      `;
  }

  update(data) {
      for(let i = 0; i < 8; i++){
          this._element.innerHTML += this._template(data[i]);
      };
  }

}
