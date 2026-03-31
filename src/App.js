import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import en from "./lang/en";
import tr from "./lang/tr";
import "./css/App.css";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("tr");
  const t = lang === "en" ? en : tr;

  return (
    <Routes>
      <Route element={<Layout lang={lang} setLang={setLang} t={t} />}>
        <Route index element={<HomePage lang={lang} t={t} />} />
        <Route path="blog" element={<BlogIndexPage lang={lang} t={t} />} />
        <Route
          path="blog/:slug"
          element={<BlogPostPage lang={lang} t={t} />}
        />
        <Route path="projects" element={<ProjectsPage lang={lang} t={t} />} />
        <Route
          path="projects/:slug"
          element={<ProjectDetailPage lang={lang} t={t} />}
        />
        <Route path="resume" element={<ResumePage t={t} lang={lang} />} />
        <Route path="about" element={<AboutPage t={t} />} />
        <Route path="contact" element={<ContactPage t={t} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
export default App;
