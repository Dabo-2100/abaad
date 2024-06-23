import "./App.css";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Projects from "./pages/ourProject/Projects";
import Home from "./pages/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Sale from "./pages/sale/Sale";
import Footer from "./components/footer/Footer";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacyPolicy/Privacy";
import ContactUs from "./pages/contactus/ContactUs";
import SingleProject from "./pages/singleProject/SingleProject";
import SingleUnit from "./pages/singleUnit/SingleUnit";
import ProjectTable from "./pages/dashboardPages/projectsTable/ProjectsTable.jsx";
import AddProject from "./pages/dashboardPages/addProject/AddProject.jsx";
import whatsapp from "./assats/whatsapp.png";
import { motion } from "framer-motion";
import ViewProject from "./pages/dashboardPages/viewProject/ViewProject.jsx";
import LoginPage from "./pages/dashboardPages/login/LoginPage.jsx";
import { ProjectsProvider } from "./pages/dashboardPages/projectsTable/ProjectsContext.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sale" element={<Sale />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="project/:projectId" element={<SingleProject />} />
          <Route path="unit/:unitId" element={<SingleUnit />} />
        </Route>
      </Routes>
      <Footer />
      <a href="https://wa.me/+966583888881" target="_blank">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            opacity: [0, 0, 1],
          }}
          //  transition={{ duration: 0.5 }}
          className="whatsapp-btn"
          style={{ backgroundImage: `url(${whatsapp})` }}
        ></motion.div>
      </a>
    </div>
  );
}

export default App;
