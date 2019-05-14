function AjaxFormRequest(result_id,formMain,url) { 
  jQuery.ajax({ 
    url: url, 
    type: "POST", 
    dataType: "html", 
    data: jQuery("#"+formMain).serialize(), 
    success: function(response) { 
      $(':input','#'+formMain) 
      .not(':button, :submit, :reset, :hidden') 
      .val('') 
      .removeAttr('checked') 
      .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    }, 
    error: function(response) { 
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      if (result_id != 'messegeResult-sub'){
        par.appendChild(error);
      }
    } 
  }); 
}

$('#feedback').submit(function(e){
  e.preventDefault();
  AjaxFormRequest('messegeResult-feedback','feedback','./feedback.php');
});

$("#filter-button").click(function (e) { 
  $('#filter').slideToggle();
  $(this).toggleClass("active");
});

$(function () {
  $('.smart-basket__wrapper').smbasket({
    productElement: 'product__element',
    buttonAddToBasket: 'product__add-to-cart-button',
    countryCode: '+7',
    smartBasketCurrency: '₽',
    productQuantityWrapper: 'product__quantity',
    smartBasketMinArea: 'header__basket-min',
    smartBasketMinIconPath: 'img/shopping-basket-wight.svg',
  });
});

$(window).scroll(function() {
  if($(this).scrollTop() >= 1) {
      $('header').addClass('stiky-nav');
      if ($(window).width() < 993) {
        $('.top-logo').addClass('display-none');
        $('.header__basket-min').addClass('null-top-40');
      }
      $('.mobile-menu-wrapper').addClass('null-top');
      
  }
  else{
      $('header').removeClass('stiky-nav');
      $('.top-logo').removeClass('display-none');
      $('.mobile-menu-wrapper').removeClass('null-top');
      $('.header__basket-min').removeClass('null-top-40');
  }
});


$(document).ready(function () {



  var touch = $('#touch-menu');
  var menu = $('.navigation-top');

  $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
  });
  $(window).resize(function() {
      var w = $(window).width();
      if (w > 760 && menu.is(':hidden')) {
          menu.removeAttr('style');
      }
  });

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
      $(this).toggleClass('open');
  });


$(".btn__promo").click(function () { 
  $(".promo-item").trigger('click');
});

  $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

  $("a[href='#small-dialog']").click(function () {
    $("#price").text($(this).closest(".product").find(".price").text());
    $("#product-img").attr("src",  $(this).closest(".product").find(".product-img__").attr("src"));
    $("#product-name").text($(this).closest(".product").find("h3").text());
    $("#description").text($(this).closest(".product").find(".d-1").text())

    $(".product__add-to-cart-button").attr("data-sb-id-or-vendor-code", $(this).closest(".product").find(".article").text())
    $(".product__add-to-cart-button").attr("data-sb-product-name", $(this).closest(".product").find("h3").text());
    $(".product__add-to-cart-button").attr("data-sb-product-price", $("#price").text());
    $(".product__add-to-cart-button").attr("data-sb-product-img", $("#product-img").attr("src"));


  });

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  


  $('.slick_1').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.slick_2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline="August 01 2019 00:00:00 GMT+0300"; 
  initializeClock('clockdiv', deadline);
  // card

  var jssor_1_SlideoTransitions = [
    [{b:-1,d:1,o:-1,r:-180},{b:0,d:1220,x:-347,y:-246,sX:0.5,sY:0.5},{b:1220,d:660,x:589,y:246,o:1,r:180,sX:-0.5,sY:-0.5}],
    [{b:-1,d:1,o:-0.9,sX:2.5,sY:2.5,e:{o:5}},{b:0,d:1200,x:-24,y:119,o:0.9,sX:-2.5,sY:-2.5,e:{sX:1,sY:1}}],
    [{b:-1,d:1,o:-1,sX:-0.5,sY:-0.5},{b:0,d:1880,y:5,o:1,sX:0.5,sY:0.5,e:{sX:6,sY:6}}],
    [{b:-1,d:1,r:90,e:{r:16}},{b:540,d:680,x:-18,y:-49,r:-90}],
    [{b:-1,d:1,o:-1,sX:-0.5,sY:-0.5},{b:0,d:1000,o:1,sX:0.5,sY:0.5}],
    [{b:-1,d:1,o:-1,sX:-0.8,sY:-0.8},{b:0,d:1160,o:1,sX:0.8,sY:0.8}],
    [{b:-1,d:1,o:-1,sX:-1,sY:-1},{b:0,d:1660,o:1,sX:1,sY:1}],
    [{b:-1,d:1,o:-1,sX:-1,sY:-1,e:{sX:12,sY:19}},{b:0,d:800,o:1,sX:1,sY:1,e:{sX:5,sY:20}}],
    [{b:-1,d:1,o:-1,sX:1,sY:1},{b:0,d:1000,o:1,sX:-1,sY:-1}],
    [{b:-1,d:1,o:-1,sX:1,sY:1},{b:0,d:1160,o:1,sX:-1,sY:-1}],
    [{b:-1,d:1,o:-1,sX:1.5,sY:1.5},{b:0,d:1660,o:1,sX:-1.5,sY:-1.5}],
    [{b:-1,d:1,o:-1,sX:-1,sY:-1,e:{sX:12,sY:19}},{b:0,d:800,o:1,sX:1,sY:1,e:{sX:5,sY:20}}]
  ];

  var jssor_1_options = {
    $AutoPlay: 1,
    $FillMode: 2,
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: jssor_1_SlideoTransitions
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 3000;

  function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }

  ScaleSlider();

  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*#endregion responsive code end*/

});
var mixer = mixitup('.mixit');


// var container = document.querySelector('[data-ref="container"]');
// var minSizeRangeInput = document.querySelector('[name="minSize"]');
// var maxSizeRangeInput = document.querySelector('[name="maxSize"]');

// var mixer = mixitup(container, {
//     animation: {
//         duration: 350
//     }
// });

/**
 * Reads the values from our two native range inputs, returning an object
 * with `min` and `max` numeric values.
 *
 * @return {object}
 */

function getRange() {
  
    var min = +$('input[name="price"]:checked').data('priceMin');
    var max = +$('input[name="price"]:checked').data('priceMax');
    return {
        min: min,
        max: max
    };
}

/**
 * Ensures that the mixer is re-filtered whenever the value of a range
 * input changes.
 *
 * @return {void}
 */

function handleRangeInputChange() {
    mixer.filter(mixer.getState().activeFilter);
}

/**
 * Allows us to manipulate the test result (`true` or `false`) of a
 * target against the current filter selector(s) (e.g. `.blue`).
 *
 * In this case we want to apply an additional constraint of whether or not the
 * target is within an arbitrary range, and override the test result to `false`
 * if not. The function must always return the test result.
 *
 * @param {boolean} testResult
 *     A boolean indicating whether or not the target is passing the current filtering criteria.
 * @param {mixitup.Target} target
 *     A reference to the target being tested
 * @return {boolean}
 */

function filterTestResult(testResult, target) {
    var size = Number(target.dom.el.getAttribute('data-size'));
    var range = getRange();

    if (size < range.min || size > range.max) {
        testResult = false;
    }

    return testResult;
}

// Using the static method `registerFilter` from the MixItUp plugins API, we can
// register the above function as a filter, to manipulate the value returned from the
// `testResultEvaluateHideShow` hook.

mixitup.Mixer.registerFilter('testResultEvaluateHideShow', 'range', filterTestResult);

// Listen for change events from the two range inputs
$('input[name="price"]').click(function (e) { 
  handleRangeInputChange();
  
});
// minSizeRangeInput.addEventListener('change', handleRangeInputChange);
// maxSizeRangeInput.addEventListener('change', handleRangeInputChange);

  /*#endregion responsive code end*/