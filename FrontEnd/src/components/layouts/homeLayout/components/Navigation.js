import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom"

const Navigation = ({pageId, nav}) => {
    return (
        <div className="homeLayout_navigation">
            <div className="homeLayout_navigation_logo">Music Player</div>
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