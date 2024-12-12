"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";

const CurrencyConverter = () => {
    const [rates, setRates] = useState({});
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('INR');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [symbol, setsymbol] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                'https://api.freecurrencyapi.com/v1/latest?apikey=GeWjqJ5h56ovE3Fbxu39dSoLYW6HYzpp9P8DPLGr'
            );
            setRates(response.data.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const symbolresponse = await axios.get(
                'https://api.freecurrencyapi.com/v1/currencies?apikey=GeWjqJ5h56ovE3Fbxu39dSoLYW6HYzpp9P8DPLGr&currencies=INR'
            );
            setsymbol(symbolresponse.data.data.INR.symbol);
            console.log(symbolresponse.data.data)
        };
        fetchData();
    }, []);

    const finalrate = rates[targetCurrency];

    const convertCurrency = () => {
        const rate = rates[targetCurrency] / rates[baseCurrency];
        console.log(rate)
        const converted = amount * rate;
        setConvertedAmount(converted);
    };

    return (
        <>
            <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] border rounded-3xl bg-[#292524] mx-36 mt-10 px-14 py-10">
                {/* select base currency */}
                <div className='flex justify-center items-center gap-6'>
                    <div className="border w-[28rem] border-gray-500 bg-white px-6 py-3 rounded-xl grid justify-center">
                        <h1 className='text-lg font-medium text-gray-500'>
                            You Send
                        </h1>
                        <div className='flex flex-row gap-3'>
                            <div className=''>
                                <input
                                    className='h-16 outline-none text-4xl pl-5 w-[18rem] '
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />

                            </div>

                            <div className='px-5 rounded flex justify-center items-center'>
                                <select
                                    value={baseCurrency}
                                    onChange={(e) => setBaseCurrency(e.target.value)}
                                    className='rounded h-16 w-20 font-medium flex justify-center items-center outline-none text-2xl'
                                >
                                    {Object.keys(rates).map((currency) => (
                                        <option key={currency} className='font-semibold'>{currency}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-full w-16 h-16 flex justify-center items-center absolute bg-white">
                        <FaArrowRightLong className='text-3xl' />
                    </div>

                    {/* select target currency */}
                    <div className="border w-[28rem] border-gray-500 bg-white px-6 py-3 rounded-xl ">
                        <h1 className='text-lg font-medium text-gray-500'>
                            Recepient Gets
                        </h1>

                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-[20rem] px-5 '>
                                {/* <h3>Converted Amount:</h3> */}
                                <p className='text-4xl '>{convertedAmount.toFixed(2)}</p>
                            </div>
                            <div className=''>
                                <select
                                    value={targetCurrency}
                                    onChange={(e) => setTargetCurrency(e.target.value)}
                                    className='rounded h-16 w-20 font-medium flex justify-center items-center outline-none text-2xl'
                                >
                                    {Object.keys(rates).map((currency) => (
                                        <option key={currency} >{currency}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex justify-end items-center ml-12'>
                    {/* <button className="bg-green-400 text-white px-4 py-3 rounded-2xl mt-6" onClick={convertCurrency}>Convert</button> */}
                    <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 mt-5" onClick={convertCurrency}>
                        Convert
                    </button>
                </div>
            </div>


            {/* final result */}
            <div className="flex justify-center gap-10 mt-10">

                <div className="border mt-5 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-96 rounded-xl">

                    <div className="text-3xl font-semibold text-center">Convert {baseCurrency} to {targetCurrency}</div>

                    <div className="flex flex-col mt-2">
                        <div className="flex items-center gap-5  justify-center">
                            <div className="text-teal-500 ">
                                <p className="text-xl font-semibold">1 {baseCurrency}</p>
                                <p className="text-xl font-semibold">5 {baseCurrency}</p>
                                <p className="text-xl font-semibold">10 {baseCurrency}</p>
                                <p className="text-xl font-semibold">25 {baseCurrency}</p>
                                <p className="text-xl font-semibold">50 {baseCurrency}</p>
                                <p className="text-xl font-semibold">100 {baseCurrency}</p>
                                <p className="text-xl font-semibold">500 {baseCurrency}</p>
                                <p className="text-xl font-semibold">1000 {baseCurrency}</p>
                                <p className="text-xl font-semibold">5000 {baseCurrency}</p>
                                <p className="text-xl font-semibold">10000 {baseCurrency}</p>
                            </div>
                            <div className="target">
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{5 *  finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{10 * finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{20 * finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{50 * finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{100 * finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{500 * finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{1000 * finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{5000 * finalrate.toFixed(3)}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{10000 * finalrate.toFixed(3)}</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="border mt-5 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-96 rounded-xl">
                    <div className="text-3xl font-semibold text-center">Convert {targetCurrency} to {baseCurrency} </div>
                    <div className="flex flex-col mt-2">
                        <div className="flex items-center gap-5  justify-center">
                            <div className="base text-teal-500">
                                <p className="text-xl font-semibold">1 {targetCurrency} </p>
                                <p className="text-xl font-semibold">5 {targetCurrency} </p>
                                <p className="text-xl font-semibold">10 {targetCurrency} </p>
                                <p className="text-xl font-semibold">25 {targetCurrency} </p>
                                <p className="text-xl font-semibold">50 {targetCurrency} </p>
                                <p className="text-xl font-semibold">100 {targetCurrency} </p>
                                <p className="text-xl font-semibold">500 {targetCurrency} </p>
                                <p className="text-xl font-semibold">1000 {targetCurrency} </p>
                                <p className="text-xl font-semibold">5000 {targetCurrency} </p>
                                <p className="text-xl font-semibold">10000 {targetCurrency} </p>
                            </div>
                            <div className="target">
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((1 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((5 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((10 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((25 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((50 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((100 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((500 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((1000 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((5000 / finalrate).toFixed(5))}</p>
                                <p className="text-xl font-medium flex items-center"> <FaArrowRightLong />&nbsp; &nbsp;{Number((10000 / finalrate).toFixed(5))}</p>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CurrencyConverter;
