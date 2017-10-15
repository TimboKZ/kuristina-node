/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2017
 * @license GPL-3.0
 */

const {describe, it} = require('mocha');
const assert = require('chai').assert;

const kuristina = require('.');

const MAL_USERNAME = 'Timbo_KZ';

describe('fetchAnimeList', () => {
    it('should return an anime list on valid username', done => {
        kuristina.fetchAnimeList(MAL_USERNAME)
            .then(animeList => {
                assert.isObject(animeList);
                assert.isObject(animeList.myinfo);
                assert.equal(animeList.myinfo.user_name, MAL_USERNAME);
                assert.isArray(animeList.anime);
            })
            .then(() => done())
            .catch(error => done(error));
    });
    it('should return an error on invalid username', done => {
        kuristina.fetchAnimeList('')
            .then(() => done(new Error('No error occurred!')))
            .catch(error => done());
    });
});


describe('fetchMangaList', () => {
    it('should return an anime list on valid username', done => {
        kuristina.fetchMangaList(MAL_USERNAME)
            .then(mangaList => {
                assert.isObject(mangaList);
                assert.isObject(mangaList.myinfo);
                assert.equal(mangaList.myinfo.user_name, MAL_USERNAME);
                assert.isArray(mangaList.manga);
            })
            .then(() => done())
            .catch(error => done(error));
    });
    it('should return an error on invalid username', done => {
        kuristina.fetchMangaList('')
            .then(() => done(new Error('No error occurred!')))
            .catch(error => done());
    });
});

