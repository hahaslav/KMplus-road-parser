function trace() {

  var road = "H-27"; // Індекс дороги
  var firstKM = 62; //Початковий кілометр
  var finishKM = 72; // Кінцевий кілометр
  var delay = 25; // Довжина кроку парсера у метрах
  var email = "test@example.com"; //Пошта для отримання результату

  var cout = "";
  var lastCoord;
  for (var i = firstKM * 1000; i <= finishKM * 1000; i += delay) {
    var a = Math.floor(i / 1000);
    var b = i % 1000;
    if (b < 10) b = "00" + b;
    else if (b < 100) b = '0' + b;
    if (b == 0) b = "000";
    Logger.log(a + '+' + b);
    var options = {
      "method" : "get",
      "muteHttpExceptions" : true,
      "headers" : {
        "Accept-Language" : "uk",
        "Authorization" : "973ce346-d8cf-499d-bbbe-5f7ab530cd0b"
        }
    };
    var url = "https://kmplus.ukravtodor.gov.ua/api/v1/kmp/" + road + '/' + a + '+' + b;
    try {
      var response = UrlFetchApp.fetch(url, options);
      var json = response.getContentText();
      if (json != "") {
        var folder = JSON.parse(json);
        var coord = folder["detail"]["coord"];
        if (JSON.stringify(coord) != JSON.stringify(lastCoord)) {
          cout = cout + "\n" + coord;
          lastCoord = coord;
        }
      }
    } catch (err) {
      i -= delay;
    }
  }

  var subject = "Координати автошляху " + road + " на проміжку " + firstKM + " км - " + finishKM + " км";
  MailApp.sendEmail(email, subject, cout);
}
