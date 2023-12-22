import { Helmet } from "react-helmet-async";
import { Banner } from "../../components/Home/Banner";
import Slider from "../../components/Home/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Tame Task</title>
      </Helmet>
      <Banner />
      <Slider />
    </div>
  );
};

export default Home;
