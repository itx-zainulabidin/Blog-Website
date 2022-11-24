import { useState, useEffect } from "react";


const useFetch = (URL) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();
        fetch(URL, { signal: abortCont.signal })
            .then(response => {
                if (!response.ok) {
                    throw Error("Internal server error");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    // console.log('fetch aborted');
                    
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        return () => abortCont.abort();
    }, [URL]);

    return { data, isPending, error };
};

export default useFetch;