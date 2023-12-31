import {useState} from 'react'

function useCurrencyInfo(currency) {

    useEffect(()=>{

        const [data,setData] = useState({});

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/
        currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=>setData(response[currency]))

    }, [currency])

    return data;
}

export default useCurrencyInfo