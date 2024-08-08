
import ServiceCard from "@/components/elements/card/service";
import Footer from "@/components/elements/footer";
import Header from "@/components/elements/header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";



const Services = () => {
    const services: {
        title: string; content: string; img: string; link: string
    }[] = [
            {
                title: "Personal Training",
                content: "Achieve your fitness goals with our customized personal training programs.",
                img: "/features/services/personaltraining.png",
                link: "/services/custom-software-development",
            },
            {
             title: "Group Classes",
             content: "Join our dynamic group classes for a fun and effective workout experience.",
             img: "/features/services/groupclasses.jpg",
            link: "/services/custom-software-development",
            },
            {
                title: "Nutrition Counseling",
                content: "Our experts provide personalized nutrition plans to complement your fitness routine.",
                img: "/features/services/counselling.jpg",
                link: "/services/custom-software-development",
            },
            {
                title: "Wellness Programs",
                content: "Enhance your overall well-being with our holistic wellness programs.",
                img: "/features/services/wellness.png",
                link: "/services/custom-software-development",
            }
        ];


return (
    <>
      <div className="w-full bg-violet-100">
      <Header />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 grid-cols-2 ">
      <section>
      <section className="container">
        <h2 className={cn("py-5 text-5xl font-semibold")}>Services We Provide</h2>
        <div className={cn("cardholder grid grid-cols-2 grid-rows-2 gap-4 py-6")}>
          {
            services.map((content, index) => (
              <div key={index}>
                <ServiceCard
                  content={content}
                />
              </div>
            ))
          }
        </div>
      </section>
      </section></div>
       </div> <Footer />
  
    </>
);
}

export default Services;



