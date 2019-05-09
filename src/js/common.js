
$(function () {
  $('.smart-basket__wrapper').smbasket({
    productElement: 'product__element',
    buttonAddToBasket: 'product__add-to-cart-button',
    countryCode: '+7',
    smartBasketCurrency: '₽',
    productQuantityWrapper: 'product__quantity',
    smartBasketMinArea: 'header__basket-min',

    smartBasketMinIconPath: '/img/shopping-basket-wight.svg',
  });
});

$(document).ready(function () {

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


  // card

  var jssor_1_SlideoTransitions = [
    [{b:-1,d:1,o:-1,r:-180},{b:0,d:1220,x:-347,y:-246,sX:0.5,sY:0.5},{b:1220,d:660,x:553,y:240,o:1,r:180,sX:-0.5,sY:-0.5}],
    [{b:-1,d:1,o:-0.9,sX:2.5,sY:2.5,e:{o:5}},{b:0,d:1200,x:-175,y:189,o:0.9,sX:-2.5,sY:-2.5,e:{sX:1,sY:1}}],
    [{b:0,d:1220,x:665,y:397}],
    [{b:-1,d:1,r:90,e:{r:16}},{b:0,d:540,x:-53,y:-68,r:-90}]
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