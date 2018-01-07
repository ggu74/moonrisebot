var express = require("express"), app = express(); // Heroku�� ȯ�� ���� PORT�� �����ϸ� ȯ�溯���� ����ϰ� , ���ٸ� 5000��Ʈ�� ����ϵ����Ѵ�. // ���ÿ��� �����ϱ� ���� �����Ѵ�. 
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"),
    function () {
        console.log("APP IS RUNNING ON [" + app.get("port") + "]");
    });
app.get("/", function (req, res) {
    res.send("Hello World!");
});

