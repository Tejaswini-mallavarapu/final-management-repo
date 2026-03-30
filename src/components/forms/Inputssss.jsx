// import React, { useEffect, useState } from 'react'
// import Search from './SearchToggle'

// const Inputssss = () => {
//       const [search, setSearch] = useState("");


//   return (
//     <div>

//     <div className="shape-card">
//   <svg className="shape-svg" viewBox="0 0 1411 778" preserveAspectRatio="none">
//     <path
//       d="M1315.71 21C1334.49 21 1349.71 36.2223 1349.71 55V60.3545C1349.71 77.2795 1363.43 91 1380.35 91C1397.28 91 1411 104.72 1411 121.646V750C1411 765.464 1398.46 778 1383 778H49C33.536 778 21 765.464 21 750V49C21 33.536 33.536 21 49 21H1315.71Z"
//       fill="white"
//     />
//   </svg>

//   <div className="shape-content">
//                  <div className='table-container '>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th className='id'>S.No</th>
//                     <th>Product Image</th>
//                     <th>Company Type</th>
//                     <th>Company Name</th>
//                     <th>Product Category</th>
//                     <th>Sub - Category</th>
//                     <th>Product Name</th>
//                     <th>Mg/G/M/L/KG/L</th>
//                     <th>Price/Unit</th>
//                     <th className="status-col">Status</th>
//                     <th className="actions">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products?.map((item) => (
//                     <tr key={item.id}
//                       className={item.status.toLowerCase() === "deleted" ? "row-deleted" : ""}>
//                       <td className='id'>{item.id}</td>
//                       <td>
//                         <div className="image-stack">
//                           {item.images?.slice(0, 3).map((img, i) => (
//                             <img key={i} src={img} alt="product" />
//                           ))}

//                           {item.images?.length > 3 && (
//                             <div className="more-count">
//                               +{item.images.length - 3}
//                             </div>
//                           )}
//                         </div>
//                       </td>

//                       <td>{item.companyType}</td>
//                       <td>{item.companyName}</td>
//                       <td>{item.category}</td>
//                       <td>{item.subCategory}</td>
//                       <td>{item.productName}</td>
//                       <td>{item.weight}</td>
//                       <td>{item.price}</td>
//                       <td>
//                         <span
//                           className={`status ${statusClassMap[item.status.toLowerCase()] || ""}`} >
//                           {item.status}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="actions">
//                           {item.status.toLowerCase() === "deleted" ? (
//                             <>
//                               <Popup size="sm" trigger={<RestoreIcon />} />
//                               <Popup size="sm" trigger={<ViewIcon />} />
//                             </>
//                           ) : (
//                             <>
//                               <Popup size="sm" trigger={<EditIcon />} />
//                               <Popup size="sm" trigger={<DeleteIcon />} />
//                               <Popup size="sm" trigger={<ViewIcon />} />
//                             </>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Inputssss
import React, { useEffect, useState } from "react";
import api from "../../apis/axios";
import { useAuth } from "../../context/AuthContext";

const ProfileTest = () => {
  const { auth } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = auth?.user?.user_id;
        const token = auth?.accessToken;

        const response = await api.get(`/getProfile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("FINAL DATA:", response.data);

        // ✅ CORRECT
        setProfile(response.data.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [auth]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>

      <p><b>Name:</b> {profile?.name}</p>
      <p><b>Email:</b> {profile?.email_address}</p>
      <p><b>Role ID:</b> {profile?.role_id}</p>
       <p><b>Role:</b> {profile?.role_id}</p>
    
     
    </div>
  );
};

export default ProfileTest;