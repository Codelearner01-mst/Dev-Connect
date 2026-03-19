const searchBtn = document.querySelector('.course-search-btn');
const searchInput = document.querySelector('.course-search');

searchBtn.addEventListener('click', function(e) {
  e.preventDefault(); 
  searchInput.classList.toggle('active');
  if (searchInput.classList.contains('active')) {
    searchInput.focus();
  }
});
