let currentStep = 1;
const maxStep = 4;

const getLastActiveItem = () => {
  const activeItems = document.querySelectorAll('.progress-item.active');
  return activeItems[activeItems.length - 1];
};

const btnPrev = document.querySelector('.btn-prev');

btnPrev.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    const lastActiveItem = getLastActiveItem();
    lastActiveItem.classList.remove('active');
    lastActiveItem.previousElementSibling.classList.remove('active');
  }
});

const btnNext = document.querySelector('.btn-next');

btnNext.addEventListener('click', () => {
  if (currentStep < maxStep) {
    currentStep++;
    const lastActiveItem = getLastActiveItem();
    const nextItem = lastActiveItem.nextElementSibling;
    nextItem.classList.add('active');
    nextItem.nextElementSibling.classList.add('active');
  }
});

