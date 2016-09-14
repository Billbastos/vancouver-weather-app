class DateHelper {

    constructor() {
        throw new Error("DateHelper is static and cannot be instantiated");
    }

    static getShortWeekDay(date) {

      let weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      return weekday[date.getDay()];
    }


}
