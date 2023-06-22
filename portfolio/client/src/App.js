import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from './PortfolioContainer/Home/Profile';
import Footer from './PortfolioContainer/Footer/footer.jsx'
import Layout from "./PortfolioContainer/Layout";
import Error from "./PortfolioContainer/Error";
import Nav from "./PortfolioContainer/header/Nav";
// import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import Project from "./PortfolioContainer/project/Project";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Project" element={<Project/>} />
          {/* <Route path="/AboutMe" element={<AboutMe/>} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
    </>

  );
}

export default App;
