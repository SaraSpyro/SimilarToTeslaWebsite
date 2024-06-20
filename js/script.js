$(document).ready(function(){
    
    $(".payWay .btn").click(function() {
        
        $(".payWay .btn").removeClass("activeBtn");
        $(this).addClass("activeBtn");
        $(".payWayTxt").val($(this).attr("data-id"));
        var noePardakht = $(".payWayTxt").val();
        if (noePardakht == 1) {
            $(".potentialSavingTxt").addClass("dNone");
            $(".purchasePriceTxt").removeClass("dNone");
            $(".purchasePriceTxt").addClass("dBlock");
        } else {
            $(".purchasePriceTxt").addClass("dNone");
            $(".potentialSavingTxt").removeClass("dNone");
            $(".potentialSavingTxt").addClass("dBlock");
        }

        // $(".count").each(function() {
        //     $(this)
        //         .prop("Counter", 0)
        //         .animate(
        //             { Counter: $(this).text() },
        //             {
        //                 duration: 4e3,
        //                 easing: "swing",
        //                 step: function (a) {
        //                     $(this).text(Math.ceil(a));
        //                 },
        //             }
        //         );
        // });
    });

    $("#menu ul li").click(function() {
        var target = $(this).attr("data-scroll");
        $('html, body').animate({
            scrollTop: $("." + target).offset().top
        });
        
    });

})


