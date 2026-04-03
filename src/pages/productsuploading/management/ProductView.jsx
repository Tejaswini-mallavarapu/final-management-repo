import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../../components/buttons/Button";
import { Images } from "../../../images/Images";
import { MdSettingsBackupRestore } from "react-icons/md";
import api from "../../../apis/axios";
import { useAuth } from "../../../context/AuthContext";

const ProductView = ({
    productId,
    roleId: passedRoleId,
    hideActions = false,
    onDeleteClick,
    onRestoreClick,
}) => {
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const { auth } = useAuth();
    const roleId = passedRoleId ?? auth?.user?.role_id;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [companyTypes, setCompanyTypes] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const isDeleted = product?.status === 2;
    const [activeTab, setActiveTab] = useState("details");
    const [openDescription, setOpenDescription] = useState([]);
    const basePath =
        roleId === 3
            ? "ManufacturerProducts"
            : "ManagementProducts";

    const images =
        product?.images?.map(
            (img) =>
                `http://localhost:5051/uploads/${basePath}/${img.image_url}`
        ) || [];
    const [activeImage, setActiveImage] = useState(0);
   
useEffect(() => {
    const fetchProduct = async () => {
        if (!roleId || !productId) return;

        setLoading(true);
        setError(null);

        try {
            const token = auth?.accessToken;

            const url =
                roleId === 3
                    ? `/management/getProductsManufacturer/${roleId}?id=${productId}`
                    : `/management/products/${roleId}`;

            const res = await api.get(url, {
                params: roleId === 3 ? {} : { id: productId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = res.data.message?.[0];

            if (!data) throw new Error("No product found");

            setProduct(data);
            setCompanyTypes(res.data.companyType);
            setQuantities(res.data.quantity);

        } catch (error) {
            console.log("View error", error);
            setError("Failed to fetch product data");
            setProduct(null);
        } finally {
            setLoading(false);
        }
    };

    fetchProduct();
}, [productId, roleId]);
    const companyTypeName =
        companyTypes.find(c => c.id === product?.role_id)?.role_name;

    const productQuantity =
        quantities.find(q => q.product_id === product?.id);

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

    if (error) {
        return (
            <div className="view-products">
                <div className="popup-content">
                    <div className="popup-body">
                        <p style={{ color: "red", textAlign: "center" }}>
                            {error}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
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
            {loading && (
                <div className="popup-loader">
                    <div className="loader-spinner"></div>
                </div>
            )}

            <div className={`popup-content ${loading ? "loading" : ""}`}>
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
                                                        : "btn-inactive"}>
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
                                        <span>{companyTypeName}</span>
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
                                        <span>{productQuantity?.quantity}</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Price/Unit</span>
                                        <span>{productQuantity?.price}</span>
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
                                                <img src={Images.add} />)}
                                        </span>
                                    </div>

                                    {openDescription.includes("composition") && (
                                        <div className="description-content">
                                            <ul>
                                                {product?.composition_ingredients?.split("\n").map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>)}
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
                                                <img src={Images.add} />)}
                                        </span>
                                    </div>

                                    {openDescription.includes("dosage") && (
                                        <div className="description-content">
                                            <span>
                                                {product?.dosage_usage}
                                            </span>
                                        </div>)}
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
                                            onClick={() => setActiveImage(i)}>
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
