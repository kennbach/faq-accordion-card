"use strict";

// Get all the FAQ  elements
const faqs = document.getElementsByClassName("faq-question");

// Create an array of the elements
const faqsArray = Array.from(faqs);

faqsArray.forEach((faq) => {
  // Add "click" event listener to each FAQ
  faq.addEventListener("click", function () {
    // When clicked, toggle the active class
    this.classList.toggle("active");
    // Then toggle show-answer on the faq-answer element
    this.nextElementSibling.classList.toggle("show-answer");
  });
});
