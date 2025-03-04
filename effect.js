$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function(){
    var vw;
    $(window).resize(function(){
        vw = $(window).width() / 2;
        let topPosition = $(window).width() < 768 ? 150 : 240;  // Adjust for mobile

        $('#b11').animate({top: topPosition, left: vw - 150}, 800);
        $('#b22').animate({top: topPosition, left: vw - 100}, 800);
        $('#b33').animate({top: topPosition, left: vw - 50}, 800);
        $('#b44').animate({top: topPosition, left: vw}, 800);
        $('#b55').animate({top: topPosition, left: vw + 50}, 800);
        $('#b66').animate({top: topPosition, left: vw + 100}, 800);
    });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopSeven();
        });
    }

    function loopEight() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b8').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopEight();
        });
    }

    function loopNine() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b9').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopNine();
        });
    }

    function loopTen() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b10').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopTen();
        });
    }

    function loopEleven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b12').animate({left: randleft, bottom: randtop}, 10000, function(){
            loopEleven();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top: -500}, 8000);
        $('#b1,#b4,#b5,#b7,#b10').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6,#b8,#b9,#b12').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loopEight();
        loopNine();
        loopTen();
        loopEleven();
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function(){
        vw = $(window).width() / 2;
    
        // Stop existing animations
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b12').stop();
    
        // Renaming elements for new order
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');
        $('#b8').attr('id','b88');
        $('#b9').attr('id','b99');
        $('#b10').attr('id','b100');
        $('#b12').attr('id','b101');
    
        // Arrange balloons in two rows
        // **Top Row: H D A Y**
        $('#b11').animate({top: 180, left: vw - 250}, 800);  // H
        $('#b22').animate({top: 180, left: vw - 150}, 800);  // D
        $('#b33').animate({top: 180, left: vw - 50}, 800);   // A
        $('#b44').animate({top: 180, left: vw + 50}, 800);   // Y
    
        // **Bottom Row: N A V A T H A**
        $('#b55').animate({top: 300, left: vw - 300}, 800);  // N
        $('#b66').animate({top: 300, left: vw - 200}, 800);  // A
        $('#b77').animate({top: 300, left: vw - 100}, 800);  // V
        $('#b88').animate({top: 300, left: vw}, 800);        // A
        $('#b99').animate({top: 300, left: vw + 100}, 800);  // T
        $('#b100').animate({top: 300, left: vw + 200}, 800); // H
        $('#b101').animate({top: 300, left: vw + 300}, 800); // A
    
        $('.balloons').css('opacity', '0.9');
    
        setTimeout(() => {
            $('#b11 h2').text('H');
            $('#b22 h2').text('D');
            $('#b33 h2').text('A');
            $('#b44 h2').text('Y');
            $('#b55 h2').text('N');
            $('#b66 h2').text('A');
            $('#b77 h2').text('V');
            $('#b88 h2').text('A');
            $('#b99 h2').text('T');
            $('#b100 h2').text('H');
            $('#b101 h2').text('A');
    
            $('.balloons h2').fadeIn(3000);
        }, 1000);
    
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });
        
        var i;

        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
            i = i + 1;
            $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
            if (i == 50) {
                $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                    $('.cake').fadeIn('fast');
                });
            } else {
                msgLoop(i);
            }
        });
        }
        
        msgLoop(0);

        $(this).fadeOut('slow').delay(15000).promise().done(function(){
            $('#play1').fadeIn('slow');
        });
    });
});