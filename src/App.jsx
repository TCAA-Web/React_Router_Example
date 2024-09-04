import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Inde i App komponentet bygger vi vores router
// BrowserRouter er yderst og "lytter" efter route ændringer
// Routes er et komponent der "wrapper" (indpakker) alle vores routes
// Route er en individuel rute der har en path (stien den skal kigge efter) og et element (vores komponent der skal vises)

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={`/about`} element={<About />} />
            <Route path={`/blogs`} element={<Blogs />} />
            <Route path={"/*"} element={<div>404.... PAGE NOT FOUND</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
