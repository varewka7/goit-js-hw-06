const listCategories = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${listCategories.length}`);


for (const el of listCategories) {
    const titleEl = el.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);

    const totalItemEl = el.querySelectorAll('li');
    console.log(`Elements: ${totalItemEl.length}`);
};
