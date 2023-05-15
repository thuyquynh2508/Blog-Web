import HomeLayout from "../../components/layouts/homeLayout";
import HomeScreen from "../../components/screen/homeScreen/index.js";
import { allNav } from "../../configs/variable";

const HomePage = () => {
    return (
        <HomeLayout pageId={1} nav={allNav}>
            <HomeScreen />
        </HomeLayout>
    );
};

export default HomePage;