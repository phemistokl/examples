import React, { useEffect } from "react";
import { useStore } from 'effector-react';
import { fetchGlobalFeed } from './modal.events';
import { $globalFeed } from './store';

fetchGlobalFeed();

export const Content = () => {

    const isLoading = useStore(fetchGlobalFeed.pending);

    const data = useStore($globalFeed);

    console.log('global', data);

    return (
        isLoading ? 
        <div>Загрузка</div> : 
        <div>
            {Array.isArray(data.articles) && data.articles.length > 0 && data.articles.map(({ title }) => 
                (<div>{title}</div>)
            )}
        </div>
    )
}