import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import en from "./lang/en";
import tr from "./lang/tr";
import portfolioImage from "./assets/portfolio.png";
import calculatorImage from "./assets/calculator.png";
import todoImage from "./assets/todolist.png";
import weatherImage from "./assets/weather.png";
import "./css/App.css";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  const t = lang === "en" ? en : tr;
  const projectList = t.projectsList.map((item, index) => ({
    ...item,
    image: [portfolioImage, calculatorImage, todoImage, weatherImage][index],
  }));

  return (
    <div>
      <Navbar setLang={setLang} title={t} lang={lang} />
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>{t.welcome}</h1>
      <About t={t} />
      <Projects projects={projectList} title={t} />
      <Blog t={t} />
      <Contacts t={t} />
      <Footer props={t} />
    </div>
  );
}
export default App;
