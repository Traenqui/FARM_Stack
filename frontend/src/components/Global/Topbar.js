import { IconButton, } from "@mui/material";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeContext } from "./Theme";

import '../../main.css'



const Topbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="row justify-space-between xs-12 align-center header">
            <div className='col justify-space-between search'>
                <div className="row justify-space-between">
                    <div className='col align-self-start justify-center'>
                        <input className="form-control" type="text" placeholder='Search' />
                    </div>
                    <div className='col align-end'>
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                </div>

            </div>

            <div className="col align-self-end icons">
                <IconButton onClick={() => toggleTheme()}>
                    {theme === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton href="/notification">
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton href="/preference">
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Topbar;

// Home
// Projects
// Tracker
// Team
// Reports
// Messages
// Notifications
