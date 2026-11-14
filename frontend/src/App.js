import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import StartPage from "@/pages/StartPage";
import FrameworkPage from "@/pages/FrameworkPage";
import AcademyPage from "@/pages/AcademyPage";
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

const EventRedirect = () => {
  const { eventId } = useParams();
  return <Navigate to={`/workshops/${eventId}`} replace />;
};

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/framework" element={<FrameworkPage />} />
            <Route path="/academy" element={<AcademyPage />} />
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

            {/* Deep-linked course pages preserved (shared links keep working) */}
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />

            {/* URL migration map — legacy routes to new architecture */}
            <Route path="/start-here" element={<Navigate to="/start" replace />} />
            <Route path="/learn" element={<Navigate to="/academy" replace />} />
            <Route path="/courses" element={<Navigate to="/academy" replace />} />
            <Route path="/enquiry" element={<Navigate to="/contact" replace />} />
            <Route path="/events" element={<Navigate to="/workshops" replace />} />
            <Route path="/events/:eventId" element={<EventRedirect />} />
            <Route path="/schedule" element={<Navigate to="/workshops/schedule" replace />} />
            <Route path="/journal" element={<Navigate to="/resources" replace />} />
            <Route path="/journal/:slug" element={<Navigate to="/resources" replace />} />
            <Route path="/methods" element={<Navigate to="/framework" replace />} />
            <Route path="/framework/:pillarId" element={<Navigate to="/framework" replace />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
