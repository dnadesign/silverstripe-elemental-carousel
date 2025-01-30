"use strict";

document.addEventListener("DOMContentLoaded", function() {
  Array.prototype.slice
    .call(document.querySelectorAll("[data-element-carousel]"))
    .forEach(function(element) {
      var options = {
        infinite: 1,
        slideSpeed: 300,
        enableMouseEvents: true,
        classNameFrame: "element-carousel__frame",
        classNameSlideContainer: "element-carousel__slides",
        classNamePrevCtrl: "element-carousel__prev",
        classNameNextCtrl: "element-carousel__next"
      };

      var dots = element.querySelector(".element-carousel__dots");

      function stopCurrentVideo(e) {
        if (e.type === "before.lory.slide") {
          var current = element.querySelector(
            ".element-carousel__slide.active"
          );
          var container = current.querySelector(".youtube-embed__container");
          var iframe = current.querySelector("iframe");

          if (container) {
            if (container.classList.contains("is-active")) {
              container.classList.remove("is-active");
              iframe.setAttribute("src", "");
            } else {
              iframe.setAttribute("src", iframe.getAttribute("src"));
            }
          }
        }
      }

      if (dots) {
        function handleDotEvent(e) {
          if (e.type === "after.lory.init") {
            Array.prototype.slice
              .call(dots.querySelectorAll("li"))
              .forEach(function(li) {
                li.addEventListener("click", function(e) {
                  carousel.slideTo(
                    Array.prototype.indexOf.call(
                      dots.querySelectorAll("li"),
                      e.target
                    )
                  );
                });
              });
          }

          if (e.type === "after.lory.slide") {
            Array.prototype.slice
              .call(dots.querySelectorAll("li"))
              .forEach(function(li) {
                li.classList.remove("active");
              });
            dots
              .querySelectorAll("li")
              [e.detail.currentSlide - 1].classList.add("active");
          }
        }

        element.addEventListener("after.lory.init", handleDotEvent);
        element.addEventListener("after.lory.slide", handleDotEvent);
        element.addEventListener("before.lory.slide", stopCurrentVideo);
      }

      var carousel = lory(element, options);

      // Auto-scroll function with corrected index calculation
      function autoScroll() {
        var totalSlides =
          element.querySelectorAll(".element-carousel__slide").length - 2; // remove additional 2 slides for wrap
        var currentIndex = carousel.returnIndex();

        // Adjust nextIndex to handle wrap-around
        var nextIndex = ((currentIndex + 1) % totalSlides) - 1;

        carousel.slideTo(nextIndex + 1); // +1 because slideTo() is 1-indexed
      }

      // Check if the element has the data-auto-scroll attribute
      if (element.hasAttribute("data-auto-scroll-interval")) {
        var autoScrollInterval = element.getAttribute(
          "data-auto-scroll-interval"
        );
        var intervalDuration = parseInt(autoScrollInterval, 10) * 1000; // Convert seconds to milliseconds
        var scrollIntervalId = setInterval(autoScroll, intervalDuration);

        element.addEventListener("mouseover", function() {
          clearInterval(scrollIntervalId); // Pause on mouse over
        });

        element.addEventListener("mouseout", function() {
          scrollIntervalId = setInterval(autoScroll, intervalDuration); // Resume on mouse out
        });
      }

      // Add pause and resume functionality based on attributes
      document.querySelectorAll("[data-carousel-pause]").forEach(button => {
        button.addEventListener("click", () => {
          clearInterval(scrollIntervalId); // Pause auto-scroll
        });
      });

      document.querySelectorAll("[data-carousel-resume]").forEach(button => {
        button.addEventListener("click", () => {
          if (element.hasAttribute("data-auto-scroll-interval")) {
            var autoScrollInterval = element.getAttribute(
              "data-auto-scroll-interval"
            );
            var intervalDuration = parseInt(autoScrollInterval, 10) * 1000; // Convert seconds to milliseconds
            scrollIntervalId = setInterval(autoScroll, intervalDuration); // Resume auto-scroll
          }
        });
      });
    });
});
