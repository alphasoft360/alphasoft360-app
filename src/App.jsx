import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import TeamMemberDetail from "./Pages/TeamMemberDetail";
import ServiceDetail from "./Pages/ServiceDetail";
import ProjectDetail from "./Pages/ProjectDetail";
import NewProjectDetail from "./Projects/pages/ProjectDetail";
import ProjectsList from "./Projects/pages/ProjectsList";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Messages from "./Pages/Messages";
import CertificateDisplay from "./Pages/CertificateDisplay";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="app-container">
        <ScrollToTop />
        <MainNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/:slug" element={<NewProjectDetail />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<TeamMemberDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/certificate/:id" element={<CertificateDisplay />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppIcon />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
