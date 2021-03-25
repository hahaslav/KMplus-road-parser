function trace() {

  var road = "H-27"; // Індекс дороги
  var firstKM = 0; //Початковий кілометр
  var finishKM = 25; // Кінцевий кілометр
  var email = "test@example.com"; //Пошта для отримання результату

  var cout = "";
  for (i = firstKM; i <= finishKM; i++) {
    Logger.log(i + " km");
    var options = {
      "method" : "get",
      "muteHttpExceptions" : true,
      "headers" : {
        "Accept-Language" : "uk",
        "Authorization" : "973ce346-d8cf-499d-bbbe-5f7ab530cd0b"
        }
    };
    var url = "https://kmplus.ukravtodor.gov.ua/api/v1/kmp/" + road + '/' + i + "+000";
    try {
      var response = UrlFetchApp.fetch(url, options);
      var json = response.getContentText();
      if (json != "") {
        var folder = JSON.parse(json);
        var coord = folder["detail"]["coord"];
        cout = cout + "\n" + coord;
      }
    } catch (err) {
      i--;
    }
  }

  MailApp.sendEmail(email, "Test Output", cout);
}
