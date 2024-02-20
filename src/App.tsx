
import {Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import NotFoundPage from './pages/NotFoundPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import HomePage from './pages/HomePage.tsx';
import PrivacyPolicy from './pages/PrivacyPolicyPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import {useEffect} from "react";

interface Page {
    title: string;
    path: string;
    component: React.ComponentType<any> | null;
}

function App() {

    const pages: Page[] = [
        { title: "Home", path: "/", component: HomePage },
        { title: "Projects", path: "/projects", component: ProjectsPage },
        { title: "Contact", path: "/contact", component: ContactPage },
        { title: "Privacy Policy", path: "/privacy", component: PrivacyPolicy },
        { title: "Wiki ↪", path: "https://wiki.nextfight.net", component: HomePage }
    ];


    const routes =
         pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.component && <page.component />} />
        ));

    const location = useLocation();

    useEffect(() => {
        updateHoverEffect();
    }, [location]);

    routes.push(<Route key="404" path="*" element={<NotFoundPage />} />);

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.scrollY > 100 ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
        }
    });


    return (
      <div data-bs-theme="dark">
          <Navbar title="" active={0} pages={pages} onSelectItem={() => null} />
          <Routes>{routes}</Routes>
      </div>
  );
}

function updateHoverEffect() {
    if (typeof window.updateCards === 'function') {
        window.updateCards();
    }
}

export default App;
