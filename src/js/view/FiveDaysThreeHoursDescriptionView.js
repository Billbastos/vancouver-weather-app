class FiveDaysThreeHoursDescriptionView {

  constructor(element) {
      this._element = element;
  }

  _template() {

      return `
      description sunny day`;
  }

  update() {

      this._element.innerHTML = this._template();
  }

}
