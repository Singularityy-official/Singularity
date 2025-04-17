import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GraphicsPage from "./pages/GraphicsPage";
import ITPage from "./pages/ITPage";
import VideoEditingPage from "./pages/VideoEditingPage";
import SocialCommitmentPage from "./pages/SocialCommitmentPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import WorkWithUsPage from "./pages/WorkWithUsPage";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  
  useEffect(() => {
    if (state?.scrollToTop || pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);
  
  return null;
};

const queryClient = new QueryClient();

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/graphics" element={<GraphicsPage />} />
      <Route path="/it" element={<ITPage />} />
      <Route path="/video-editing" element={<VideoEditingPage />} />
      <Route path="/social-commitment" element={<SocialCommitmentPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work-with-us" element={<WorkWithUsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
