import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { Images } from "../../images/Images";
import Notifications from "./notifications/Notifications";
import Profile from "./profile/Profile";



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showProfile,setShowProfile]=useState(false);

    const [notifications,setNotifications]=useState([
        {
            id:1,
            type:"comment",
            title:"Pixelwave",
            message:"Commented on Classic Car in Studio",
            desc:"These draggable sliders look really cool. Maybe these could be display when you hold shift..",
            unread:false,
        },
        {
            id:2,
            type:"comment",
            title:"Pixelwave",
            message:"Commented on Classic Car in Studio",
            desc:"These draggable sliders look really cool. Maybe these could be display when you hold shift..",
            unread:true,
        },
        {
            id:3,
            type:"signup",
            title:"Signup Request",
            desc:"Lokesh raj request you to approve signup.Maybe these could be display when you hold",
            unread:true,
        }
    ])

    useEffect(() => {
        const closeMenu = () =>{
            setMenuOpen(false);setShowNotification(false);setShowProfile(false);
        };
        document.addEventListener("click", closeMenu)
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <div>
        <div className="header" onClick={(e) => e.stopPropagation()}>
            <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="logo">
                <img src={Images.logo} alt="logo" />
            </div>
            <div className="nav-wrapper">
                <div className={`nav ${menuOpen ? "show sidebar" : ""}`}>

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/productsupload"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"}>
                        Product Uploading
                    </NavLink>
                    <div className="nav-item dropdown">
                        Creation <img src={Images.dropdown} />
                        <div className="hover-dropdown">
                            <div className="item">Creation</div>
                            <div className="item">Package Creation</div>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        Reports <img src={Images.dropdown} />
                        <div className="hover-dropdown">
                            <div className="item">Package Statement</div>
                            <div className="item">Sales Report</div>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        More <img src={Images.dropdown} />
                        <div className="hover-dropdown">
                            <div className="item">Signup Request</div>
                            <div className="item more-data">Reference Data <IoIosArrowDown className="img"/>
                                <div className="sub-dropdown">
                                    <div className="item">Rejection Reasons</div>
                                    <div className="item">Security Questions</div>
                                    <div className="item">Privacy Policy</div>
                                </div>
                            </div>
                            <div className="item">Blog</div>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="settings-btn">
                        <img src={Images.settings} />
                        <span>Settings</span>
                        <div className="hover-dropdown">
                            <div className="item more-data">Site Language (English) <IoIosArrowDown className="img"/>
                                <div className="sub-dropdown">
                                    <div className="lang">English</div>
                                    <div className="lang">हिन्दी</div>
                                    <div className="lang">中文</div>
                                    <div className="lang">Français</div>
                                </div>
                            </div>
                            <div className="item more-data">Site Appearance <IoIosArrowDown className="img"/>
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
                    <div className="icon" onClick={(e)=>{e.stopPropagation();
                        setShowNotification(!showNotification);
                        setShowProfile(false);
                    }}>
                        <img src={Images.bell} alt="bell" />
                        <span className="dot"></span>
                    </div>
                    <div className="icon" onClick={(e)=>{e.stopPropagation();
                        setShowProfile(!showProfile);
                        setShowNotification(false);
                    }}>
                        <img src={Images.user} alt="error"/>
                    </div>
                </div>

                {
                    showNotification && (
                        <div onClick={(e)=>e.stopPropagation()} >
                            <Notifications notifications={notifications}/>
                        </div>
                    )
                }
                {showProfile && (
                    <div className="profile-wrapper" onClick={(e)=>e.stopPropagation()}>
                        <Profile onClose={()=>setShowProfile(false)}/>
                    </div>
                )}
            </div>
        </div>
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
        </div>
    );
};

export default Header;