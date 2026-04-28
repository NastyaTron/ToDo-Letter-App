const filters = document.querySelectorAll('.sidebar li');

filters.forEach(item => {
  item.addEventListener('click', function () {
    filters.forEach(i => {
      i.classList.remove('active');
    });
    item.classList.add('active');
  });
});
