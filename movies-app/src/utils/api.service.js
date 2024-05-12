export const sendMoviesData = async (url, method, data) => {
    const requestOptions = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
}