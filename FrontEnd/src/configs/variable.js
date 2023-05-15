import {BiHome, BiSearch, BiLibrary} from "react-icons/bi"
import {AiOutlineSetting} from "react-icons/ai"

export const allNav = [
    {
        id: 1,
        title: "Home",
        link: "/",
        icon: (
            <BiHome 
                style={{
                    fontSize: "24px",
                }}
            />
        )
    },
    {
        id: 2,
        title: "Search",
        link: "/search",
        icon: (
            <BiSearch 
                style={{
                    fontSize: "24px",
                }}
            />
        )
    },
    {
        id: 3,
        title: "Library",
        link: "/library",
        icon: (
            <BiLibrary 
                style={{
                    fontSize: "24px",
                }}
            />
        )
    },
    {
        id: 4,
        title: "Settings",
        link: "/setting",
        icon: (
            <AiOutlineSetting 
                style={{
                    fontSize: "24px",
                }}
            />
        )
    }
]