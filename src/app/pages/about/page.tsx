import Footer from "@/components/elements/footer";
import Header from "@/components/elements/header";
import Image from "next/image";

const about = () => {
    return (
    <div className="w-full ">
       <Header/>
        <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 grid-cols-2">
        {/* Title */}
      
<div className="container"> 
     <h2 className="py-5 text-5xl font-semibold">
          Meet FitLife
        </h2>
        <p className="max-w-lg text-sm text-base mb-10">
        FitLife Gym has been helping individuals achieve their fitness goals since 2010.
        </p>
        
        <div className="flex grid-cols-2 p-5 align-center justify-center items-center mb-10 rounded-2xl border  bg-violet-800">
       
          <Image
          src={"/aboutUs/trainer.png"}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className="inline-block p w-1/3 rounded-2xl object-cover"
        /> 
        <div className="flex flex-col h-full w-2/3 p-20 text-white">
          <h2 className="text-3xl font-bold ">Alex Johnson - Head Trainer</h2>
          <p className="text-sm">
          Alex is a certified personal trainer with a passion for helping clients succeed.
          </p>
        </div>
      </div>

        <div className="flex grid-cols-2 p-5 align-center justify-center items-center mb-10 rounded-2xl border bg-violet-800 text-white">
        
          <div className="flex flex-col h-full w-2/3 p-20">
            <h2 className="text-3xl font-bold ">Lisa Wong - Nutritionist</h2>
            <p className="text-sm  ">
            Lisa provides expert nutrition advice to support your fitness journey.
            </p>
          </div>
          <Image
          src={"/aboutUs/nutritionist.jpg"}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className="inline-block  w-1/3 rounded-2xl object-cover"
        /> 
        </div>
        <div className=" grid gap-10 grid-cols-2 ">
        <Image
          src={"/aboutUs/plates.jpg"}
          alt=""
          width={1000}
          height={1000}
          quality={100}
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border p-20 bg-violet-800 text-white">
            <h2 className="font-bold text-5xl">Mission and Values</h2>
            <p className="text-sm ">
            Our mission is to inspire and support our members in living healthier lives through fitness and wellness.
            </p>
          </div>
        </div>
        
        </div>



      </div>
    </section>
       <Footer/>
       </div>
       
    );
}

export default about;