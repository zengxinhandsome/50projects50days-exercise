const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function () {
    if (!this.classList.contains('expanded-box')) {
      boxes.forEach(box => {
        box.classList.remove('expanded-box');
      });
      this.classList.add('expanded-box');
    }
  });
});

