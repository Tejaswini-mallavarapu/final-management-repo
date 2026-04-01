import { Images } from "../../../images/Images"
import Button from "../../../components/buttons/Button"
import api from "../../../apis/axios";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const RestoreProduct = ({ product, onClose }) => {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const handleRestore = async () => {
        try {
            setLoading(true);
            const token = auth?.accessToken;
            const roleId = auth?.user?.role_id;

            console.log("roleId:", roleId);
            console.log("productId:", product?.id);
            console.log("Restore Product:", product);

            const response = await api.patch(
                `/${roleId}/products/${product.id}/restore`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
            onClose();
            window.location.reload();
        } catch (error) {
            console.log("Restore error", error.response || error);

        } finally {
            setLoading(false);
        }

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
                <Button variant="primary" className="popup-delete" onClick={handleRestore} disabled={loading}>
                    <span>{loading ? "Restoring..." : "Restore"}</span>
                </Button>
            </div>
        </div>
    )
}

export default RestoreProduct