import { Images } from "../../../images/Images";

import { useState } from "react"

const Notifications = ({notifications}) => {
    const [activeTab,setActiveTab]=useState("all");

    const filteredData =  
            activeTab ==="all"
            ? notifications
            : notifications.filter((n)=>n.unread);
return (
    <div className='notification-box'>
        <div className='notification-header'>
            <h3>Notification</h3>
            <div className='tabs'>
                <button className={activeTab === "all" ? "active" : ""} onClick={()=>setActiveTab("all")}>All</button>
                <button className={activeTab === "unread" ? "active" : ""} onClick={()=>setActiveTab("unread")}>Unread</button>
            </div>
        </div>
        <div className="notification-content">
            {filteredData.length === 0 ? (
                <div className="empty">
                    <div className="img">
                        <img src={Images.empty} alt="empty" />
                    </div>
                    <h3>Your inbox is empty</h3>
                    <p>We’ll notify you when there’s a new notification.</p>

                </div>
            ) : (
                <div className="notification-list">
                    {filteredData.map((item)=>(
                        <div className="notification-item" key={item.id}>
                            <div className="icon-box">
                                <img className="icon" src={item.type === "comment" 
                                        ? Images.comment
                                        : item.type === "signup"
                                        ? Images.signup
                                        : Images.userIcon
                                } alt="icon" />
                            </div>
                            <div className="content">
                                <h6>{item.title}</h6>
                                <span className="message">{item.message}</span>
                                {
                                    item.desc && (
                                        <span className="desc">{item.desc}</span>
                                    )}
                                    {item.type==="signup" && (
                                        <button className="btn btn-delete view">View</button>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Notifications