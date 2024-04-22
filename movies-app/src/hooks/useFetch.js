import { useEffect, useState } from "react"

export const useFetch = (url, dependencies = []) => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState([]);
    const [controller, setController] = useState(new AbortController());

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const { signal } = controller;

            try{
                const response = await fetch(url, { signal });
                if (!response.ok) throw new Error('Failed to fetch.');
                const responseData = await response.json();
                setResponseData(responseData);
                setIsLoading(false);   
            } catch(error){
                console.log(error);
                setIsLoading(false);   
            }
        };

        fetchData();
        console.log('Dependences:', dependencies);
    }, [...dependencies, url])

    return [isLoading, responseData];
}