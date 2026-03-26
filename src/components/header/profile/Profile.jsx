import React, { useState } from 'react'
import { Images } from '../../../images/Images';
import { LuUserRound } from "react-icons/lu";

const Profile = ({onClose}) => {
    const [isEditing,setIsEditing]=useState(false);
    const [name,setName]=useState("jayanta pal")

    const handleSave=()=>{
        setIsEditing(false);
    }
    return (
        <div className='profile-popup'>
            <div className='popup-header'>
                <div className='logo'>
                    <LuUserRound className='user'/>
                    <div className='edit'>
                        <img  src={Images.edit} alt="error" />
                    </div>
                </div>
                <span className="close-btn" onClick={onClose}><img src={Images.closew} alt="" /></span>
            </div>
            <div className="profile-content">
                <div className="field">
                    <label>Name</label>
                    <div className="value">
                        {isEditing ? (
                            <input className="edit-input" value={name} onChange={(e) => setName(e.target.value)}
                                    onBlur={handleSave}
                                    onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSave();}} autoFocus/>
                        ) : (
                                <>{name}<span className="edit-icon" onClick={() => setIsEditing(true)}> <img src={Images.edit} alt="" /></span></>
                            )}
                    </div>
                </div>
                <div className="field">
                    <label>Role</label>
                    <div className="value">Management</div>
                </div>
                <div className="field">
                    <label>Mail ID</label>
                    <div className="value">jayanta@srianimalife.com</div>
                </div>
            </div>
            <button className="btns btn-delete"><img src={Images.logout} alt="error" /> Logout</button>
        </div>
    )
}

export default Profile