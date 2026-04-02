import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../../components/buttons/Button";
import { Images } from "../../../images/Images";
import { MdSettingsBackupRestore } from "react-icons/md";
import api from "../../../apis/axios";
import { useAuth } from "../../../context/AuthContext";

const ProductView = ({
    productId,
    hideActions = false,
    onDeleteClick,
    onRestoreClick,
}) => {
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const { auth } = useAuth();
    const [product, setProduct] = useState(null);

    const isDeleted = product?.status === 2;

    const [activeTab, setActiveTab] = useState("details");
    const [openDescription, setOpenDescription] = useState([]);
    const images =
        product?.images?.map(
            img =>
                `https://b17q02g4-5051.asse.devtunnels.ms/uploads/ManagementProducts/${img.image_url}`
        ) || [];
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const token = auth?.accessToken;
                const managementId = auth?.user?.role_id;
                const res = await api.get(
                    `/management/products/${managementId}`,
                    {
                        params: { id: productId },
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                console.log("DATA", res.data);
                const data = res.data.message?.[0];
                setProduct(data);
            } catch (error) {
                console.log("View error", error);
            }
        };
        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    const toggleDescription = (section) => {
        if (openDescription.includes(section)) {
            setOpenDescription(openDescription.filter((item) => item !== section));
        } else {
            setOpenDescription([...openDescription, section]);
        }
    };

    const nextImage = () => {
        if (activeImage < images.length - 1) {
            setActiveImage(activeImage + 1);
        }
    };

    const prevImage = () => {
        if (activeImage > 0) {
            setActiveImage(activeImage - 1);
        }
    };
    return (
        <div className="view-products">
            <div className="popup-actions">
                <Button
                    variant={activeTab === "details" ? "secondary" : "btn-gray"}
                    onClick={() => setActiveTab("details")}>
                    Product Details
                </Button>

                <Button
                    variant={activeTab === "photos" ? "secondary" : "btn-gray"}
                    onClick={() => setActiveTab("photos")}>
                    Product Photos
                </Button>
            </div>

            <div className="popup-content">
                <div className="popup-body">
                    {activeTab === "details" && (
                        <>
                            <p className="view-header border">Product Details</p>

                            <div className="content">
                                <div className="heading">
                                    <h3>{product?.product_name}</h3>
                                    <div>
                                        <span className="btn probiotics">Probiotics</span>
                                        <span
                                            className={
                                                product?.status === 2
                                                    ? "btn-deleted"
                                                    : product?.status === 1
                                                        ? "btn-active"
                                                        : "btn-inactive"
                                            }>
                                            {product?.status === 1
                                                ? "active"
                                                : product?.status === 0
                                                    ? "inactive"
                                                    : "deleted"}
                                        </span>
                                    </div>
                                </div>

                                <div className="products-info border">
                                    <div className="info-box">
                                        <span>Company Type</span>
                                        <span>Brand Owner</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Company Name</span>
                                        <span>{product?.company_name}</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Packaging Type</span>
                                        <span>Pouch</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Quantity/Unit</span>
                                        <span>{product?.quantity_unit}</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Price/Unit</span>
                                        <span><span>{product?.price_per_unit}</span></span>
                                    </div>
                                    <div className="info-box">
                                        <span>Product Codet</span>
                                        <span>{product?.id}</span>
                                    </div>
                                </div>

                                <div className="border">
                                    <div
                                        className="description"
                                        onClick={() => toggleDescription("composition")} >
                                        <p>Composition/Ingredients</p>
                                        <span>
                                            {openDescription.includes("composition") ? (
                                                <img src={Images.closdescription} />
                                            ) : (
                                                <img src={Images.add} />
                                            )}
                                        </span>
                                    </div>

                                    {openDescription.includes("composition") && (
                                        <div className="description-content">
                                            <ul>
                                                {product?.composition_ingredients?.split("\n").map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="border">
                                    <div
                                        className="description"
                                        onClick={() => toggleDescription("dosage")}>
                                        <p>Dosage & Usage</p>
                                        <span>
                                            {openDescription.includes("dosage") ? (
                                                <img src={Images.closdescription} />
                                            ) : (
                                                <img src={Images.add} />
                                            )}
                                        </span>
                                    </div>

                                    {openDescription.includes("dosage") && (
                                        <div className="description-content">
                                            <span>
                                                {product?.dosage_usage}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === "photos" && (
                        <div className="view-product-images">
                            <p className="view-header border">Product Photos</p>
                            <div className="content gallery">
                                <div className="main-image">
                                    <img src={images[activeImage]} alt="" />

                                    <button
                                        className="nav left"
                                        onClick={prevImage}
                                        disabled={activeImage === 0}>
                                        <FaArrowLeft />
                                    </button>

                                    <button
                                        className="nav right"
                                        onClick={nextImage}
                                        disabled={activeImage === images.length - 1} >
                                        <FaArrowRight />
                                    </button>
                                </div>

                                <div className="thumbnails">
                                    {images.map((img, i) => (
                                        <div
                                            key={i}
                                            className={`thumb ${activeImage === i ? "active" : ""}`}
                                            onClick={() => setActiveImage(i)}
                                        >
                                            <img src={img} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {!hideActions && (
                    <div className="popup-actions popup-actions-footer">
                        {isDeleted ? (
                            <Button variant="primary" onClick={onRestoreClick}>
                                <MdSettingsBackupRestore className="Restore Product" />
                                <span>Restore Product</span>
                            </Button>
                        ) : (
                            <>
                                <Button variant="delete" onClick={onDeleteClick}>
                                    <img src={Images.delete} />
                                    <span>Delete Product</span>
                                </Button>

                                <Button variant="primary">
                                    <img src="/assets/images/editbtn.svg" />
                                    <span>Edit Product Details</span>
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductView;
