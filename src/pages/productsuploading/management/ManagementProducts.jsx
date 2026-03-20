import React, { useState } from 'react'
import CustomSelect from '../../../components/forms/CustomSelect';
import Button from '../../../components/buttons/Button';
import { Images } from '../../../images/Images';
const ManagementProducts = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 8,
      images: ["/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png"],
      companyType: "Brand Owner",
      companyName: "Sri Animalife Biotech",
      category: "Aqua Culture",
      subCategory: "Probiotic",
      productName: "Aqua Remid",
      weight: "500g",
      price: 20,
      status: "Active",
    },
    {
      id: 7,
      images: ["/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png"],
      companyType: "Manufacturer",
      companyName: "Unique Biotech",
      category: "Agriculture",
      subCategory: "Biofertilizers",
      productName: "Rhizobium",
      weight: "1kg",
      price: 40,
      status: "Inactive",
    },
    {
      id: 6,
      images: ["/assets/images/products1.png","/assets/images/products1.png"],
      companyType: "Manufacturer",
      companyName: "Unique Biotech",
      category: "Human Medicine",
      subCategory: "Tablet",
      productName: "Amlodipine",
      weight: "20mg",
      price: 20,
      status: "Active",
    },
    {
      id: 5,
      images: ["/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png"],
      companyType: "Brand Owner",
      companyName: "Unique Bio Minerals",
      category: "Aqua Culture",
      subCategory: "Mineral",
      productName: "Super-min",
      weight: "500g",
      price: 20,
      status: "Deleted",
    },
    {
      id: 4,
       images: ["/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png"],
      companyType: "Brand Owner",
      companyName: "Sri Animalife Biotech",
      category: "Aqua Culture",
      subCategory: "Probiotic",
      productName: "Aqua Remid",
      weight: "500g",
      price: 20,
      status: "Active",
    },
    {
      id: 3,
      images: ["/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png"],
      companyType: "Brand Owner",
      companyName: "Sri Animalife Biotech",
      category: "Aqua Culture",
      subCategory: "Probiotic",
      productName: "Aqua Bison",
      weight: "1kg",
      price: 40,
      status: "Inactive",
    },
    {
      id: 2,
    images: ["/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png"],
      companyType: "Brand Owner",
      companyName: "Unique Bio Minerals",
      category: "Aqua Culture",
      subCategory: "Mineral",
      productName: "Super-min",
      weight: "500g",
      price: 20,
      status: "Active",
    },
    {
      id: 1,
       images: ["/assets/images/products1.png", "/assets/images/products1.png", "/assets/images/products1.png"],
      companyType: "Brand Owner",
      companyName: "Unique Bio Minerals",
      category: "Aqua Culture",
      subCategory: "Mineral",
      productName: "Super-min",
      weight: "500g",
      price: 20,
      status: "Deleted",
    }
  ]);

  const [filters, setFilters] = useState({
    companyType: "All",
    companyName: "All",
    productscategory: "All",
    productsubcategory: "All",
    productName: "All",
  });

  return (
    <div className='management-products-container'>
      <div className='management-products-page'>
        <div className="mobile-filter-toggle">
          <div className="mobile-filter-toggle">
            <Button variant='secondary' onClick={() => setShowFilters(true)}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M18.4583 7.08325C18.9775 7.08325 19.485 6.9293 19.9167 6.64086C20.3484 6.35242 20.6848 5.94245 20.8835 5.4628C21.0822 4.98314 21.1342 4.45534 21.0329 3.94614C20.9316 3.43694 20.6816 2.96921 20.3145 2.6021C19.9474 2.23499 19.4796 1.98498 18.9704 1.88369C18.4612 1.78241 17.9334 1.83439 17.4538 2.03307C16.9741 2.23175 16.5641 2.5682 16.2757 2.99988C15.9873 3.43156 15.8333 3.93908 15.8333 4.45825C15.8333 5.15445 16.1099 5.82213 16.6022 6.31441C17.0944 6.80669 17.7621 7.08325 18.4583 7.08325ZM18.4583 3.58325C18.6314 3.58325 18.8005 3.63457 18.9444 3.73072C19.0883 3.82686 19.2005 3.96352 19.2667 4.12341C19.3329 4.28329 19.3503 4.45922 19.3165 4.62896C19.2827 4.79869 19.1994 4.9546 19.077 5.07697C18.9547 5.19934 18.7987 5.28268 18.629 5.31644C18.4593 5.3502 18.2833 5.33288 18.1235 5.26665C17.9636 5.20042 17.8269 5.08827 17.7308 4.94438C17.6346 4.80048 17.5833 4.63131 17.5833 4.45825C17.5833 4.22619 17.6755 4.00363 17.8396 3.83954C18.0037 3.67544 18.2262 3.58325 18.4583 3.58325ZM1.83331 4.45825C1.83331 4.22619 1.9255 4.00363 2.08959 3.83954C2.25369 3.67544 2.47625 3.58325 2.70831 3.58325H13.2083C13.4404 3.58325 13.6629 3.67544 13.827 3.83954C13.9911 4.00363 14.0833 4.22619 14.0833 4.45825C14.0833 4.69032 13.9911 4.91288 13.827 5.07697C13.6629 5.24107 13.4404 5.33325 13.2083 5.33325H2.70831C2.47625 5.33325 2.25369 5.24107 2.08959 5.07697C1.9255 4.91288 1.83331 4.69032 1.83331 4.45825ZM7.95831 7.95825C7.41674 7.95978 6.88889 8.12877 6.44713 8.44208C6.00537 8.75538 5.67134 9.19765 5.49081 9.70825H2.70831C2.47625 9.70825 2.25369 9.80044 2.08959 9.96454C1.9255 10.1286 1.83331 10.3512 1.83331 10.5833C1.83331 10.8153 1.9255 11.0379 2.08959 11.202C2.25369 11.3661 2.47625 11.4583 2.70831 11.4583H5.49081C5.65133 11.9123 5.93365 12.3134 6.30688 12.6177C6.6801 12.922 7.12984 13.1178 7.60688 13.1836C8.08392 13.2494 8.56987 13.1828 9.01156 12.9909C9.45324 12.799 9.83364 12.4894 10.1111 12.0958C10.3886 11.7022 10.5525 11.2399 10.5848 10.7594C10.6171 10.2789 10.5166 9.79881 10.2943 9.37162C10.0721 8.94443 9.73655 8.58661 9.32454 8.33733C8.91252 8.08804 8.43987 7.9569 7.95831 7.95825ZM7.95831 11.4583C7.78525 11.4583 7.61608 11.4069 7.47219 11.3108C7.3283 11.2146 7.21614 11.078 7.14992 10.9181C7.08369 10.7582 7.06636 10.5823 7.10013 10.4125C7.13389 10.2428 7.21722 10.0869 7.33959 9.96454C7.46197 9.84216 7.61788 9.75883 7.78761 9.72507C7.95734 9.6913 8.13328 9.70863 8.29316 9.77486C8.45305 9.84109 8.5897 9.95324 8.68585 10.0971C8.78199 10.241 8.83331 10.4102 8.83331 10.5833C8.83331 10.8153 8.74113 11.0379 8.57703 11.202C8.41294 11.3661 8.19038 11.4583 7.95831 11.4583ZM21.0833 10.5833C21.0833 10.8153 20.9911 11.0379 20.827 11.202C20.6629 11.3661 20.4404 11.4583 20.2083 11.4583H13.2083C12.9762 11.4583 12.7537 11.3661 12.5896 11.202C12.4255 11.0379 12.3333 10.8153 12.3333 10.5833C12.3333 10.3512 12.4255 10.1286 12.5896 9.96454C12.7537 9.80044 12.9762 9.70825 13.2083 9.70825H20.2083C20.4404 9.70825 20.6629 9.80044 20.827 9.96454C20.9911 10.1286 21.0833 10.3512 21.0833 10.5833ZM10.5833 16.7083C10.5833 16.9403 10.4911 17.1629 10.327 17.327C10.1629 17.4911 9.94038 17.5833 9.70831 17.5833H2.70831C2.47625 17.5833 2.25369 17.4911 2.08959 17.327C1.9255 17.1629 1.83331 16.9403 1.83331 16.7083C1.83331 16.4762 1.9255 16.2536 2.08959 16.0895C2.25369 15.9254 2.47625 15.8333 2.70831 15.8333H9.70831C9.94038 15.8333 10.1629 15.9254 10.327 16.0895C10.4911 16.2536 10.5833 16.4762 10.5833 16.7083ZM20.2083 15.8333H17.4258C17.2194 15.2494 16.8133 14.7574 16.2791 14.4441C15.745 14.1308 15.1174 14.0163 14.507 14.1211C13.8967 14.2258 13.3431 14.5429 12.944 15.0163C12.5448 15.4897 12.3259 16.089 12.3259 16.7083C12.3259 17.3275 12.5448 17.9268 12.944 18.4002C13.3431 18.8736 13.8967 19.1907 14.507 19.2955C15.1174 19.4002 15.745 19.2858 16.2791 18.9724C16.8133 18.6591 17.2194 18.1671 17.4258 17.5833H20.2083C20.4404 17.5833 20.6629 17.4911 20.827 17.327C20.9911 17.1629 21.0833 16.9403 21.0833 16.7083C21.0833 16.4762 20.9911 16.2536 20.827 16.0895C20.6629 15.9254 20.4404 15.8333 20.2083 15.8333ZM14.9583 17.5833C14.7853 17.5833 14.6161 17.5319 14.4722 17.4358C14.3283 17.3396 14.2161 17.203 14.1499 17.0431C14.0837 16.8832 14.0664 16.7073 14.1001 16.5376C14.1339 16.3678 14.2172 16.2119 14.3396 16.0895C14.462 15.9672 14.6179 15.8838 14.7876 15.8501C14.9573 15.8163 15.1333 15.8336 15.2932 15.8999C15.453 15.9661 15.5897 16.0782 15.6858 16.2221C15.782 16.366 15.8333 16.5352 15.8333 16.7083C15.8333 16.9403 15.7411 17.1629 15.577 17.327C15.4129 17.4911 15.1904 17.5833 14.9583 17.5833Z" fill="white" />
            </svg></Button>
          </div>
        </div>
        <div className={`filter-boxes ${showFilters ? "open" : ""}`}>

          <div className="filter-header">
            <span>Filters</span>
            <span onClick={() => setShowFilters(false)}>✖</span>
          </div>
          <CustomSelect
            label="Company Type"
            value={filters.companyType}
            options={["All", "Brand Owner", "Manufacturer"]}
            onChange={(val) =>
              setFilters({ ...filters, companyType: val })} />
          <CustomSelect
            label="Company Name"
            value={filters.companyName}
            options={[
              "All",
              "Sri Animalife Biotech",
              "Unique Biotech"
            ]}
            onChange={(val) =>
              setFilters({ ...filters, companyName: val })} />
          <CustomSelect
            label="Product Category"
            value={filters.productscategory}
            options={["All", "Aquaculture", "Agriculture", "Human Medicine", "Others"]}
            onChange={(val) =>
              setFilters({ ...filters, productscategory: val })} />
          <CustomSelect
            label="Product Sub Category"
            value={filters.productsubcategory}
            options={["All", "Probiotic", "Minerals", "Medicine", "Feeds", "Biofertilizer", "Tablet"]}
            onChange={(val) =>
              setFilters({ ...filters, productsubcategory: val })} />
          <CustomSelect
            label="Product Name"
            value={filters.productName}
            options={["All", "Aqua Remid", "Aqua Bison", "Super-min", "Super-min", "Super-min", "Aqua care"]}
            onChange={(val) =>
              setFilters({ ...filters, productName: val })} />
          <div>   <Button
            variant='secondary'
            onClick={() => setShowFilters(false)}>Search</Button></div>
        </div>

        <div >
          <Button variant='white' >
            <span className='upload-btn'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 15.4673C8.51449 15.4673 8.12109 15.0739 8.12109 14.5884V3.41016C8.12109 2.92465 8.51449 2.53125 9 2.53125C9.48551 2.53125 9.87891 2.92465 9.87891 3.41016V14.5884C9.87891 15.0739 9.48551 15.4673 9 15.4673Z" fill="#6B7280" />
              <path d="M14.5892 9.87891H3.41089C2.92538 9.87891 2.53198 9.48551 2.53198 9C2.53198 8.51449 2.92538 8.12109 3.41089 8.12109H14.5892C15.0747 8.12109 15.4681 8.51449 15.4681 9C15.4681 9.48551 15.0747 9.87891 14.5892 9.87891Z" fill="#6B7280" />
            </svg><span>Upload New</span></span>
          </Button>
        </div>

      </div>
      <div className='card-container'>
        {Array.isArray(products) && products.length === 0 ? (
          <div className='empty-state-container'>
            <div className='empty-state'>
              <span><img src={Images.emptystate} alt='no products' /></span>
              <div className='empty-state-content'>
                <h3>No Products found in the list.</h3>
                <p>No products found. Please add products to continue.</p>
                <Button variant='secondary' className='enpty-state-btn'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9.00006 15.4673C8.51455 15.4673 8.12115 15.0739 8.12115 14.5884V3.41016C8.12115 2.92465 8.51455 2.53125 9.00006 2.53125C9.48557 2.53125 9.87897 2.92465 9.87897 3.41016V14.5884C9.87897 15.0739 9.48557 15.4673 9.00006 15.4673Z" fill="white" />
                      <path d="M14.5892 9.87891H3.41095C2.92544 9.87891 2.53204 9.48551 2.53204 9C2.53204 8.51449 2.92544 8.12109 3.41095 8.12109H14.5892C15.0747 8.12109 15.4681 8.51449 15.4681 9C15.4681 9.48551 15.0747 9.87891 14.5892 9.87891Z" fill="white" />
                    </svg></span><span>Add Products</span>
                </Button>
              </div>
            </div>
          </div>

        ) : (
          <div>
            <div className='table-container '>
              <table className="products-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Product Image</th>
                    <th>Company Type</th>
                    <th>Company Name</th>
                    <th>Product Category</th>
                    <th>Sub - Category</th>
                    <th>Product Name</th>
                    <th>Mg/G/M/L/KG/L</th>
                    <th>Price/Unit</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item) => (
                    <tr key={item.id}>

                      <td>{item.id}</td>

                      <td>
                        <div className="image-stack">
                          {item.images?.slice(0, 3).map((img, i) => (
                            <img key={i} src={img} alt="product" />
                          ))}

                          {item.images?.length > 3 && (
                            <div className="more-count">
                              +{item.images.length - 3}
                            </div>
                          )}
                        </div>
                      </td>

                      <td>{item.companyType}</td>
                      <td>{item.companyName}</td>
                      <td>{item.category}</td>
                      <td>{item.subCategory}</td>
                      <td>{item.productName}</td>
                      <td>{item.weight}</td>
                      <td>{item.price}</td>

                      <td>
                        <span className={`status ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="action-btn edit">✏️</button>
                          <button className="action-btn delete">🗑️</button>
                          <button className="action-btn view">👁️</button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default ManagementProducts;