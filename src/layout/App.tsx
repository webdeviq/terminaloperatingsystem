import { Outlet } from "react-router-dom";
import Main from "../base/main/Main";
import Footer from "../base/footer/Footer";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Main>
        <Outlet />
      </Main>
      {pathname != "/" && <Footer />}
    </>
  );
};

export default App;
