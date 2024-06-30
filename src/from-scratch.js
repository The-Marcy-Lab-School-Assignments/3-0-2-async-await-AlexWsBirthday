export const fetchHandler = async (url, options = {}) => {

    try {
        //fetching data using the arguments from fetchHandler
        const response = await fetch(url, options);

        //checking if the fetch promise is settled properly
        if (!response.ok) {
            throw new Error(`Fetch failed with status - ${response.status}, ${response.message}`)
        }

        //response type check function 
        const isJson = (response.headers.get('content-type') || '').includes('application/json')

        //getting data by checking if the response is json first, then translating it into JS
        let data = isJson ? await response.json() : await response.text()

        //logging the data in the console
        console.log(data)

        //returning the data 
        return [data, null];

    } catch (error) {
        console.warn(error);

        return [null, error]
    }


};
