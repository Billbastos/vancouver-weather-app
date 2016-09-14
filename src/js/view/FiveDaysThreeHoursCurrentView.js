class FiveDaysThreeHoursCurrentView {

  constructor(element) {
      this._element = element;
  }

  _template(data) {

      let iconw = IconCodeHelper.getIconCode(data.weather[0].icon);

      return `
              <div class="name">Vancouver</div>
              <div class="message">Today's forecast</div>
              <div class="description"><span class="info">${data.weather[0].main}</span> <span data-icon="${iconw}" class="icon"></span></div>
              <div class="temperature"><span class="info">${data.main.temp.toFixed(1)}</span> <span data-icon="9" class="icon"></span></div>`;
  }

  update(data) {

      this._element.innerHTML = this._template(data[0]);
  }

}
