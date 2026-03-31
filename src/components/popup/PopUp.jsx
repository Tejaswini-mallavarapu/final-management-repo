import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Popup = ({
  trigger,
  children,
  size = "md",
  title = "",
  onCancel,
  className = "",
  open 
}) => {

  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const openPopup = () => {
    if (open === undefined) {
      setInternalOpen(true);
    }
  };
  const close = () => {
    if (onCancel) onCancel();
    if (open === undefined) {
      setInternalOpen(false);
    }
  };

  return (
    <>
      {trigger && (
        <span onClick={openPopup} style={{ cursor: "pointer" }}>
          {trigger}
        </span>
      )}

      {isOpen &&
        createPortal(
          <div className="popup-overlay" onClick={close}>
            <div
              className={`popup-container ${size} ${className}`}
              onClick={(e) => e.stopPropagation()}>
              {(title || true) && (
                <div className="popup-header">
                  <h3>{title}</h3>
                  <button className="popup-close" onClick={close}>
                    <img src="/assets/images/popupclose.svg" alt="close" />
                  </button>
                </div>
              )}
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