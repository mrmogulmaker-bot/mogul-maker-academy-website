import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CoursesPage from "@/pages/CoursesPage";
import FrameworkPage from "@/pages/FrameworkPage";
import PillarPage from "@/pages/PillarPage";
import MethodsPage from "@/pages/MethodsPage";
import EventsPage from "@/pages/EventsPage";
import AboutPage from "@/pages/AboutPage";
import EnquiryPage from "@/pages/EnquiryPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/framework" element={<FrameworkPage />} />
          <Route path="/framework/:pillarId" element={<PillarPage />} />
          <Route path="/methods" element={<MethodsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
