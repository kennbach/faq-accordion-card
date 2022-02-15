// get all the FAQ elements
const faqs = document.getElementsByClassName("accordion");

// create an array of faq elements
const faqsArray = Array.from(faqs);

// loop through the faq elements
faqsArray.forEach((faq) => {
  // on click event
  faq.addEventListener("click", function () {
    // toggle the active class
    this.classList.toggle("active");
    // toggle the show-answer class
    this.nextElementSibling.classList.toggle("show-answer");
  });
});
