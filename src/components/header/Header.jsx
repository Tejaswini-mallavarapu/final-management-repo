import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import { IoMoonSharp, IoSunny,IoClose } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { Images } from "../../images/Images";
import Notifications from "./notifications/Notifications";
import Profile from "./profile/Profile";
import { HiDotsVertical } from "react-icons/hi";
import { useLocation, NavLink } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showActionsSidebar, setShowActionsSidebar] = useState(false);

    const [openSettings,setOpenSettings]=useState(false);
    const [openLang,setOpenLang]=useState(false);
    const [openTheme,setOpenTheme]=useState(false);

    const [notifications] = useState([
        {
            id: 1,
            type: "comment",
            title: "Pixelwave",
            message: "Commented on Classic Car in Studio",
            desc: "These draggable sliders look really cool. Maybe these could be display when you hold shift..",
            unread: false,
        },
        {
            id: 2,
            type: "comment",
            title: "Pixelwave",
            message: "Commented on Classic Car in Studio",
            desc: "These draggable sliders look really cool. Maybe these could be display when you hold shift..",
            unread: true,
        },
        {
            id: 3,
            type: "signup",
            title: "Signup Request",
            desc: "Lokesh raj request you to approve signup.Maybe these could be display when you hold",
            unread: true,
        }
    ]);
    const closeMenu=()=>{
        setMenuOpen(false);
    }

    useEffect(() => {
        const closeMenu = () => {
            setMenuOpen(false);
            setShowNotification(false);
            setShowProfile(false);
            setShowActionsSidebar(false);
        };
        document.addEventListener("click", closeMenu)
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <div>
            <div className="header " onClick={(e) => e.stopPropagation()}>
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(!menuOpen);
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo">
                    <img src={Images.logo} alt="logo" />
                </div>
                <div className="nav-wrapper">
                    <div className={`nav ${menuOpen ? "show sidebar" : ""}`}>
                        <div className="nav-header"><IoClose className="logo" onClick={closeMenu} /></div>
                        <NavLink  to="/" end
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive ? "nav-item active" : "nav-item"
                            }>
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/productsupload"
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive ? "nav-item active" : "nav-item"}>
                            Product Uploading
                        </NavLink>
                        <div className={`nav-item dropdown ${location.pathname.includes("/creation") ? "active" : "" }`} >
                            Creation <IoIosArrowUp className="img"/>
                            <div className="hover-dropdown">
                                <NavLink to="/creation" onClick={closeMenu}> <div className="item">Creation</div></NavLink>
                                <div className="item" onClick={closeMenu}>Add Category</div>
                                <div className="item" onClick={closeMenu}>Package Creation</div>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            Reports <IoIosArrowUp className="img"/>
                            <div className="hover-dropdown">
                                <div className="item" onClick={closeMenu}>Package Statement</div>
                                <div className="item" onClick={closeMenu}>Sales Report</div>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            More <IoIosArrowUp className="img"/>
                            <div className="hover-dropdown">
                                <div className="item" onClick={closeMenu}>Signup Request</div>
                                <div className="item more-data">Reference Data <IoIosArrowDown className="img" />
                                    <div className="sub-dropdown">
                                        <div className="item" onClick={closeMenu}>Rejection Reasons</div>
                                        <div className="item" onClick={closeMenu}>Security Questions</div>
                                        <div className="item" onClick={closeMenu}>Privacy Policy</div>
                                    </div>
                                </div>
                                <div className="item" onClick={closeMenu}>Blog</div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="settings-btn">
                            <img src={Images.settings} />
                            <span>Settings</span>
                            <div className="hover-dropdown">
                                <div className="item more-data">Site Language (English) <IoIosArrowDown className="img" />
                                    <div className="sub-dropdown">
                                        <div className="lang">English</div>
                                        <div className="lang">हिन्दी</div>
                                        <div className="lang">中文</div>
                                        <div className="lang">Français</div>
                                    </div>
                                </div>
                                <div className="item more-data">Site Appearance <IoIosArrowDown className="img" />
                                    <div className="sub-dropdown">
                                        <div className="lang"><IoSunny />Light</div>
                                        <div className="lang">< IoMoonSharp />Dark</div>
                                        <div className="lang"><LuSunMoon />System</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={Images.chat} alt="chat" />
                            <span className="dot"></span>
                        </div>
                        <div className="icon" onClick={(e) => {
                            e.stopPropagation();
                            setShowNotification(!showNotification);
                            setShowProfile(false);
                        }}>
                            <img src={Images.bell} alt="bell" />
                            <span className="dot"></span>
                        </div>
                        <div className="icon" onClick={(e) => {
                            e.stopPropagation();
                            setShowProfile(!showProfile);
                            setShowNotification(false);
                        }}>
                            <img src={Images.user} alt="error" />
                        </div>
                    </div>
                    <div className="actions-bar" onClick={(e) => {
                        e.stopPropagation();
                        setShowActionsSidebar(true);
                    }}>
                        <HiDotsVertical className="dot" />
                    </div>
                    {
                        showNotification && (
                            <div onClick={(e) => e.stopPropagation()} >
                                <Notifications notifications={notifications} />
                            </div>
                        )
                    }
                    {showProfile && (
                        <div className="profile-wrapper" onClick={(e) => e.stopPropagation()}>
                            <Profile onClose={() => setShowProfile(false)} />
                        </div>
                    )}
                </div>
            </div>
            {showActionsSidebar && (
                <>
                <div className="actions-sidebar-overlay"  onClick={() => setShowActionsSidebar(false)} >     
                </div>
                <div  className="actions-sidebar" onClick={(e) => e.stopPropagation()} >
                    <div className="sidebar-header">
                        <div  className="close-btn"  onClick={() => setShowActionsSidebar(false)} >
                            <IoClose />
                        </div>
                    </div>
                    <div className="sidebar-section">
                        <div className="sidebar-item" onClick={() => {
                            setOpenSettings(!openSettings);
                            setOpenLang(false);
                            setOpenTheme(false);
                        }} >
                            <img src={Images.settings} />Settings
                        </div>
                        {openSettings && (
                        <div className="sidebar-sub">
                            <div  className="sidebar-sub-item" onClick={() => setOpenLang(!openLang)}  >
                                Site Language
                            </div>
                            {openLang && (
                                <div className="sidebar-sub">
                                    <div className="sidebar-sub-item">English</div>
                                    <div className="sidebar-sub-item">हिन्दी</div>
                                    <div className="sidebar-sub-item">中文</div>
                                    <div className="sidebar-sub-item">Français</div>
                                </div>
                            )}
                            <div className="sidebar-sub-item"  onClick={() => setOpenTheme(!openTheme)} >
                                Site Appearance
                            </div>
                            {openTheme && (
                                <div className="sidebar-sub">
                                    <div className="sidebar-sub-item"><IoSunny />Light</div>
                                    <div className="sidebar-sub-item">< IoMoonSharp />Dark</div>
                                    <div className="sidebar-sub-item"><LuSunMoon />System</div>
                                </div>
                            )}
                        </div>
                        )}
                    </div>
                    <div className="sidebar-item">
                        <img src={Images.chat} /> Chat
                    </div>
                    <div
                        className="sidebar-item"
                        onClick={() => {
                        setShowNotification(true);
                        setShowActionsSidebar(false);
                        }}
                    >
                        <img src={Images.bell} /> Notifications
                    </div>
                    <div
                        className="sidebar-item"
                        onClick={() => {
                        setShowProfile(true);
                        setShowActionsSidebar(false);
                        }}
                    >
                        <img src={Images.user} /> Profile
                    </div>
                    </div>
                </>
                )}
            {menuOpen && (
                <div className="overlay" onClick={() => setMenuOpen(false)}></div>
            )}
        </div>
    );
};

export default Header;