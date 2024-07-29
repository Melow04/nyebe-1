
import Footer from "@/components/elements/footer";
import Header from "@/components/elements/header";
import Image from "next/image";
import Link from "next/link";



const Services = () => {
    const services: {
        title: string; content: string; link: string
    }[] = [
            {
                title: "Personal Training",
                content: "Innovate your business with tailor-made software solutions.",
                link: "/services/custom-software-development",
            },
            {
             title: "Group Classes",
             content: "Innovate your business with tailor-made software solutions.",
            link: "/services/custom-software-development",
            },
            {
                title: "Nutrition Counseling",
                content: "Innovate your business with tailor-made software solutions.",
                link: "/services/custom-software-development",
            },
            {
                title: "Wellness Programs",
                content: "Innovate your business with tailor-made software solutions.",
                link: "/services/custom-software-development",
            }
        ];


return (
    <>
      <Header />
      <div className="w-full h-screen">
      <section className="container">
        <h2 className="py-5 text-5xl font-semibold">Services We Provide</h2>
        <div className="cardholder grid grid-cols-2 grid-rows-2 gap-4 py-6">
          {
            services.map((content, index) => (
              <div key={index} className="border flex p-5 gap-4 rounded-md">
                <div className="w-full h-100 relative border-2 rounded-md">
                  <Image src={`/feature/services/${content.title}.jpg`} fill alt={content.title} className="absolute object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold ">{content.title}</h4>
                  <p className="line-clamp-3">{content.content}</p>
                  <Link href={content.link} className="self-end">Check now</Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
        <Footer />
    </>
);
}

export default Services;



