import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading, Header, Footer } from "../components";
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
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};
export default HomeLayout;
