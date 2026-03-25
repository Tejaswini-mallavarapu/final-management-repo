import { useState } from "react";
import Button from "../../../components/buttons/Button";
import { Images } from "../../../images/Images";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductView = ({ productId }) => {
    const [activeTab, setActiveTab] = useState("details");
    const [openDescription, setOpenDescription] = useState([]);
    const images = [
        "/assets/images/product3.jpg",
        "/assets/images/product2.jpg",
        "/assets/images/product1.png",
        "/assets/images/product1.png"
    ];

    const [activeImage, setActiveImage] = useState(0);

    const toggleDescription = (section) => {
        if (openDescription.includes(section)) {
            setOpenDescription(openDescription.filter(item => item !== section));
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
                    onClick={() => setActiveTab("details")}
                >
                    Product Details
                </Button>

                <Button
                    variant={activeTab === "photos" ? "secondary" : "btn-gray"}
                    onClick={() => setActiveTab("photos")}
                >
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
                                    <h3>Aqua Remid</h3>
                                    <div>
                                        <span className="btn probiotics">Probiotics</span>
                                        <span className="btn-active">Active</span>
                                    </div>
                                </div>

                                <div className="products-info border">
                                    <div className="info-box">
                                        <span>Company Type</span>
                                        <span>Brand Owner</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Company Name</span>
                                        <span>Sri Animalife Biotech</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Packaging Type</span>
                                        <span>Pouch</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Quantity/Unit</span>
                                        <span>500g</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Price/Unit</span>
                                        <span>20</span>
                                    </div>
                                    <div className="info-box">
                                        <span>Product Codet</span>
                                        <span>FXSK123U</span>
                                    </div>
                                </div>

                                {/* Composition */}
                                <div className="border">
                                    <div
                                        className="description"
                                        onClick={() => toggleDescription("composition")}
                                    >
                                        <p>Composition/Ingredients</p>
                                        <span>
                                            {openDescription.includes("composition")
                                                ? <img src={Images.closdescription} />
                                                : <img src={Images.add} />}
                                        </span>
                                    </div>

                                    {openDescription.includes("composition") && (
                                        <div className="description-content">
                                            <ul>
                                                <li>Develops and stabilizes phytoplankton bloom</li>
                                                <li>Effective in a wide range of parameters</li>
                                                <li>Reduces disease outbreak</li>
                                                <li>Maintain and improve water color</li>
                                                <li>Helps in improve survival</li>
                                                <li>Degrade organic waste and remove ammonia</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Dosage */}
                                <div className="border">
                                    <div
                                        className="description"
                                        onClick={() => toggleDescription("dosage")}
                                    >
                                        <p>Dosage & Usage</p>
                                        <span>
                                            {openDescription.includes("dosage")
                                                ? <img src={Images.closdescription} />
                                                : <img src={Images.add} />}
                                        </span>
                                    </div>

                                    {openDescription.includes("dosage") && (
                                        <div className="description-content">
                                            <span>
                                               Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
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
                                        disabled={activeImage === 0}
                                    >
                                        <FaArrowLeft/>
                                    </button>

                                    <button
                                        className="nav right"
                                        onClick={nextImage}
                                        disabled={activeImage === images.length - 1}
                                    >
                                        <FaArrowRight/>
                                    </button>
                                </div>

                                {/* THUMBNAILS */}
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
                <div className="popup-actions popup-actions-footer">
                    <Button variant="delete">
                        <img src={Images.delete} />
                        <span>Delete Product</span>
                    </Button>

                    <Button variant="primary">
                        <img src="/assets/images/editbtn.svg" />
                        <span>Edit Product Details</span>
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default ProductView;