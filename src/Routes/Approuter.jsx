import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Privacy from "../Pages/Privacy";
import Career from "../Pages/Career";
import About from "../Pages/About";
import Contactus from "../Pages/Contactus";
import Home4 from "../Pages/Home4";
import Refundpolicy from "../Pages/Refundpolicy";
import Faq from "../Pages/Faq";
import Login from "../Pages/Login";
import Faqholidaysite from "../Pages/Faqholidaysite";
import Terms from "../Pages/Terms";
import SearchPage from "../Pages/SearchPage";
import BussinessDevelopment from "../Pages/BussinessDevelopment";
import MainHomePage from "../Pages/MainHomePage";
import Corporates from "../Pages/Corporates";
import Holidays from "../Pages/Holidays";
import Calender from "../Pages/Calender";
import CpSignup from "../Pages/CpSignup";
import CorporateLogin from "../Pages/Cplogin";
import Detailpage from "../Pages/Detailpage";
import Booking from "../Pages/Booking";
import Blog from "../Pages/Blog";
import Franchise from "../Pages/Franchise";
import History from "../Pages/History";
import BlogPost from "../Pages/Blogdetail";
import FranchiseLogin from "../Pages/FranchiseLogin";
import FranchiseSignup from "../Pages/FranchiseSignup";
import PropertyLanding from "../Pages/propertyLanding";

const Approuter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainHomePage />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="franchise/signup-franchise/createProperty"
            element={<PropertyLanding />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/franchise/signup-franchise"
            element={<FranchiseSignup />}
          />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/home4" element={<Home4 />} />
          <Route path="/return-and-refund-policy" element={<Refundpolicy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/faqholidaysite" element={<Faqholidaysite />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route
            path="/bussinessdevelopment"
            element={<BussinessDevelopment />}
          />
          <Route path="/corporates" element={<Corporates />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/cp-signup" element={<CpSignup />} />
          <Route path="/cp-login" element={<CorporateLogin />} />
          <Route path="/details/:hotelId" element={<Detailpage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/history" element={<History />} />
          <Route path="/post" element={<BlogPost />} />
          <Route path="/befranchise" element={<FranchiseLogin />} />
          {/* <Route path="/signup-franchise" element={<FranchiseSignup />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default Approuter;
