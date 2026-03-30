// import React, { useEffect, useState } from 'react'
// import { Images } from '../../../images/Images';
// import { useAuth } from '../../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import api from '../../../apis/axios';
// import Popup from '../../popup/PopUp';
// import * as yup from "yup";

// const Profile = ({ onClose }) => {
//     const navigate = useNavigate();
//     const { auth, logout } = useAuth();
//     const [showErrorPopup, setShowErrorPopup] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [isEditing, setIsEditing] = useState(false);
//     const [isLoggingOut, setIsLoggingOut] = useState(false);
//     const [isProfileLoading, setIsProfileLoading] = useState(true);
//     const [profile, setProfile] = useState(null);
//     const [role, setRole] = useState("");
//     const [name, setName] = useState("");
//     const [image, setImage] = useState(null);
//     const [isSaving, setIsSaving] = useState(false);

//     const BASE_URL = "https://b17q02g4-5051.asse.devtunnels.ms";

//     const handleEditClick = () => {
//         setIsEditing(true);
//         setName(profile?.name);
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         if (!file.type.startsWith("image/")) {
//             alert("Only image files allowed");
//             return;
//         }
//         setImage(file);
//     };

//     const handleLogout = async () => {
//         if (isLoggingOut) return;
//         setIsLoggingOut(true)
//         try {
//             const userId = auth?.user?.user_id;
//             const roleId = auth?.user?.role_id;
//             const token = auth?.accessToken;
//             if (!userId || !roleId || !token) {
//                 console.warn("Missing logout data");
//                 return;
//             }
//             const response = await api.post(`/logout/${userId}/${roleId}`, {}, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             console.log(response)

//             if (response.status === 200) {
//                 logout();
//                 navigate("/login");
//             } else {
//                 console.log("logout failed please try again");
//             }
//         } catch (error) {
//             console.log("Logout API error:", error);
//             const msg =
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Logout failed. Please try again.";
//             setErrorMessage(msg);
//             setShowErrorPopup(true);
//         } finally {
//             setIsLoggingOut(false);
//         }

//     }
//     const profileSchema = yup.object().shape({
//         name: yup
//             .string()
//             .matches(/^[A-Za-z\s]*$/, "Only alphabets allowed")
//             .nullable(),

//         image: yup
//             .mixed()
//             .nullable()
//             .notRequired()
//             .test("fileType", "Only image allowed", (value) => {
//                 if (!value) return true;
//                 return value.type?.startsWith("image/");
//             })
//     });

//     const handleSave = async () => {
//         if (isSaving) return;

//         try {
//             await profileSchema.validate(
//                 { name, image },
//                 { abortEarly: false }
//             );

//             const userId = auth?.user?.user_id;

//             const token = auth?.accessToken;

//             const formData = new FormData();

//             if (name && name !== profile?.name) {
//                 formData.append("name", name);
//             }

//             if (image) {
//                 formData.append("profile_photo", image);
//             }

//             if (!image && (!name || name === profile?.name)) {
//                 setIsEditing(false);
//                 return;
//             }
//             setIsSaving(true);
//             const response = await api.put(
//                 `/updateProfile/${userId}`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             console.log("Updated:", response.data);
//             const updatedData = response.data?.data;
//             setProfile((prev) => ({
//                 ...prev,
//                 name: updatedData?.name || name || prev.name,
//                 profile_photo: updatedData?.profile_photo
//                     ? updatedData.profile_photo
//                     : image
//                         ? URL.createObjectURL(image)
//                         : prev.profile_photo,
//             }));

//             setIsEditing(false);

//         } catch (error) {
//             console.log(error);
//             if (error.name === "ValidationError") {
//                 alert(error.errors[0]);
//             } else {
//                 console.log(error.response?.data?.message || "Update failed");
//             }
//         } finally {
//             setIsSaving(false);
//         }
//     };

//     useEffect(() => {
//         if (profile) return;
//         const fetchProfile = async () => {
//             setIsProfileLoading(true);
//             try {
//                 const userId = auth?.user?.user_id;
//                 const token = auth?.accessToken;

//                 if (!userId || !token) return;

//                 const response = await api.get(`/getProfile/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 console.log(response);
//                 setProfile({
//                     ...response.data.data,
//                     role: response.data.role,
//                 });
//                 setRole(response.data.role);

//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 setIsProfileLoading(false);
//             }
//         };
//         fetchProfile();
//     }, []);

//     return (
//         <div className='profile-popup'>
//             <div className='popup-header'>
//                 <div className="logo">

//                     <input
//                         type="file"
//                         accept="image/*"
//                         id="profileImageInput"
//                         style={{ display: "none" }}
//                         onChange={handleImageChange} />

//                     <img
//                         src={
//                             image
//                                 ? URL.createObjectURL(image)
//                                 : profile?.profile_photo
//                                     ? `${BASE_URL}/uploads/profile/${profile.profile_photo}`
//                                     : Images.defaultUser
//                         }
//                         alt="profile"
//                         className="profile-img" />

//                     <div
//                         className="edit"
//                         onClick={() => {
//                             setIsEditing(true);
//                             setName(profile?.name);
//                             document.getElementById("profileImageInput").click();
//                         }}
//                     >
//                         <img src={Images.edit} alt="edit" />
//                     </div>
//                 </div>
//                 <span className="close-btn" onClick={onClose}><img src={Images.closew} alt="" /></span>
//             </div>
//             <div className={`profile-content ${isProfileLoading ? "loading" : "loaded"}`}>

//                 <div className="field">
//                     <label>Name</label>
//                     <div className="value">
//                         {isProfileLoading ? (
//                             <div className="skeleton"></div>
//                         ) : isEditing ? (
//                             <>
//                                 <input
//                                     className="edit-input"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     autoFocus />

//                                 <button
//                                     className='profile-edit btn btn-primary'
//                                     onClick={handleSave}
//                                     disabled={isSaving}
//                                 >
//                                     {isSaving ? "Saving" : "Save"}
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 {profile?.name}
//                                 <span className="edit-icon" onClick={handleEditClick}>
//                                     <img src={Images.edit} alt="" />
//                                 </span>
//                             </>
//                         )}
//                     </div>
//                 </div>

//                 <div className="field">
//                     <label>Role</label>
//                     <div className="value">
//                         {isProfileLoading ? (
//                             <div className="skeleton"></div>
//                         ) : (
//                             profile?.role
//                         )}
//                     </div>
//                 </div>

//                 <div className="field">
//                     <label>Mail ID</label>
//                     <div className="value">
//                         {isProfileLoading ? (
//                             <div className="skeleton"></div>
//                         ) : (
//                             profile?.email_address
//                         )}
//                     </div>
//                 </div>

//             </div>
//             <button
//                 className={`button btns btn-delete logout-btn ${isLoggingOut ? "loading" : ""}`}
//                 onClick={handleLogout}
//                 disabled={isLoggingOut}
//             >
//                 {isLoggingOut ? (
//                     <span className="loader"></span>
//                 ) : (
//                     <>
//                         <img src={Images.logout} alt="error" /> Logout
//                     </>
//                 )}
//             </button>
//             {showErrorPopup && (
//                 <Popup
//                     trigger={<span />}
//                     title="Error"
//                     onCancel={() => setShowErrorPopup(false)}
//                 >
//                     {({ close }) => (
//                         <div style={{ textAlign: "center" }}>
//                             <p>{errorMessage}</p>
//                             <button
//                                 className="btns"
//                                 onClick={() => {
//                                     close();
//                                     setShowErrorPopup(false);
//                                 }}
//                             >
//                                 OK
//                             </button>
//                         </div>
//                     )}
//                 </Popup>
//             )}
//         </div>
//     )
// }

// export default Profile
import React, { useEffect, useState } from 'react'
import { Images } from '../../../images/Images';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../../../apis/axios';
import Popup from '../../popup/PopUp';
import * as yup from "yup";

const Profile = ({ onClose }) => {
    const navigate = useNavigate();
    const { auth, logout } = useAuth();
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [isProfileLoading, setIsProfileLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [open, setOpen] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    const BASE_URL = "https://b17q02g4-5051.asse.devtunnels.ms";

    const handleEditClick = () => {
        setIsEditing(true);
        setName(profile?.name);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setErrorMessage("Only images files are allowed");
            setShowErrorPopup(true);
            return;
        }
        setImage(file);
    };

    const handleLogout = async () => {
        if (isLoggingOut) return;
        setIsLoggingOut(true)
        try {
            const userId = auth?.user?.user_id;
            const roleId = auth?.user?.role_id;
            const token = auth?.accessToken;
            if (!userId || !roleId || !token) {
                console.warn("Missing logout data");
                return;
            }
            const response = await api.post(`/logout/${userId}/${roleId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response)

            if (response.status === 200) {
                logout();
                navigate("/login");
            } else {
                console.log("logout failed please try again");
            }
        } catch (error) {
            console.log("Logout API error:", error);
            const msg =
                error.response?.data?.message ||
                error.message ||
                "Logout failed. Please try again.";
            setErrorMessage(msg);
            setShowErrorPopup(true);
        } finally {
            setIsLoggingOut(false);
        }

    }
    const profileSchema = yup.object().shape({
        name: yup
            .string()
            .matches(/^[A-Za-z\s]*$/, "Only alphabets allowed")
            .nullable(),

        image: yup
            .mixed()
            .nullable()
            .notRequired()
            .test("fileType", "Only image allowed", (value) => {
                if (!value) return true;
                return value.type?.startsWith("image/");
            })
    });

    const handleSave = async () => {
        if (isSaving) return;

        try {
            await profileSchema.validate(
                { name, image },
                { abortEarly: false }
            );

            const userId = auth?.user?.user_id;

            const token = auth?.accessToken;

            const formData = new FormData();

            if (name && name !== profile?.name) {
                formData.append("name", name);
            }

            if (image) {
                formData.append("profile_photo", image);
            }

            if (!image && (!name || name === profile?.name)) {
                setIsEditing(false);
                return;
            }
            setIsSaving(true);
            const response = await api.put(
                `/updateProfile/${userId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Updated:", response.data);
            const updatedData = response.data?.data;
            setProfile((prev) => ({
                ...prev,
                name: updatedData?.name || name || prev.name,
                profile_photo: updatedData?.profile_photo
                    ? updatedData.profile_photo
                    : image
                        ? URL.createObjectURL(image)
                        : prev.profile_photo,
            }));

            setIsEditing(false);

        } catch (error) {
            console.log(error);
            if (error.name === "ValidationError") {
                setErrorMessage(error.errors[0]);
                setShowErrorPopup(true);
            } else {
                setErrorMessage(
                    error.response?.data?.message || "Failed to update profile"
                );
                setShowErrorPopup(true);
            }
        } finally {
            setIsSaving(false);
        }
    };

    useEffect(() => {
        if (profile) return;
        const fetchProfile = async () => {
            setIsProfileLoading(true);
            try {
                const userId = auth?.user?.user_id;
                const token = auth?.accessToken;

                if (!userId || !token) return;

                const response = await api.get(`/getProfile/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response);
                setProfile({
                    ...response.data.data,
                    role: response.data.role,
                });

                setRole(response.data.role);

            } catch (error) {
                console.log(error);
            } finally {
                setIsProfileLoading(false);
            }
        };
        fetchProfile();
    }, []);

    return (
        <div className='profile-popup'>
            <div className='popup-header'>
                <div className="logo">
                    <input
                        type="file"
                        accept="image/*"
                        id="profileImageInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange} />
                    {isProfileLoading ? (
                        <div className="profile-img-skeleton"></div>
                    ) : (
                        <img
                            src={`${BASE_URL}/uploads/profile/${profile?.profile_photo}`}
                            alt="profile"
                            className="profile-img" />
                    )}
                    <div
                        className="edit"
                        onClick={() => {
                            setIsEditing(true);
                            setName(profile?.name);
                            document.getElementById("profileImageInput").click();
                        }}>
                        <img src={Images.edit} alt="edit" />
                    </div>
                </div>
                <span className="close-btn" onClick={onClose}><img src={Images.closew} alt="" /></span>
            </div>
            <div className={`profile-content ${isProfileLoading ? "loading" : "loaded"}`}>
                <div className="field">
                    <label>Name</label>
                    <div className="value">
                        {isProfileLoading ? (
                            <div className="skeleton"></div>
                        ) : isEditing ? (
                            <>
                                <input
                                    className="edit-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoFocus />
                                <button
                                    className='profile-edit btn btn-primary'
                                    onClick={handleSave}
                                    disabled={isSaving}>
                                    {isSaving ? "Saving" : "Save"}
                                </button>
                            </>
                        ) : (
                            <>
                                {profile?.name}
                                <span className="edit-icon" onClick={handleEditClick}>
                                    <img src={Images.edit} alt="" />
                                </span>
                            </>
                        )}
                    </div>
                </div>

                <div className="field">
                    <label>Role</label>
                    <div className="value">
                        {isProfileLoading ? (
                            <div className="skeleton"></div>
                        ) : (
                            profile?.role
                        )}
                    </div>
                </div>

                <div className="field">
                    <label>Mail ID</label>
                    <div className="value">
                        {isProfileLoading ? (
                            <div className="skeleton"></div>
                        ) : (
                            profile?.email_address
                        )}
                    </div>
                </div>

            </div>
            <button
                className={`button btns btn-delete logout-btn ${isLoggingOut ? "loading" : ""}`}
                onClick={handleLogout}
                disabled={isLoggingOut}>
                {isLoggingOut ? (
                    <span className="loader"></span>
                ) : (
                    <>
                        <img src={Images.logout} alt="error" /> Logout
                    </>
                )}
            </button>
            {showErrorPopup && (
                <Popup 
                size='xs'
                    isOpen={showErrorPopup}
                    title="Error"
                    onCancel={() => setShowErrorPopup(false)} >
                    {({ close }) => (
                        <div style={{ textAlign: "center" }}>
                            <p>{errorMessage}</p>
                            <button
                                className="btns"
                                onClick={() => {
                                    close();
                                    setShowErrorPopup(false);
                                }}>
                                <Button>Ok</Button>
                            </button>
                        </div>
                    )}
                </Popup>
            )}
        </div>
    )
}

export default Profile