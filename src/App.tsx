import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import AboutUsPage from "./app/common/AboutUs/aboutUs";
import ContactUsPage from "./app/common/ContactUs/ContactUsPage";
// import TechPage from "./pages/WeOfferTech/techPage";
// import CareerPage from "./pages/CareerPage/careerPage";
import NewsPage from "./pages/NewsPage/newsPage";
// import HireTalentPage from "@/pages/JobProfile/hireTalentPage";
import BusinessDevelopmentPage from "./pages/BusinessDevelopment/BusinessDevelopmentPage";
import ProfilePage from "@/pages/Profile/profilePage";
import CarRentPage from "@/pages/CarRent/carRentPage";
import DealershipPage from "@/pages/Dealership/dealershipPage";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/carrent" element={<CarRentPage />} />
          <Route path="/dealership" element={<DealershipPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/business-development" element={<BusinessDevelopmentPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
