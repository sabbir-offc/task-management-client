import { Helmet } from "react-helmet-async";
import { Banner } from "../../components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Tame Task</title>
      </Helmet>
      <Banner />
    </div>
  );
};

export default Home;
