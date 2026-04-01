import Button from "../buttons/Button";

const ActionPopup = ({
    icon,
    title,
    description,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    variant = "primary"
    }) => {
    return (
        <div className='delete-container'>
        <div className='delete-popup'>
            {icon && <img src={icon} alt="action" />}
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
        <div className='buttons'>
            <Button variant={variant}
                className='popup-delete' onClick={onConfirm} >
                <span>{confirmText}</span>
            </Button>
            <Button variant="delete" className='popup-cancel' onClick={onCancel} >
                <span>{cancelText}</span>
            </Button>
            
        </div>
        </div>
    )
}

export default ActionPopup;