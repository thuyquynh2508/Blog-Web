import { allNav } from "../../../configs/variable"
import Header from "./components/Header"
import Navigation from "./components/Navigation";


const HomeLayout = ({nav, pageId, children}) => {
    return(
        <div className="homeLayout">
            <Navigation pageId={pageId} nav={nav}/>
            <div className="homeLayout_content">
                <Header/>
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;