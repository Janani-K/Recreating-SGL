import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isDataFetchPending, setIsDataFetchPending] = useState(true);
    const [dataFetchError, setDataFetchError] = useState(null);

    useEffect(() => {

        /**
         * AbortController to cleanup unmount component
         * prevents setting/updating state to the components that is unmounted from the dom 
         * setting state => feeds data from fetch request
         */
        // const abortController = new AbortController();

        // fetch(url, { signal: abortController.signal })
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data from resource");
                }
                console.log(res.json())
                return res.json();
            })
            .then(responseData => {
                setData(responseData);
                setIsDataFetchPending(false);
                setDataFetchError(null);
            })
            .catch(error => {
                /**
                 * Abort throws an error which is catched here
                 * still we are trying to update state
                 * so handle that specific abort initiated by us
                 */
                // if (error.name === 'AbortError') {
                //     console.log("Fetch aborted");
                // } else {
                setIsDataFetchPending(false);
                setDataFetchError(error);
                // }
            })

        //when the component that uses the useFetch/useEffect returns the clean-up function when unmounted
        // return () => abortController.abort(); //abort fetch that is associated with this abortController

    }, [url])

    return { data, isDataFetchPending, dataFetchError }
}

export default useFetch

// const { data : nameItAsPerRequirement , isDataFetchPending, dataFetchError } = useFetch('url')