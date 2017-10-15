/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2017
 * @license GPL-3.0
 */

const request = require('request-promise');

const KURISTINA_ADDRESS = 'https://kuristina.herokuapp.com';

class Kuristina {

    /**
     * @param {string} username
     * @return {Promise.<IMALAnimeList>}
     */
    static fetchAnimeList(username) {
        return request(`${KURISTINA_ADDRESS}/anime/${username}.json`)
            .then(JSON.parse)
            .then(kuristinaList => kuristinaList.myanimelist);
    }

    /**
     * @param {string} username
     * @return {Promise.<IMALMangaList>}
     */
    static fetchMangaList(username) {
        return request(`${KURISTINA_ADDRESS}/manga/${username}.json`)
            .then(JSON.parse)
            .then(kuristinaList => kuristinaList.myanimelist);
    }

}

module.exports = Kuristina;
