import "./App.css";
import SidebarMenu from "./components/sidebarMenu";
import DataDisplay from "./components/dataDisplay";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="section">
          <div className="top_navbar">
            <div className="hamburger">
              <a href="/">
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<DataDisplay />} />

              <Route element={<PrivateRoute />}>
                <Route path="/page-1" element={<Page1 />} />
                <Route path="/page-2" element={<Page2 />} />
              </Route>
            </Routes>
          </div>
        </div>
        <div className="wrapper">
          <SidebarMenu />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
