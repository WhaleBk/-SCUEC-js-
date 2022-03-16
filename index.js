
//老馆二楼实验基础
var malenum = '7a73c2e02dc944ea809fa3f99a758805';
var maleseat = 33;
var starttime = 10;
var endtime = 22;

var femalenum = '004be994fc3d46f485a1424c7f50c929';
var femaleseat = 33;

var strcookie = $("script").text();//获取cookie字符串
var arrcookie = strcookie.split("token");//分割
var b = "hhh"
b = arrcookie[1].split("}")[0]
b = b.substring(3, b.length - 8)
malenum = b;

//正儿八经的可以在控制台跑的代码，跨域请求问题尚未解决
function rob() {
    
    for (let j = 0; j < 20; j++) {

        maleseat = maleseat + j * 1;
        $.ajax({
            type: "get",
            dataType: "JSON",
            contentType: "application/json",

            url: "https://office.chaoxing.com/data/apps/seatengine/submit?roomId=1855&startTime=" + starttime + "%3A30&endTime=" + endtime + "%3A30&day=2022-03-15&captcha=&seatNum=" + maleseat + "&token=" + malenum,

            success: function (res) {
                console.log(res);
                if (res.success == true) {

                    for (let i = 1; i < 6; i++) {

                        femaleseat = maleseat + i;
                        $.ajax({
                            type: "get",
                            dataType: "JSON",
                            contentType: "application/json",

                            url: "https://office.chaoxing.com/data/apps/seatengine/submit?roomId=1855&startTime=" + starttime + "%3A30&endTime=" + endtime + "%3A30&day=2022-03-14&captcha=&seatNum=" + maleseat + "&token=" + femalenum,

                            success: function (res) {
                                console.log(res);

                            },
                            error: function () {
                                
                            }
                        });


                    }

                }
                else {

                }
            },
            error: function () {
                
            }
        });


    }


}
rob();