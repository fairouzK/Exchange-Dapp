import { SiEthereum } from "react-icons/si";
import { BiGasPump } from "react-icons/bi";
import  useCoinFetch  from "../hooks/useCoinFetch";


const CoinCard = ({name, symbol, large, price_btc, icon}) => {
    const [coinData, btcPrice]  = useCoinFetch();
    return (
        <div className=" m-4 flex flex-1
            2xl:min-w-[400px]
            2xl:max-w-[300px]
            sm:min-w-[200px]
            sm:max-w-[250px]
            min-w-full h-23
            flex-col p-1 rounded-md hover:shadow-2xl white-glassmorphism">
            <div className="flex flex-col items-center w-full mt-3">
                <img 
                    src={large}
                    alt='icon'
                    className="w-12 h-12 2x:h-56 rounded-md shadow-lg object-cover"/>
                <div className=" display-flex justify-start w-full mb-6 p-2">
                    {/* <p className="text-white text-base"> {name} Coin</p> */}
                    <p className="text-white text-base">Symbol: {symbol}</p>
                    <p className="text-white text-base">Price in USD: {(price_btc * btcPrice).toFixed(4)}</p>
                    
                </div>
               
            </div>
        </div>
    )
}

const Market = () => {
    const [coinData,btcPrice] = useCoinFetch();
    // console.log(coinData);
    return (

        // <div className="flex flex-wrap justify-center items-center mt-10">
        //     {coinData.map((transaction, i) => (
        //         <CoinCard key={i} {...transaction}/>
        //     ))}
        // </div>
        // console.log(coinData);
        // <h1>hi: {coinData}</h1>
        
        <div className="gradient-bg-services">
            <h1 className="test-white text-2xl sm:text-3xl ml-20 px-10 text-gradient"> 
                Trending tokens  </h1>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
                <div className="flex mf:flex-row flex-col items-center justify-between  px-4">
                    <div className="flex-1 flex flex-col justify-start items-center">
                        <div className="flex flex-wrap justify-center items-center mt-10 mr-20 ml-20">
                            {coinData.map((coin, i) => (
                                // console.log(coin.item),
                                <CoinCard key={i} {...coin.item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Market;