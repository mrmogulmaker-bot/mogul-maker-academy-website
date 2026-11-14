import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import StartHerePage from "@/pages/StartHerePage";
import LearnPage from "@/pages/LearnPage";
import WorkshopsPage from "@/pages/WorkshopsPage";
import ImplementationPage from "@/pages/ImplementationPage";
import ResourcesPage from "@/pages/ResourcesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import CourseDetailPage from "@/pages/CourseDetailPage";
import EventDetailPage from "@/pages/EventDetailPage";
import SchedulePage from "@/pages/SchedulePage";
import LegalPage from "@/pages/LegalPage";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
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
          <Route path="/start-here" element={<StartHerePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/workshops/schedule" element={<SchedulePage />} />
          <Route path="/workshops/:eventId" element={<EventDetailPage />} />
          <Route path="/implementation" element={<ImplementationPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage page="privacy" />} />
          <Route path="/terms" element={<LegalPage page="terms" />} />
          <Route path="/accessibility" element={<LegalPage page="accessibility" />} />
          {/* Legacy route redirects */}
          <Route path="/courses" element={<Navigate to="/learn" replace />} />
          <Route path="/enquiry" element={<Navigate to="/contact" replace />} />
          <Route path="/events" element={<Navigate to="/workshops" replace />} />
          <Route path="/events/:eventId" element={<EventRedirect />} />
          <Route path="/schedule" element={<Navigate to="/workshops/schedule" replace />} />
          <Route path="/journal" element={<Navigate to="/resources" replace />} />
          <Route path="/journal/:slug" element={<Navigate to="/resources" replace />} />
          <Route path="/framework" element={<Navigate to="/about" replace />} />
          <Route path="/framework/:pillarId" element={<Navigate to="/about" replace />} />
          <Route path="/methods" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </BrowserRouter>
    </div>
  );
}

const EventRedirect = () => {
  const { pathname } = useLocation();
  return <Navigate to={pathname.replace("/events/", "/workshops/")} replace />;
};

export default App;
