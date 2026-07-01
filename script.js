
window.formspree =
    window.formspree ||
    function () {
        (formspree.q = formspree.q || []).push(arguments);
    };

formspree("initForm", {
    formElement: "#quote-form",
    formId: "maqgdkpb"
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-compare]").forEach((card) => {
    const slider = card.querySelector(".compare-slider");

    const updateComparison = () => {
      card.style.setProperty(
        "--compare-position",
        `${slider.value}%`
      );
    };

    slider.addEventListener("input", updateComparison);
    updateComparison();
  });
});
// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.removeAttribute("open");
      }
    });
  });
});