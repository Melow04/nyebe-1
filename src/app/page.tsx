import Footer from "@/components/elements/footer";
import Header from "@/components/elements/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col relative w-screen h-screen ">
      {/* <section className="self-end w-full h-screen m-auto absolute z-[-1] object-cover flex mt-10">
        <Image
          src={"/hero/hero.jpg"}
          alt=""
          width={500}
          height={500}
          quality={100}
          className="object-cover w-[50%]"
        />
        <Image
          src={"/hero/white.jpg"}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className="object-cover w-[50%]"
        />
      </section>
      <Header /> */}
      <section className="container">
      
        <div className="mt-20 w-full max-w-8xl py-16 text-white ">
          
          <div className="grid items-center gap-20 sm:gap-8 lg:grid-cols-2 ">
            <div>
             
            
              <h1 className="mb-10 text-9xl font-bold">FitLife Gym</h1>
              <p className="mb-6 max-w-2lg text-6xl font-semibold text-wrap">
                Empowering you to live a healthier, happier life.
              </p>
             
              <div className="mt-4 flex justify-start  md:mt-10 lg:mt-12 gap-3 ">
                <Button className="bg-violet-400 h-20 rounded-full text-white font-semibold hover:text-violet-300 text-2xl duration-200 shadow-inner shadow-gray-500">
                  <Link href={"/pages/services"} className="p-2">
                    Services
                  </Link>
                </Button>
                <Button className="bg-violet-500 h-20 rounded-full text-white font-semibold shadow-inner  shadow-gray-500 hover:text-violet-300 text-2xl duration-200">
                  <Link href={"/pages/contacts"} className="p-2">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
