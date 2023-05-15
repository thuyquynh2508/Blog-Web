import HomeLayout from "../../components/layouts/homeLayout";
import HomeScreen from "../../components/screen/HomeScreen";
import { allNav } from "../../configs/variable";

const HomePage = () => {
    return <HomeLayout pageId={1} nav={allNav} />;
};

export default HomePage;