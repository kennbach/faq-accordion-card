"use strict";

// 1. Get all the FAQ  elements
// 2. Create an array of the elements
// 3. Add "click" event listener to each FAQ
// 4. Add "click" callback to toggle the active class
//    And to toggle show-answer on the faq-answer element

const faqs = document.getElementsByClassName("faq-question");
const faqsArray = Array.from(faqs);
faqsArray.forEach((faq) => {
  faq.addEventListener("click", function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show-answer");
  });
});
