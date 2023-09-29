import { Header } from "./components/header/Header";
import { SectionInfo } from "./components/sectioninfo/SectionInfo";
import { FormBox } from "./components/formBox/FormBox";
import { SectionNews } from "./components/sectionnews/SectionNews";
import { BoxSlide } from "./components/boxSlide/BoxSlide";
import { Footer } from "./components/footer/Footer";
import { SolvedCases } from "./components/solvedCases/SolvedCases";
import "./styles/global.css";
import "./styles/FontsTildaSans.css"
import { SectionAboutUs } from "./components/sectionAboutUs/SectionAboutUs";
import { SectionClientTask } from "./components/sectionClientTask/SectionClientTask";
import { SectionContacts } from "./components/sectionContacts/SectionContacts";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import React from "react";


function App() {
  const [form, setShowForm] = useState(false);
  const [stateAnim, setStateAnim] = useState(false);



  const { ref, inView, entry } = useInView({
    threshold: 0.5,

  });

  React.useEffect(() => {
    if (inView) {
      setStateAnim(true);
    }
  }, [inView]);

  return (

  <>
      <Header


        showForm={setShowForm}
      ></Header>
      <SectionInfo showForm={setShowForm}></SectionInfo>
      <BoxSlide></BoxSlide>
      <SectionAboutUs i={ref} anim={stateAnim}></SectionAboutUs>
      <SectionClientTask></SectionClientTask>
      <SolvedCases></SolvedCases>
      <SectionNews></SectionNews>
      <SectionContacts ></SectionContacts>
      <Footer></Footer>
      {form ? <FormBox from={form} showForm={setShowForm}></FormBox> : ""}
  </>

  );
}

export default App;
