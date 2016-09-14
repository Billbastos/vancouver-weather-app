class FiveDaysThreeHoursDescriptionView {

  constructor(element) {
      this._element = element;
  }

  _template(data) {

    let rain = data.rain['3h'] ? data.rain['3h'] : 0;
    let snow = data.snow['3h'] ? data.snow['3h'] : 0;

      return `
        <div class="description" >
            <ul class="group-1">
                <li class="desc-line"><span>Wind:</span> ${data.wind.speed} m/s</li>
                <li class="desc-line"><span>Cloudiness:</span> ${data.clouds.all} %</li>
                <li class="desc-line"><span>Pressure:</span> ${data.main.pressure} hPa</li>
            </ul>
        </div>
        <div class="description" >
            <ul class="group-2">
                <li class="desc-line"><span>Humidity:</span> ${data.main.humidity} %</li>
                <li class="desc-line"><span>Rain:</span> ${rain} last 3h </li>
                <li class="desc-line"><span>Snow:</span> ${snow} last 3h </li>
            </ul>
        </div>
      `
  }

  update(data) {

      this._element.innerHTML = this._template(data[0]);
  }

}
