import { createEffect, createEvent } from 'effector';
// import { listArticles } from './api';
import { limit } from './helpers';

export const globalFeedMount = createEvent();

export const fetchGlobalFeed = createEffect().use((page) => {
    // listArticles(`/articles?${limit(10, page)}`);

    return fetch(`https://conduit.productionready.io/api/articles?${limit(10, page)}`).then(res => res.json())

});

export const fetchFeedByTag = createEffect().use((tag, page) => {

    return fetch(`https://conduit.productionready.io/api/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`).then(res => res.json())

});
