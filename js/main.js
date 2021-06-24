var slide = 3;
$(document).ready(function () {
    let time, ms = -500;
    let x = $(".slide-item").length / slide;
    clearTimeout(time);
    $(".slide-item").css("display", "none");
    for(let i = 1; i <= slide; i++) {
        time = setTimeout(() => {
            $(".slide-item:nth-child(" + i + ")").css("display", "flex");
        }, ms += 500);
    }
    for(let i = 1; i <= x; i++) {
        $(".num").append("<a href='#' onclick='uygula(this)'>" + i + "</a>");
    }
});
function uygula(n) {
    let baslangic, bitis, time, ms = -500;
    clearTimeout(time);
    if(n <= 1) {
        baslangic = 0;
    } else {
        baslangic = ($(n).html() - 1) * slide;
    }
    if($(n).html() == 1) {
        $("body").css("background-image", "url(images/lordOfTheRings.jpg)");
    } else if ($(n).html() == 2) {
        $("body").css("background-image", "url(images/harryPotter.jpg)");
    } else {
        $("body").css("background-image", "url(images/xmen.jpg)");
    }
    bitis = $(n).html() * slide;
    $(".slide-item").css("display", "none");
    for(let i = baslangic + 1; i <= bitis; i++) {
        time = setTimeout(() => {
            $(".slide-item:nth-child(" + i + ")").css("display", "flex");
        }, ms += 500);
    }
}
