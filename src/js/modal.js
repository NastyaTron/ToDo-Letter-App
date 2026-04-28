export const modal = document.querySelector('.modal');
const openButton = document.querySelector('header button');
const closeButton = document.querySelector('.closeModal');

openButton.addEventListener('click', function () {
  modal.classList.remove('hidden');
});
closeButton.addEventListener('click', function () {
  modal.classList.add('hidden');
});
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
