const MIN_STEP = 1;
const MAX_STEP = 4;
let currentStep = MIN_STEP;

const btnPrev = document.querySelector(".btn-prev");

const btnNext = document.querySelector(".btn-next");

const progressItems = document.querySelectorAll(".progress-item");

const progressLine = document.querySelector(".progress-line");

btnPrev.addEventListener("click", () => {
  if (currentStep > MIN_STEP) {
    currentStep--;
    progressItems[currentStep].classList.remove("active");
    progressLine.style.width =
      (1 / (MAX_STEP - MIN_STEP)) * (currentStep - MIN_STEP) * 100 + "%";
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
    progressItems[currentStep - 1].classList.add("active");
    progressLine.style.width =
      (1 / (MAX_STEP - MIN_STEP)) * (currentStep - MIN_STEP) * 100 + "%";
    if (currentStep === MAX_STEP) {
      btnNext.disabled = true;
    } else {
      btnPrev.disabled = false;
    }
  }
});
