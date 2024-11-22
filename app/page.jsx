import Physics from "./components/Physics";
import Section from "./components/Section";
import Image from "next/image";


export default function Home() {
  return (
    <div className=" font-bungee lg:w-2/6 justify-center m-auto ">

      <div className=" shadow-sm shadow-slate-400/40 bg-slate-700 border-slate-600 border-4 m-5 rounded-xl pb-5">
        <div className="  m-auto flex justify-center p-10">
          <div className=" bg-slate-400 shadow-2xl shadow-slate-600 border-slate-400 border-4 p-2 rounded-xl justify-center justify-items-center place-items-center flex">
            <h2 className=" font-bold text-7xl text-slate-700">MNU</h2>
            <Image src="logominia.svg" width={80} height={80} alt="logo"></Image>

          </div>
        </div>

        <div className="  flex font-arabicUI text-slate-400 border-4 p-4 m-auto justify-center w-11/12 rounded-xl shadow-xl bg-slate-800/60 shadow-slate-800/70 border-slate-400">
          <div className="place-items-center">
            <h2 className=" w-3/4 text-center border-2 border-slate-400 p-2 rounded-lg m-auto flex justify-center text-2xl bgsl "> اكتب رقم السكشن  الاساسي بتاعك</h2>
            <Section></Section>
          </div>

        </div>


        <div className=" mt-10 flex font-arabicUI bg-slate-800/60 text-slate-400 border-4 p-4 m-auto justify-center w-11/12 rounded-xl shadow-xl shadow-slate-800/70 border-slate-400">
          <div className="place-items-center">
            <h2 className=" w-3/4 text-center border-2 border-slate-400 p-2 rounded-lg m-auto flex justify-center text-2xl "> اكتب رقم سكشن الفيزياء بتاعك</h2>


            <Physics />
          </div>
        </div>



      </div>
    </div>

  );
}