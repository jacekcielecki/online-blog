import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //custom hooks in react need to have a name that starts with use-
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data from db');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    console.log(err.message);
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000)//delay fetch data for 1 sec in order to demonstrate loading screen
    }, [url]);

    return { data, isPending, error } //better to return obj instead of array beacause later order of properties does not matter when destruct
}

export default useFetch;