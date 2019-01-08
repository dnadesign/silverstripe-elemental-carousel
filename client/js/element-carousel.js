'use strict';

document.addEventListener('DOMContentLoaded', function () {
  Array.prototype.slice.call(document.querySelectorAll('[data-element-carousel]')).forEach(function (element) {
    var options = {
      infinite: 1,
      enableMouseEvents: true,
      classNameFrame: "element-carousel__frame",
      classNameSlideContainer: "element-carousel__slides",
      classNamePrevCtrl: "element-carousel__prev",
      classNameNextCtrl: "element-carousel__next"
    }

    var dots = element.querySelector(".element-carousel__dots");

    function stopCurrentVideo(e) {
      if (e.type === "before.lory.slide") {
        var current = element.querySelector(".element-carousel__slide.active");
        var container = current.querySelector(".youtube-embed__container");
        var iframe = current.querySelector("iframe");

        if (container) {
          // Container with custom button
          if (container.classList.contains("is-active")) {
            container.classList.remove("is-active");
            iframe.setAttribute("src", "");
            // Just an iframe
          } else {
            iframe.setAttribute("src", iframe.getAttribute("src"));
          }
        }
      }
    }

    if (dots) {
      function handleDotEvent(e) {
        if (e.type === "after.lory.init") {
          Array.prototype.slice.call(dots.querySelectorAll("li")).forEach(function(li) {
            li.addEventListener("click", function(e) {
              carousel.slideTo(Array.prototype.indexOf.call(dots.querySelectorAll("li"), e.target));
            });
          });
        }

        if (e.type === "after.lory.slide") {
          Array.prototype.slice.call(dots.querySelectorAll("li")).forEach(function(li) { li.classList.remove("active") });
          Array.prototype.slice.call(dots.querySelectorAll("li"))[e.detail.currentSlide - 1].classList.add("active");
        }
      }

      element.addEventListener("after.lory.init", handleDotEvent);
      element.addEventListener("after.lory.slide", handleDotEvent);
      element.addEventListener("before.lory.slide", stopCurrentVideo);
    }

    var carousel = lory(element, options);
  });
});
