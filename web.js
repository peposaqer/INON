


$(".porta1").on({
  mouseenter: function () {
    //stuff to do on mouse enter
    $(".porta1 a").css("background-color", "#A01D21");
    $(".porta1 a").css("color", "#FFF");
    $(".porta1 .icon p").css("color", "#FFF");
    $(".porta1 .year").css("color", "#FFF");
    $(".porta1 h5").css("color", "#FFF");
    $(".porta1 i").css("color", "#FFF");
  },
  mouseleave: function () {
    //stuff to do on mouse leave
    $(".porta1 a").css("background-color", "transparent");
    $(".porta1 a").css("color", "#A01D21");
    $(".porta1 .icon p").css("color", "#000");
    $(".porta1 .year").css("color", "#000");
    $(".porta1 h5").css("color", "#000");
    $(".porta1 i").css("color", "#000");
  },
});

$(".porta2").on({
  mouseenter: function () {
    //stuff to do on mouse enter
    $(".porta2 a").css("background-color", "#A01D21");
    $(".porta2 a").css("color", "#FFF");
    $(".porta2 .icon p").css("color", "#FFF");
    $(".porta2 .year").css("color", "#FFF");
    $(".porta2 h5").css("color", "#FFF");
    $(".porta2 i").css("color", "#FFF");
  },
  mouseleave: function () {
    //stuff to do on mouse leave
    $(".porta2 a").css("background-color", "transparent");
    $(".porta2 a").css("color", "#A01D21");
    $(".porta2 .icon p").css("color", "#000");
    $(".porta2 .year").css("color", "#000");
    $(".porta2 h5").css("color", "#000");
    $(".porta2 i").css("color", "#000");
  },
});

$(".porta3").on({
  mouseenter: function () {
    //stuff to do on mouse enter
    $(".porta3 a").css("background-color", "#A01D21");
    $(".porta3 a").css("color", "#FFF");
    $(".porta3 .icon p").css("color", "#FFF");
    $(".porta3 .year").css("color", "#FFF");
    $(".porta3 h5").css("color", "#FFF");
    $(".porta3 i").css("color", "#FFF");
  },
  mouseleave: function () {
    //stuff to do on mouse leave
    $(".porta3 a").css("background-color", "transparent");
    $(".porta3 a").css("color", "#A01D21");
    $(".porta3 .icon p").css("color", "#000");
    $(".porta3 .year").css("color", "#000");
    $(".porta3 h5").css("color", "#000");
    $(".porta3 i").css("color", "#000");
  },
});

$(".porta4").on({
  mouseenter: function () {
    //stuff to do on mouse enter
    $(".porta4 a").css("background-color", "#A01D21");
    $(".porta4 a").css("color", "#FFF");
    $(".porta4 .icon p").css("color", "#FFF");
    $(".porta4 .year").css("color", "#FFF");
    $(".porta4 h5").css("color", "#FFF");
    $(".porta4 i").css("color", "#FFF");
  },
  mouseleave: function () {
    //stuff to do on mouse leave
    $(".porta4 a").css("background-color", "transparent");
    $(".porta4 a").css("color", "#A01D21");
    $(".porta4 .icon p").css("color", "#000");
    $(".porta4 .year").css("color", "#000");
    $(".porta4 h5").css("color", "#000");
    $(".porta4 i").css("color", "#000");
  },
});

// Animation on Scroll
$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    
  });
});

$(".send").click(function () {
  $(".send").removeClass("active");
});


// Change Languages
var language;
// check langauge on loading page
function loadLang() {
  let lang_shor_name = localStorage.getItem("language");
  if (lang_shor_name === "ar") {
    arabicLang();
  } else {
    englishLang();
  }
}
// get Language
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "language/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });
}

// set Language
function setLanguage(lang) {
  localStorage.setItem("language", lang);
}
// set Language
function arabicLang(lang) {
  localStorage.setItem("language", lang);
}
// change to English
$(".en").on("click", englishLang);
// change to Arabic
$(".arbic").on("click", arabicLang);

function arabicLang() {
  $(".chang").addClass("right-dir");
  getLanguage();
  $(".arbic").hide();
  $(".en").show();
  $("#header_h1").text(language.header_h1);
  $("#header_h2").text(language.header_h2);
  $("#header_p").text(language.header_p);
  $("#header_a").text(language.header_a);
  $("#never_h1").text(language.never_h1);
  $("#never_h2").text(language.never_h2);
  $("#never_p").text(language.never_p);
  $("#never_span").text(language.never_span);
  $("#never_span_1").text(language.never_span_1);
  $("#never_span_2").text(language.never_span_2);
  $("#never_a").text(language.never_a);
  $("#stay_h1").text(language.stay_h1);
  $("#stay_h2").text(language.stay_h2);
  $("#stay_p").text(language.stay_p);
  $("#stay_a").text(language.stay_a);
  $("#stay_span").text(language.stay_span);
  $("#stay_span_1").text(language.stay_span_1);
  $("#stay_span_2").text(language.stay_span_2);
  $("#connect_h1").text(language.connect_h1);
  $("#connect_h2").text(language.connect_h2);
  $("#connect_p").text(language.connect_p);
  $("#pricing_h1").text(language.pricing_h1);
  $("#pricing_h2").text(language.pricing_h2);
  $("#pricing_h5_1").text(language.pricing_h5_1);
  $("#pricing_p1").text(language.pricing_p1);
  $("#pricing_p2").text(language.pricing_p2);
  $("#pricing_p3").text(language.pricing_p3);
  $("#pricing_p4").text(language.pricing_p4);
  $("#pricing_p5").text(language.pricing_p5);
  $("#openModal").text(language.openModal);
  $("#openModal_1").text(language.openModal_1);
  $("#openModal_2").text(language.openModal_2);
  $("#openModal_3").text(language.openModal_3);
  $("#pricing_h5_2").text(language.pricing_h5_2);
  $("#pricing_span_1").text(language.pricing_span_1);
  $("#pricing_p6").text(language.pricing_p6);
  $("#pricing_p7").text(language.pricing_p7);
  $("#pricing_p8").text(language.pricing_p8);
  $("#pricing_p9").text(language.pricing_p9);
  $("#pricing_p10").text(language.pricing_p10);
  $("#pricing_p11").text(language.pricing_p11);
  $("#pricing_h5_3").text(language.pricing_h5_3);
  $("#pricing_span_2").text(language.pricing_span_2);
  $("#pricing_p12").text(language.pricing_p12);
  $("#pricing_span_5").text(language.pricing_span_5);
  $("#pricing_span_6").text(language.pricing_span_6);
  $("#pricing_span_7").text(language.pricing_span_7);
  $("#pricing_span_8").text(language.pricing_span_8);
  $("#pricing_p13").text(language.pricing_p13);
  $("#pricing_p14").text(language.pricing_p14);
  $("#pricing_p15").text(language.pricing_p15);
  $("#pricing_p16").text(language.pricing_p16);
  $("#pricing_p17").text(language.pricing_p17);
  $("#pricing_p18").text(language.pricing_p18);
  $("#pricing_h5_4").text(language.pricing_h5_4);
  $("#pricing_p19").text(language.pricing_p19);
  $("#pricing_p20").text(language.pricing_p20);
  $("#pricing_p21").text(language.pricing_p21);
  $("#pricing_p22").text(language.pricing_p22);
  $("#pricing_p23").text(language.pricing_p23);
  $("#pricing_p24").text(language.pricing_p24);
  $("#pricing_p25").text(language.pricing_p25);
  $("#clients_h1").text(language.clients_h1);
  $("#clients_p").text(language.clients_p);
  $("#Contact_h1").text(language.Contact_h1);
  $("#contact_p").text(language.contact_p);
  $("#contact_a").attr("value", language.contact_a);
  $("#contact_h3").text(language.contact_h3);
  $("#contact_copy").text(language.contact_copy);
  $("#contact_email").attr("placeholder", language.contact_email);
  $("#contact_textarea").attr("placeholder", language.contact_textarea);
  // $(".Contact ul").css({ "margin-left": "5rem" });
  $(".header h1").css({ "text-align": "right" });
  $(".header h2").css({ "text-align": "right" });
  $(".header p").css({ "text-align": "right" });
  $("nav ul").css({"margin-right": "auto" });
  $("nav ul").css({ "margin-left": "0" });
  $(".Contact ul").css({ "margin-left": "3rem" });
  $(".never ul img").css({ "margin-left": ".5rem" });
  $(".stay ul img").css({ "margin-left": ".5rem" });
  $(".pricing .porta .span").css({ "margin-left": "0px" });
  $(".pricing .porta .span").css({ "margin-right": "20%" });

  // Function To Dismiss Progress Ring
  // dismissProgress();
}

function englishLang() {
  $(".chang").removeClass("right-dir");
  getLanguage();
  $("#header_h2").text(language.header_h2);
  $("#header_h1").text(language.header_h1);
  $("#header_p").text(language.header_p);
  $("#header_a").text(language.header_a);
  $("#never_h1").text(language.never_h1);
  $("#never_h2").text(language.never_h2);
  $("#never_p").text(language.never_p);
  $("#never_span").text(language.never_span);
  $("#never_span_1").text(language.never_span_1);
  $("#never_span_2").text(language.never_span_2);
  $("#never_a").text(language.never_a);
  $("#stay_h1").text(language.stay_h1);
  $("#stay_h2").text(language.stay_h2);
  $("#stay_p").text(language.stay_p);
  $("#stay_a").text(language.stay_a);
  $("#stay_span").text(language.stay_span);
  $("#stay_span_1").text(language.stay_span_1);
  $("#stay_span_2").text(language.stay_span_2);
  $("#connect_h1").text(language.connect_h1);
  $("#connect_h2").text(language.connect_h2);
  $("#connect_p").text(language.connect_p);
  $("#pricing_h1").text(language.pricing_h1);
  $("#pricing_h2").text(language.pricing_h2);
  $("#pricing_h5_1").text(language.pricing_h5_1);
  $("#pricing_p1").text(language.pricing_p1);
  $("#pricing_p2").text(language.pricing_p2);
  $("#pricing_p3").text(language.pricing_p3);
  $("#pricing_p4").text(language.pricing_p4);
  $("#pricing_p5").text(language.pricing_p5);
  $("#openModal").text(language.openModal);
  $("#openModal_1").text(language.openModal_1);
  $("#openModal_2").text(language.openModal_2);
  $("#openModal_3").text(language.openModal_3);
  $("#pricing_h5_2").text(language.pricing_h5_2);
  $("#pricing_span_1").text(language.pricing_span_1);
  $("#pricing_p6").text(language.pricing_p6);
  $("#pricing_p7").text(language.pricing_p7);
  $("#pricing_p8").text(language.pricing_p8);
  $("#pricing_p9").text(language.pricing_p9);
  $("#pricing_p10").text(language.pricing_p10);
  $("#pricing_p11").text(language.pricing_p11);
  $("#pricing_h5_3").text(language.pricing_h5_3);
  $("#pricing_span_2").text(language.pricing_span_2);
  $("#pricing_p12").text(language.pricing_p12);
  $("#pricing_span_5").text(language.pricing_span_5);
  $("#pricing_span_6").text(language.pricing_span_6);
  $("#pricing_span_7").text(language.pricing_span_7);
  $("#pricing_span_8").text(language.pricing_span_8);
  $("#pricing_p14").text(language.pricing_p14);
  $("#pricing_p13").text(language.pricing_p13);
  $("#pricing_p15").text(language.pricing_p15);
  $("#pricing_p16").text(language.pricing_p16);
  $("#pricing_p17").text(language.pricing_p17);
  $("#pricing_p18").text(language.pricing_p18);
  $("#pricing_h5_4").text(language.pricing_h5_4);
  $("#pricing_p19").text(language.pricing_p19);
  $("#pricing_p20").text(language.pricing_p20);
  $("#pricing_p21").text(language.pricing_p21);
  $("#pricing_p22").text(language.pricing_p22);
  $("#pricing_p23").text(language.pricing_p23);
  $("#pricing_p24").text(language.pricing_p24);
  $("#pricing_p25").text(language.pricing_p25);
  $("#clients_h1").text(language.clients_h1);
  $("#clients_p").text(language.clients_p);
  $("#Contact_h1").text(language.Contact_h1);
  $("#contact_p").text(language.contact_p);
  $("#contact_h3").text(language.contact_h3);
  $("#contact_copy").text(language.contact_copy);
  $("#contact_email").attr("placeholder", language.contact_email);
  $("#contact_textarea").attr("placeholder", language.contact_textarea);
  $("#contact_a").attr("value", language.contact_a);
  $(".header h1").css({ "text-align": "left" });
  $(".header h2").css({ "text-align": "left" });
  $(".header p").css({ "text-align": "left" });
  $("nav ul").css({ "margin-left": "auto" });
  $("nav ul").css({ "margin-right": "0" });
  $(".pricing .porta .span").css({ "margin-left": "20%" });
  $(".pricing .porta .span").css({ "margin-right": "0%" });
  $(".en").hide();
  $(".arbic").show();

  // Function To Dismiss Progress Ring
  // dismissProgress();
}
