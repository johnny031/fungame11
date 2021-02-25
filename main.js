let words = [["奶茶","咖啡"],["梅花","黑桃"],["貝多芬","莫札特"],["麻糬","湯圓"],["游泳","浮潛"],["鑽石","翡翠"],["殭屍","木乃伊"],["小號","法國號"]]
let count = 0;
let surprise = false;

$("#next_button").on("click", function(){
    if(!surprise){
        $("#answer_h1").html(words[count][0]);
        $("#trap_h1").html(words[count][1]);
        count++;
    } else {
        alert("請點擊繼續");
        alert("請點擊繼續");
        alert("若為出題者請繼續...");
        alert("謝謝你的...");
        alert("諸多照顧...");
        alert("我...");
        alert("只是想說...");
        setTimeout(() => {
            $("body").css({"background-color": "pink"});
        }, 800);
        $(".board").fadeOut(800);
        $(".background").fadeOut(800);
        $("#birthday_div").delay(800).fadeIn(800);
    }
});
$("#surprise_button").on("click", function(){
    surprise = true;
});