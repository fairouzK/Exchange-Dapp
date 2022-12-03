import { useState, useEffect } from "react";
// import create from 'zustand';
import axios from 'axios';

// const useCoinFetch = create((set) => ({

//     fetchCoins: async () => {
//         const result = await axios.get('https://api.coingecko.com/api/v3/search/trending');
//         console.log(result);
//     }

    
// }));

const useCoinFetch = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [ btcPrice, setbtcPrice] = useState('');
    const fetchCoins = async() => {
        
        try {
            const [response, btcResponse ]= await Promise.all([axios.get("https://api.coingecko.com/api/v3/search/trending"), 
                axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
        ]);
            // console.log("response ", response);

            // const { data } = await response.json();
            // setCoins(data);
            setCoinsData(response.data.coins);
            setbtcPrice(btcResponse.data.bitcoin.usd);
            // console.log(btcPrice);
           

        } catch (error) {
            console.log("Error: Cannot fetch data");
        }

    };

    useEffect(() => {
        fetchCoins();
      }, []);

    return [coinsData, btcPrice];
};

export default useCoinFetch;