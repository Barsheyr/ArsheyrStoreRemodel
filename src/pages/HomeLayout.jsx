import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading, Header, Footer } from "../components";
import Banners from "../components/Banners";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div className="font-Platypi">
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section>
          <Outlet />
        </section>
      )}

      <div className="bg-black mt-20">
        <Footer />
      </div>
    </div>
  );
};
export default HomeLayout;
