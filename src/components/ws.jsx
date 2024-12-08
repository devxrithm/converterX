"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CryptoPrice = () => {
    const [btcprice, setbtcPrice] = useState(null);
    const [ethprice, setethPrice] = useState(null);
    const [xrpprice, setxrpPrice] = useState(null);
    const [batprice, setbatPrice] = useState(null);

    // For BTC
    useEffect(() => {
        const ws = new WebSocket(
            "wss://fstream.binance.com/ws/btcusdt@aggTrade",
        );

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Check if the received data is for the 'aggTrade' event
            if (data.e === "aggTrade") {
                // Extract the price from the data and update the state
                setbtcPrice(data.p);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket error: ", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
        };

        // Cleanup function to close WebSocket connection
        return () => {
            ws.close();
        };
    }, []);

    // For ETH
    useEffect(() => {
        const ws = new WebSocket(
            "wss://fstream.binance.com/ws/ethusdt@aggTrade",
        );

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Check if the received data is for the 'aggTrade' event
            if (data.e === "aggTrade") {
                // Extract the price from the data and update the state
                setethPrice(data.p);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket error: ", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
        };

        // Cleanup function to close WebSocket connection
        return () => {
            ws.close();
        };
    }, []);

    // For XRP
    useEffect(() => {
        const ws = new WebSocket(
            "wss://fstream.binance.com/ws/xrpusdt@aggTrade",
        );

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Check if the received data is for the 'aggTrade' event
            if (data.e === "aggTrade") {
                // Extract the price from the data and update the state
                setxrpPrice(data.p);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket error: ", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
        };

        // Cleanup function to close WebSocket connection
        return () => {
            ws.close();
        };
    }, []);

    // For BAT
    useEffect(() => {
        const ws = new WebSocket(
            "wss://fstream.binance.com/ws/batusdt@aggTrade",
        );

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Check if the received data is for the 'aggTrade' event
            if (data.e === "aggTrade") {
                // Extract the price from the data and update the state
                setbatPrice(data.p);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket error: ", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
        };

        // Cleanup function to close WebSocket connection
        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className="flex justify-center items-center gap-5">
            {/* Bitcoin */}

            <div className="border p-4 w-72 rounded-md bg-[#fafafa] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                BITCOIN LIVE PRICE
                <div className="flex items-center gap-3">
                    <div className="logo border-r border-black pr-2">
                        <Image
                            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040"
                            width={40}
                            height={40}
                            alt="btc"
                        />
                    </div>

                    <div className="text">
                        <h2 className="text-3xl">{btcprice ? `$${btcprice}` : "Loading..."}</h2>
                    </div>
                </div>
            </div>

            {/* ETHERUEM  */}
            <div className="border p-4 w-72 rounded-md bg-[#fafafa] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                ETHEREUM LIVE PRICE
                <div className="flex items-center gap-3">
                    <div className="logo border-r border-black pr-2">
                        <Image
                            src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040"
                            width={40}
                            height={40}
                            alt="btc"
                        />
                    </div>

                    <div className="text">
                        <h2 className="text-3xl">{ethprice ? `$${ethprice}` : "Loading..."}</h2>
                    </div>
                </div>
            </div>

            {/* XRP  */}
            <div className="border p-4 w-72 rounded-md bg-[#fafafa] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                RIPPLE LIVE PRICE
                <div className="flex items-center gap-3">
                    <div className="logo border-r border-black pr-2">
                        <Image
                            src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=040"
                            width={40}
                            height={40}
                            alt="btc"
                        />
                    </div>

                    <div className="text">
                        <h2 className="text-3xl">{xrpprice ? `$${xrpprice}` : "Loading..."}</h2>
                    </div>
                </div>
            </div>

             {/* BAT  */}
            <div className="border p-4 w-72 rounded-md bg-[#fafafa] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                BAT LIVE PRICE
                <div className="flex items-center gap-3">
                    <div className="logo border-r border-black pr-2">
                        <Image
                            src="https://cryptologos.cc/logos/basic-attention-token-bat-logo.png?v=040"
                            width={40}
                            height={40}
                            alt="btc"
                        />
                    </div>

                    <div className="text">
                        <h2 className="text-3xl">{batprice ? `$${batprice}` : "Loading..."}</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CryptoPrice;
