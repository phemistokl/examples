import { createEffect } from "effector";
import { fetch } from "isomorphic-fetch";

const API_ROOT = 'https://conduit.productionready.io/api';

// export const api = (url) => fetch(`${API_ROOT}${url}`).then(res => res.json());

// export const createApiSender = (url) => {
    
//     let handler = () => api(url);
    
//     console.log('2', handler());

//     return createEffect(handler);
// }

export const createApiSender = createEffect({
    handler: (path) => {
      const url = `${API_ROOT}${path}`
      console.log('path', url);
      return fetch(url).then(res => res.json());
    },
  })