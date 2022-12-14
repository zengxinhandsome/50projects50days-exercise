const MIN_STEP = 1;
const MAX_STEP = 4;
let currentStep = MIN_STEP;

const btnPrev = document.querySelector(".btn-prev");

const btnNext = document.querySelector(".btn-next");

const getLastActiveItem = () => {
  const activeItems = document.querySelectorAll(".progress-item.active");
  return activeItems[activeItems.length - 1];
};

btnPrev.addEventListener("click", () => {
  if (currentStep > MIN_STEP) {
    currentStep--;
    const lastActiveItem = getLastActiveItem();
    lastActiveItem.classList.remove("active");
    lastActiveItem.previousElementSibling.firstElementChild.classList.remove(
      "w-full"
    );
    if (currentStep === MIN_STEP) {
      btnPrev.disabled = true;
    } else {
      btnNext.disabled = false;
    }
  }
});

btnNext.addEventListener("click", () => {
  if (currentStep < MAX_STEP) {
    currentStep++;
    const lastActiveItem = getLastActiveItem();
    const nextItem = lastActiveItem.nextElementSibling;
    nextItem.firstElementChild.classList.add("w-full");
    nextItem.nextElementSibling.classList.add("active");

    if (currentStep === MAX_STEP) {
      btnNext.disabled = true;
    } else {
      btnPrev.disabled = false;
    }
  }
});
