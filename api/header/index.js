import { createApiSender } from "../../lib/api";

let tag = 'test';

let page = 10;

export const limit = (count, p = 0) => `limit=${count}&offset=${p * count}`;

export const fetchFeedByTag = createApiSender(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`);