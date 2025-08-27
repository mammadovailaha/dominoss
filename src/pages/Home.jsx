import { useTranslation } from "react-i18next";
import Mobile from "../components/Mobile";
import Tracking from "../components/Tracking";
import Rewards from "../components/Rewards";
import Make from "../components/Makeyourown";
const Home = () => {
  return (
    <>
      <Mobile />
      <Tracking />
      <Rewards/>
      <Make/>
    </>
  );
};
export default Home;
