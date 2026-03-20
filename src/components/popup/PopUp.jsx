import { useState } from "react";

const Popup = ({
    trigger,
    children,
    size = "md", // xs | sm | md | lg | xl
    title = "",
    showFooter = true,
    onCancel,
    className = ""
}) => {

    const [open, setOpen] = useState(false);

    const close = () => {
        setOpen(false);
        if (onCancel) onCancel();
    };

    return (
        <>

            <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
                {trigger}
            </span>

            {open && (
                <div className="popup-overlay" onClick={close}>

                    <div
                        className={`popup-container ${size} ${className}`}
                        onClick={(e) => e.stopPropagation()}>

                        <div className="popup-header">
                            <h3>{title}</h3>
                            <button className="popup-close" onClick={close}>✕</button>
                        </div>

                        <div className="popup-body">
                            {typeof children === "function"
                                ? children({ close })
                                : children}
                        </div>

                        {showFooter && (
                            <div className="popup-footer">
                                <button className="popup-cancel" onClick={close}>
                                    Cancel
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;