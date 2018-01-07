var express = require("express"), app = express(); // Heroku의 환경 변수 PORT가 존재하면 환경변수를 사용하고 , 없다면 5000포트를 사용하도록한다. // 로컬에서 실행하기 위해 설정한다. 
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"),
    function () {
        console.log("APP IS RUNNING ON [" + app.get("port") + "]");
    });
app.get("/", function (req, res) {
    res.send("Hello World!");
});

