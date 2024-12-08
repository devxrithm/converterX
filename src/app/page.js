import Image from "next/image";
import Convertor from "../components/convertor"
import Websocket from "../components/ws"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <h1 className='text-center text-5xl mt-12 font-extrabold '>REAL TIME <span className="text-teal-500">CURRENCY</span> CONVERTOR</h1>
      <div className="mt-10">
        <Websocket />
      </div>
      <Convertor />
      <Footer />
    </>
  );
}
