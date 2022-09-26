const mainData = () => {
    fetch('https://anime-site-b408e-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json()
        })
        .then((anime) => {
            console.log(anime)
        })
};

mainData();

//https://anime-site-b408e-default-rtdb.firebaseio.com/anime.json
//../db.json