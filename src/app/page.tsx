import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Projets from "@/components/Projets";
import Title from "@/components/Title";
import Vitae from "@/components/Vitae";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-20 2xl:pl-80 2xl:pr-80 pt-10 pb-10 md:pl-10 md:pr-10">
        <Title />
        <div className="divider"></div>
        <About />
        <div className="divider"></div>
        <Projets />
        <div className="divider"></div>
        <Vitae />
        <div className="divider"></div>
        <Education />
      </main>
      <Footer />
    </>
  );
}
