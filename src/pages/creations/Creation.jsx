import Accounts from "./creation/Accounts/Accounts"
import Brandowner from "./creation/Brandowner/Brandowner"
import Manufacturer from "./creation/Manufacturer/Manufacturer"
import Button from "../../components/buttons/Button"
import React from 'react'

const Creation = () => {
    const [activeTab, setActiveTab] = React.useState("brandowner") // default = brandowner
    return (
        <div className='upload-products-page'>
            <div className="page-header">
                <h2>Creation</h2>
            </div>
            <div className="upload-products-links">
                <Button variant={activeTab === "brandowner" ? "primary" : "white"} onClick={() => setActiveTab("brandowner")}>
                    Brandowner
                </Button>
                <Button variant={activeTab === "manufacturer" ? "primary" : "white"} onClick={() => setActiveTab("manufacturer")}>
                    Manufacturer
                </Button>
                <Button variant={activeTab === "accounts" ? "primary" : "white"} onClick={() => setActiveTab("accounts")}>
                    Accounts
                </Button>
            </div>
            <div className="upload-products-content">
                {activeTab === "brandowner" && <Brandowner />}
                {activeTab === "manufacturer" && <Manufacturer />}
                {activeTab === "accounts" && <Accounts />}
            </div>
        </div>

    )
}

export default Creation