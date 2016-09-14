class FiveDaysThreeHoursCurrentView {

  constructor(element) {
      this._element = element;
  }

  _template(data) {

      let weather = data.weather[0].main;
      let iconw = IconCodeHelper.getIconCode(data.weather[0].icon);
      let temp = (Math.round(data.main.temp) / 10).toFixed(0);

      return `
              <div class="name">Vancouver</div>
              <div class="message">Today's forecast</div>
              <div class="description"><span class="info">${weather}</span> <span data-icon="${iconw}" class="icon"></span></div>
              <div class="temperature"><span class="info">${temp}</span> <span data-icon="9" class="icon"></span></div>`;
  }

  update(data) {

      this._element.innerHTML = this._template(data[0]);
  }

}
