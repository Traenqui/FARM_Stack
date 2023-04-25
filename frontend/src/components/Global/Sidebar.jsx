import { useState } from "react";
import * as React from "react";
import { useLocation } from "react-router-dom";

import TokenIcon from '@mui/icons-material/Token';
import Person2Icon from '@mui/icons-material/Person2';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SpeedIcon from '@mui/icons-material/Speed';
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';

import '../../main.css'


const Sidebar = () => {
    const location = useLocation();
    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
        if (closeMenu) {
            document.documentElement.style.setProperty('--sidebar-width', '15rem')
        } else {
            document.documentElement.style.setProperty('--sidebar-width', '4rem')
        }
        
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div className={closeMenu === false ? "logoContainer" : "logoContainer active"}>
                <TokenIcon className="logo"/>
                <h2 className="title"><strong>Tracker</strong><br/>Manager</h2>
            </div>
            <div className={closeMenu === false ? "burgerContainer" : "burgerContainer active"}>
                <div className="burgerTrigger" onClick={() => {handleCloseMenu();}}></div>
                <div className="burgerMenu"></div>
            </div>
            <div className={closeMenu === false ? "profileContainer" : "profileContainer active"}>
                <Person2Icon className="profile" />
                <div className="profileContents">
                    <p className="name">Test User</p>
                    <p>Werkstattleiter</p>
                </div>
            </div>
            <div className={closeMenu === false ? "contentsContainer" : "contentsContainer active"}>
                <ul>
                    <a href="/">
                        <li>
                            <DashboardIcon className="icon"/>
                            <h4>Dashboard</h4>
                        </li>
                    </a>
                    <a href="/team">
                        <li>
                            <GroupsIcon alt="team" className="icon"/>
                            <h4>Team</h4>
                        </li>
                    </a>
                    <a href="/contact">
                        <li>
                            <ContactsIcon alt="contact" className="icon"/>
                            <h4>Contacts</h4>
                        </li>
                    </a>
                    <a href="/tracker">
                        <li>
                            <LocationOnIcon alt="tracker" className="icon"/>
                            <h4>Tracker</h4>
                        </li>
                    </a>
                    <a href="/invoice">
                        <li>
                            <ReceiptIcon alt="Invoice" className="icon"/>
                            <h4>Invoice</h4>
                        </li>
                    </a>
                    <a href="/performance">
                        <li>
                            <SpeedIcon alt="Performance" className="icon"/>
                            <h4>Performance</h4>
                        </li>
                    </a>
                    
                    <a href="/support">
                        <li>
                            <HelpIcon alt="Support" className="icon" />
                            <h4>Support</h4>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;