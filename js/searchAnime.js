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
                        <div class="anime__info">
                            <div class="anime__search__pic set-bg" data-setbg="${item.image}"></div>
                            <a href="./anime-details.html?itemId=${item.id}">${item.title}</a>
                            <span>${item.rating}</span>
                        </div>
                    `);
                });
            } else {
                dropdownSearch.innerHTML = '';
                dropdownSearch.insertAdjacentHTML('beforeend', `
                    <li>Аниме отсутствует!</li>
                `);
            }
            document.querySelectorAll('.set-bg').forEach((elem) => {
                elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
            });
        };
    }
    
    fetch('https://anime-site-b408e-default-rtdb.firebaseio.com/anime.json')
        .then((response) => response.json())
        .then((anime) => {
            searchAnime(anime);
        })
}

search();
