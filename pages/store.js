import {createStore, combine, forward} from "effector";
import { fetchGlobalFeed, fetchFeedByTag } from './modal.events';

const initialState = { articles: [], articlesCount: null };

export const formInput = createStore("");
export const $globalFeed = createStore(initialState);
export const $postsByTag = createStore({});

$globalFeed.on(fetchGlobalFeed.done, (state, { result }) => ({
    ...state,
    ...result,
  }));
  
// $globalFeed.watch((x) => console.log('global', x));

$postsByTag.on(fetchFeedByTag.done, (state, { params, result }) => ({
    ...state,
    [params]: {
      ...result,
    },
  }));

// $postsByTag.watch((x) => console.log('feed by tag', x));

//   forward({
//     from: formInput,
//     to: fetchFeedByTag,
//   });

  export const $feedByTag = combine(
    $postsByTag,
    formInput,
    (postsMap, tag) => {
      const posts = postsMap[tag];
  
      return posts ? posts.articles : [];
    },
  );