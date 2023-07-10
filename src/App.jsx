import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <Outlet />
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default App;
