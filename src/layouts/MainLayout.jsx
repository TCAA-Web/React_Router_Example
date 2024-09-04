import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./MainLayout.module.scss";
import { Navbar } from "../components/Navbar/Navbar";
import { useEffect } from "react";

// Layouts er en måde at samle alt vores "generelle" styling og komponenter som skal gå igen på alle sider.
// Vi bruger "outlet" komponentet fra React-router-dom til at vise vores "pages".
// Alle pages vil blive indsat på "Outlets" plads når ruten matcher.
export function MainLayout() {
  // Hooks der henter vores location (eg. "Home", "About")
  const location = useLocation();

  // Effekt der opdaterer vores page title når location skifter
  useEffect(() => {
    // Vi "slicer" det første tegn væk som er en skråstreg ("/").
    document.title = location.pathname.slice(1);
  }, [location]);

  return (
    <>
      <Navbar />
      <main className={style.mainStyle}>
        <Outlet />
      </main>
    </>
  );
}
