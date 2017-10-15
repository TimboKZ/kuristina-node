# `kuristina-node`

Node.js wrapper for [Kuristina API](https://github.com/TimboKZ/kuristina).

# Installation

```shell
npm install --save kuristina
```

# Example usage

```javascript
const kuristina = require('kuristina');

kuristina.fetchAnimeList('Timbo_KZ')
    .then(animeList => {
        let count = animeList.anime.length;
        console.log(`${animeList.myinfo.user_name}'s anime (${count} title(s)):`);
        for (let i = 0; i < count; i++) {
            let anime = animeList.anime[i];
            console.log(`${anime.series_title} [Rated ${anime.my_score}/10]`);
        }
    })
    .catch(error => console.error(error));

kuristina.fetchMangaList('Timbo_KZ')
    .then(mangaList => {
        let count = mangaList.manga.length;
        console.log(`${mangaList.myinfo.user_name}'s manga (${count} title(s)):`);
        for (let i = 0; i < count; i++) {
            let manga = mangaList.manga[i];
            console.log(`${manga.series_title} [Rated ${manga.my_score}/10]`);
        }
    })
    .catch(error => console.error(error));
```

See [Kuristina API](https://github.com/TimboKZ/kuristina) for details and `kuristina.d.ts` for typings.