// Detect mobile screen size
function isMobileScreen() {
  return window.matchMedia("(max-width: 992px)").matches;
}

// Detect desktop screen size
function isDesktopScreen() {
  return window.matchMedia("(min-width: 992px)").matches;
}

// Function to remove classes that start with "animate__"
function removeAnimationClasses(tag) {
  tag.classList.forEach(function (className) {
    if (className.startsWith("animate__")) {
      tag.classList.remove(className);
    }
  });
}

// Function to add animation classes to the tag
function addAnimationClassesToTag(tag, classes) {
  removeAnimationClasses(tag); // Remove old animation classes

  // Add new animation classes
  classes.forEach(function (className) {
    tag.classList.add(className);
  });
}

// Select the tags and their respective classes
var tagsAndClasses = [
  {
    tag: document.querySelector(".newsletter"),
    desktopClasses: ["animate__animated", "animate__zoomInDown"],
  },
  {
    tag: document.querySelector(".newsletter__picture"),
    desktopClasses: [
      "animate__animated",
      "animate__delay-1s",
      "animate__zoomIn",
    ],
    mobileClasses: [
      "animate__animated",
      "animate__slow",
      "animate__slideInDown",
    ],
  },
  {
    tag: document.querySelector(".newsletter__content"),
    desktopClasses: [
      "animate__animated",
      "animate__delay-1s",
      "animate__slow",
      "animate__fadeIn",
    ],
    mobileClasses: [
      "animate__animated",
      "animate__slow",
      "animate__slideInLeft",
    ],
  },
  {
    tag: document.querySelector(".newsletter__form"),
    desktopClasses: [
      "animate__animated",
      "animate__delay-1s",
      "animate__slow",
      "animate__flipInX",
    ],
    mobileClasses: [
      "animate__animated",
      "animate__delay-1s",
      "animate__slow",
      "animate__flipInX",
    ],
  },
  {
    tag: document.querySelector(".success-message"),
    desktopClasses: [
      "animate__animated",
      "animate__fast",
      "animate__zoomInDown",
    ],
    mobileClasses: [
      "animate__animated",
      "animate__faster",
      "animate__fadeInLeft",
    ],
  },
];

// Function to handle adding animation classes
function handleAnimationClasses() {
  tagsAndClasses.forEach(function (item) {
    var tag = item.tag;
    var desktopClasses = item.desktopClasses;
    var mobileClasses = item.mobileClasses;

    if (isDesktopScreen()) {
      if (tag && desktopClasses) {
        addAnimationClassesToTag(tag, desktopClasses);
      }
    } else if (isMobileScreen()) {
      if (tag && mobileClasses) {
        addAnimationClassesToTag(tag, mobileClasses);
      }
    }
  });
}

// Execute the function on page load
window.addEventListener("load", handleAnimationClasses);

// Execute the function on window resize
window.addEventListener("resize", handleAnimationClasses);
