const categoriesList = document.querySelector('#categories'),
      categoriesItems = categoriesList.querySelectorAll('.item'),
      categoriesTitles = categoriesList.querySelectorAll('h2');

console.log(`Numbers of categories: ${categoriesItems.length}`);

for (let i = 0; i < categoriesTitles.length; i++) {
    console.log(`Category: ${categoriesTitles[i].textContent}`);
    console.log(`Elements: ${categoriesItems[i].querySelectorAll('li').length}`);
}