import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import PricingList from "./components/PricingList";
import Team from "./components/Team";
import Testimonals from "./components/Testimonals";

const App = () => {
  // 202124
  return (
    <div className="bg-white dark:bg-black ">
      <Header></Header>
      <Home></Home>
      <Testimonals></Testimonals>
      <Team></Team>
      <PricingList></PricingList>
      <Footer></Footer>
    </div>
  );
};

export default App;
