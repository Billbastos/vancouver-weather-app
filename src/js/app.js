(function(){

    let fiveDaysData;
    let dao = new FiveDaysThreeHoursDao();
    let service = new FiveDaysThreeHoursService(dao);
    service.listAll();
    console.log("oba");
})();
