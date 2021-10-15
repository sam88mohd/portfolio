import Head from "next/head";
import Sidebar from "./components/Sidebar";
import { useDetectOutsideClick } from "../functions/useDetectOutsideClick";
import { useRef } from "react";
import Banner from "./sections/Banner";
import About from "./sections/About";
import ToggleBtn from "./components/ToggleBtn";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Qualifications from "./sections/qualification/Qualifications";
import Projects from "./sections/Projects";

export default function Home() {
  const hideRef = useRef(null);
  const [toggle, setToggle] = useDetectOutsideClick(hideRef, false);

  return (
    <div>
      <Head>
        <title>Personal Portfolio | Samsudin Mohamad</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Samsudin Mohamad Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ToggleBtn toggle={toggle} setToggle={setToggle} hideRef={hideRef} />
        <Banner />
        <About />
        <Skills />
        <Qualifications />
        <Projects />
        <Contact />
        <Sidebar toggle={toggle} />
      </main>
      <Footer />
    </div>
  );
}
