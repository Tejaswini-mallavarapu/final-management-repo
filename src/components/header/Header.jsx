import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { Images } from "../../images/Images";


const languages=[
    "English","हिन्दी","中文","Français","Deutsch","Italiano"
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const closeMenu = () => setMenuOpen(false);
        if (menuOpen) {
            document.addEventListener("click", closeMenu);
        }
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, [menuOpen]);

    return (
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
                <div className={`nav ${menuOpen ? "show" : ""}`}>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"} >
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
                    <div className="icon">
                        <img src={Images.bell} alt="bell" />
                        <span className="dot"></span>
                    </div>
                    <div className="icon">
                        <img src={Images.user} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;