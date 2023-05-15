import { AccountCircle, NotificationsNone } from "@mui/icons-material";
import { Badge, Breadcrumbs, IconButton, Stack, Tooltip } from "@mui/material"

const Header = () => {
    return (
        <header className="homeLayout_header">
            <div className="homeLayout_header_container">
                <Stack className="homeLayout_header_container_breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumbs">
                        <span>Test Dashboard</span>
                    </Breadcrumbs>
                </Stack>
                
                <div className="homeLayout_header_container_info">
                    
                    {/* <IconButton>
                        <NotificationsNone  className="homeLayout_header_container_info_notification"/>
                    </IconButton> */}
                    <Tooltip>
  <IconButton >
    <Badge badgeContent="1" color="success" overlap="circular" style={{  transform: 'translate(30px, -20px)'}}>
    </Badge>
    <NotificationsNone className="homeLayout_header_container_info_notification"/>
  </IconButton>
</Tooltip>
                    <div className="homeLayout_header_container_info_user">
                        <AccountCircle />
                        <span>Username</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;