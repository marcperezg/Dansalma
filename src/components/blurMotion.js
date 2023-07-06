const images = document.querySelectorAll('.div img');

images.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    images.forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.classList.add('img-hover');
      }
    });
  });

  image.addEventListener('mouseleave', () => {
    images.forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.classList.remove('img-hover');
      }
    });
  });
});
