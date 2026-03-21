import React from "react";
import { Images } from "../../images/Images";

export const EditIcon = () => (
  <div className="action-icon">
   <img src={Images.edit}></img>
  </div>
);

export const DeleteIcon = () => (
  <div className="action-icon">
  <img src={Images.delete}></img>
  </div>
);


export const ViewIcon = () => (
  <div className="action-icon">
     <img src={Images.closedeye}></img>

  </div>
);

export const RestoreIcon = () => (
  <div className="action-icon">
     <img src={Images.restore}></img>
  
  </div>
);