const searchInput = document.querySelector('#search-input');
const recipeCards = document.querySelectorAll('.recipe-card');

searchInput.addEventListener('input', filterList);

function filterList(event) {
  const searchValue = event?.target?.value?.toLowerCase();
  recipeCards.forEach((card) => {
    if (!searchValue || card.innerText.toLowerCase().includes(searchValue)) {
      card.style.display = ''
    } else {
      card.style.display = 'none'
    }
  });
}
