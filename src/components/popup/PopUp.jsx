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
  isOpen = false
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setOpen(true);
  }, [isOpen]);

  const close = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };

  return (
    <>
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