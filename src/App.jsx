import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CaseStudyModal from './components/CaseStudyModal';
import { projectsData } from './data/portfolioData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsInitialCategory, setProjectsInitialCategory] = useState('all');

  // Handle URL hash changes (Supports GitHub Pages direct link & back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'experience', 'about', 'projects', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    // Initial check on load
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  const handleCategorySelectFromHome = (categoryId) => {
    setProjectsInitialCategory(categoryId);
    setActivePage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'projects';
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={setActivePage}
            onOpenCaseStudy={handleOpenCaseStudy}
            onSelectCategory={handleCategorySelectFromHome}
          />
        );
      case 'experience':
        return <ExperiencePage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'projects':
        return (
          <ProjectsPage
            initialCategory={projectsInitialCategory}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            onOpenCaseStudy={handleOpenCaseStudy}
            onSelectCategory={handleCategorySelectFromHome}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#142B4A] flex flex-col justify-between selection:bg-bronze selection:text-white relative">
      {/* Global Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {renderActivePage()}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Project Deep-Dive Case Study Modal Overlay */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={handleCloseCaseStudy}
        />
      )}
    </div>
  );
}
