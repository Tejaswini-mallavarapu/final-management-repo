import { NavLink } from "react-router-dom";
import { Images } from "../../images/Images";
import { useState, useEffect } from "react";

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
                    </div>
                    <div className="nav-item dropdown">
                        Reports <img src={Images.dropdown} />
                    </div>
                    <div className="nav-item dropdown">
                        More <img src={Images.dropdown} />
                    </div>
                </div>
                <div className="actions">
                    <div className="settings-btn">
                        <img src={Images.settings} />
                        <span>Settings</span>
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