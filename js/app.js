NProgress.start();
$(document).ready(() => {
  NProgress.done();
});

const scrollFunction = (section) => {
  if (window.innerWidth >= 1200) {
    window.scrollTo({ top: section.offset().top - 110 });
  } else {
    window.scrollTo({ top: section.offset().top - 70 });
  }
};

$(".burger").click(() => {
  $(".mobileheader").toggleClass("show");
});

// navigation
$("#logo").click(() => window.scrollTo({ top: 0 }));
$("#home-btn").click(() => window.scrollTo({ top: 0 }));
$("#services-btn").click(() => scrollFunction($("#services")));
$("#about-btn").click(() => scrollFunction($("#about")));
$("#clients-btn").click(() => scrollFunction($("#clients")));
$("#contacts-btn").click(() => scrollFunction($("#contacts")));

$("#home-btn-mobile").click(() => {
  $(".mobileheader").removeClass("show");
  setTimeout(() => {
    window.scrollTo({ top: 0 });
  }, 500);
});

$("#services-btn-mobile").click(() => {
  $(".mobileheader").removeClass("show");
  setTimeout(() => {
    scrollFunction($("#services"));
  }, 500);
});

$("#about-btn-mobile").click(() => {
  $(".mobileheader").removeClass("show");
  setTimeout(() => {
    scrollFunction($("#about"));
  }, 500);
});

$("#clients-btn-mobile").click(() => {
  $(".mobileheader").removeClass("show");
  setTimeout(() => {
    scrollFunction($("#clients"));
  }, 500);
});

$("#contacts-btn-mobile").click(() => {
  $(".mobileheader").removeClass("show");
  setTimeout(() => {
    scrollFunction($("#contacts"));
  }, 500);
});

// footer
$("#year").append(new Date().getFullYear());
