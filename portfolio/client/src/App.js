import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from './PortfolioContainer/Home/Profile';
import Footer from './PortfolioContainer/Footer/footer.jsx'
import Layout from "./PortfolioContainer/Layout";
import Error from "./PortfolioContainer/Error";
import './App.css';

function App() {
  return (
    <>
    
    {/* <div >
      <Profile/>
    </div>
      <Footer/> */}
      <BrowserRouter>
      <Layout>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
    </>

  );
}

export default App;
