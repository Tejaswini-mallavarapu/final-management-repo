import React from "react";
import { Images } from "../../images/Images";

export const EditIcon = (props) => (
  <div className="action-icon" {...props}>
   <img src={Images.edit}></img>
  </div>
);

export const DeleteIcon = (props) => (
  <div className="action-icon" {...props}>
  <img src={Images.delete}></img>
  </div>
);


export const ViewIcon = (props) => (
  <div className="action-icon" {...props}>
     <img src={Images.closedeye}></img>

  </div>
);

export const RestoreIcon = ({props}) => (
  <div className="action-icon" {...props}>
     <img src={Images.restore}></img>
  
  </div>
);