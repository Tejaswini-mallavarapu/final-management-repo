// import { useState } from "react";
// import { createPortal } from "react-dom";

// const Popup = ({
//   trigger,
//   children,
//   size = "md",
//   title = "",
//   showFooter = true,
//   onCancel,
//   className = ""
// }) => {
//   const [open, setOpen] = useState(false);

//   const close = () => {
//     setOpen(false);
//     if (onCancel) onCancel();
//   };

//   return (
//     <>
//       <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
//         {trigger}
//       </span>
//       {open &&
//         createPortal(
//           <div className="popup-overlay" onClick={close}>
//             <div
//               className={`popup-container ${size} ${className}`}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="popup-header">
//                 <h3>{title}</h3>
//                 <button className="popup-close" onClick={close}><img src="/assets/images/popupclose.svg"></img></button>
//               </div>

//               <div className="popup-body">
//                 {typeof children === "function"
//                   ? children({ close })
//                   : children}
//               </div>

//               {/* {showFooter && (
//                 <div className="popup-footer">
//                   <button className="popup-cancel" onClick={close}>
//                     Cancel
//                   </button>
//                 </div>
//               )} */}
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// };

// export default Popup;
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Popup = ({
  trigger,
  children,
  size = "md",
  title = "",
  showFooter = true,
  onCancel,
  className = "",
  isOpen = false   // ✅ NEW PROP
}) => {
  const [open, setOpen] = useState(false);

  // ✅ sync external state
  useEffect(() => {
    if (isOpen) setOpen(true);
  }, [isOpen]);

  const close = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };

  return (
    <>
      {/* optional trigger */}
      {trigger && (
        <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
          {trigger}
        </span>
      )}

      {open &&
        createPortal(
          <div className="popup-overlay" onClick={close}>
            <div
              className={`popup-container ${size} ${className}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-header">
                <h3>{title}</h3>
                <button className="popup-close" onClick={close}>
                  <img src="/assets/images/popupclose.svg" />
                </button>
              </div>

              <div className="popup-body">
                {typeof children === "function"
                  ? children({ close })
                  : children}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Popup;