import { Images } from "../../../images/Images"
import Button from "../../../components/buttons/Button"

const RestoreProduct = ({onClose}) => {
    const handleRestore = () => {
        onConfirm();
    };

    return (
        <div className="delete-container">
            <div className="delete-popup">
                <img src={Images.restore} alt="restore" />
                <h3>Are you sure you want to restore that product?</h3>
                <span>Do you want to restore this product</span>
            </div>
            <div className="buttons">
                <Button variant="delete" className="popup-cancel" onClick={onClose}>
                    <span>Cancel</span>
                </Button>
                <Button variant="primary" className="popup-delete" onClick={onClose}>
                    <span>Restore</span>
                </Button>
            </div>
        </div>
    )
}

export default RestoreProduct