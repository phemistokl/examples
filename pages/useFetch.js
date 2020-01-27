import { useEffect } from "react";

export const useFetch = (query) => {
    useEffect(() => {
        console.log('go fetch', query);
    }, [query])
}