import { Images } from '../../../images/Images'
import Button from '../../../components/buttons/Button'
import api from '../../../apis/axios';
import { useAuth } from '../../../context/AuthContext';
import { useState } from 'react';

const ProductDelete = ({ product, onClose }) => {

    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            const token = auth?.accessToken;
            const roleId = auth?.user?.role_id;
            console.log("roleId:", roleId);
            console.log("productId:", product?.id);

            console.log("Deleting product:", product);

            await api.delete(
                `/${roleId}/products/${product.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            onClose();
            window.location.reload();
        } catch (error) {
            console.log("Delete error", error.response || error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='delete-container'>
            <div className='delete-popup'>
                <img src={Images.delete} alt="delete" />
                <h3>Are you sure you want to delete that product?</h3>
                <span>Do you want to delete this product</span>
            </div>

            <div className='buttons'>
                <Button
                    variant="primary"
                    className="popup-delete"
                    onClick={handleDelete}
                    disabled={loading}>
                    <span>{loading ? "Deleting..." : "Delete"}</span>
                </Button>

                <Button
                    variant="delete"
                    className='popup-cancel'
                    onClick={onClose} >
                    <span>Cancel</span>
                </Button>
            </div>
        </div>
    )
}

export default ProductDelete;