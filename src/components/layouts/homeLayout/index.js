import { allNav } from "../../../configs/variable"
import Header from "./components/Header"
import Navigation from "./components/Navigation";


const HomeLayout = ({children}) => {
    return(
        <div className="homeLayout">
            <Navigation nav={allNav}/>
            <div className="homeLayout_content">
                <Header/>
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;