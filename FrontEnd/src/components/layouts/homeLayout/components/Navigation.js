import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom"
import logo from "../../../../assets/images/blog.png"
import {BsBookmarkHeart} from "react-icons/bs"

const Navigation = ({pageId, nav}) => {
    return (
        <div className="homeLayout_navigation">
            <img className="homeLayout_navigation_logo"
            src = {logo}
            />
            {/* </div> */}
            <Divider sx={{borderColor: "#ffffff8a",
            }} />
            <div className="homeLayout_navigation_list">
                {
                    nav.map((item) => {
                        return (
                            <NavLink
                                className={`homeLayout_navigation_list_item ${pageId === item.id ? "active" : ""}`}
                                key={item.id}
                                to={item.link}
                            >
                                {item.icon}
                                <span className="homeLayout_navigation_list_item_text">{item.title}</span>
                            </NavLink>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;