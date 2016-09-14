class IconCodeHelper {

    constructor() {
       throw new Error("IconCodeHelper is static and cannot be instantiated");
    }

    static getIconCode(value) {

        let iconCode = null;

        switch (value) { 
          case '01d': iconCode = '/'; break;
          case '01n': iconCode = '*'; break;
          case '02d': iconCode = 'R'; break;
          case '02n': iconCode = 'S'; break;
          case '03d': iconCode = 'a'; break;
          case '03n': iconCode = 'a'; break;
          case '04d': iconCode = '1'; break;
          case '04n': iconCode = '1'; break;
          case '09d': iconCode = 'b'; break;
          case '09n': iconCode = 'b'; break;
          case '10d': iconCode = 'h'; break;
          case '10n': iconCode = 'i'; break;
          case '11d': iconCode = 'c'; break;
          case '11n': iconCode = 'c'; break;
          case '13d': iconCode = 'N'; break;
          case '13n': iconCode = 'N'; break;
          case '50d': iconCode = 'k'; break;
          case '50n': iconCode = 'k'; break;
          default: iconCode = '/'; break;
        }

        return iconCode;
    }

}
