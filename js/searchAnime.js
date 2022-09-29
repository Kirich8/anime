const search = () => {
    const searchAnime = (array) => {
        const searchForm = document.querySelector('#search-input');
        let animeTitles = new Array();
    
        array.forEach((item) => animeTitles.push(item));
    
        searchForm.oninput = function () {
            let value = this.value.trim();
            let animeTrue = new Array;
            const dropdownSearch = document.querySelector('.dropdown__search');
    
            animeTitles.forEach((item) => {
                if ((item.title).toLowerCase().startsWith(value.toLowerCase()) == true) {
                    animeTrue.push(item);
                    dropdownSearch.innerHTML = '';
                }
            })
            if (animeTrue.length > 0) {
                animeTrue.forEach(item => {
                    dropdownSearch.insertAdjacentHTML('beforeend', `
                        <li><a href="./anime-details.html?itemId=${item.id}">${item.title}</a></li>
                    `);
                });
            } else {
                dropdownSearch.innerHTML = '';
                dropdownSearch.insertAdjacentHTML('beforeend', `
                    <li>Аниме отсутстыует!</li>
                `);
            }
        };
    }
    
    fetch('https://anime-site-b408e-default-rtdb.firebaseio.com/anime.json')
        .then((response) => response.json())
        .then((anime) => {
            searchAnime(anime);
        })
}

search();
