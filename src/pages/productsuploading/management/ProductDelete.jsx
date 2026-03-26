
import { Images } from '../../../images/Images'
import Button from '../../../components/buttons/Button'
const ProductDelete = () => {
  return (
    <div className='delete-container'>
        <div className='delete-popup'>
            <img src={Images.delete} alt="error" />
            <h3>Are you sure you want to delete that product?</h3>
            <span>Do you want to delete this product</span>
        </div>
        <div className='buttons'>
            <Button variant="primary" className='popup-delete'>
                <span>Delete</span>
            </Button>
            <Button variant="delete" className='popup-cancel'>
                <span>Cancel</span>
            </Button>
        </div>
    </div>
)
}

export default ProductDelete