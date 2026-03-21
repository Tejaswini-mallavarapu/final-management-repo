import { useState } from "react";
import { Images } from "../../images/Images";
import {
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data=[
  {name: "Jan",expenditure :35000,profit:50000},
  {name: "Feb",expenditure :50000,profit:8000},
  {name: "Mar",expenditure :23550,profit:50400},
  {name: "Apr",expenditure :42000,profit:44000},
  {name: "May",expenditure :11000,profit:66000},
  {name: "Jun",expenditure :44000,profit:5000},
  {name: "July",expenditure :44000,profit:23500},
  {name: "Aug",expenditure :15300,profit:23300},
  {name: "Sep",expenditure :3700,profit:57000},
  {name: "Oct",expenditure :35000,profit:85000},
  {name: "Nov",expenditure :31200,profit:75540},
  {name: "Dec",expenditure :3000,profit:5000},
]
const images=[
  "/assets/images/Rectangle 141.svg",
  "/assets/images/Rectangle 141.svg",
  "/assets/images/Rectangle 141.svg",
  "/assets/images/Rectangle 141 (1).svg"
]

const products = [
  {
    name :"Aquaremid",
    brand:"UBM",
    type:"Probiotic",
    Image:"/assets/images/Rectangle 105.svg"
  },
  {
    name :"Adfvefvquaremid",
    brand:"UBM",
    type:"Probiotic",
    Image:"/assets/images/Rectangle 105.svg"
  }

]

const Dashboard = () => {
  const [activeIndex,setActiveIndex]=useState(0);
  const currentProduct=products[activeIndex];
  return (
    <div className='dashboard'>
        <h2>Dashboard</h2>
        <div className='d-head'>
          <div className='cards'>
            <div className='card-row'>
              <div className='card' style={{
                                backgroundImage: "url('/assets/images/Subtract (1).svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
              }}>
                <button className='arrow-blue-btn position-btn'>
                  <img src={Images.crossuparrow} alt="Error" />
                  </button>
                <h2>Total Manufacturers</h2>
                <div className='image'>
                  <div className='image-stack'>
                    {images.slice(0,3).map((img,i)=>(
                      <img key={i} src={img} alt="Brand" />
                    ))}
                    {images.length > 3 && (
                      <div className='more-count'>
                        +{images.length-3}
                      </div>
                    )}
                  </div>
                  <h2>{images.length}</h2>
                  
                </div>
              </div>
              <div className='card' style={{
                                backgroundImage: "url('/assets/images/Subtract (1).svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat" }}>
                <button className='arrow-black-btn position-btn'>
                  <img src={Images.calendar} alt="Error" />
                  </button>
                <h2>Top Sales Product</h2>
                <div className="green-bar"><img src={Images.arrow_green} alt="error" />₹5647000</div>
                <div className='sales'>
                  <div className="sale-img">
                    <img src={currentProduct.Image} alt="error" />
                    <div className="product-info">
                      <h5>{currentProduct.name}</h5>
                      <p>By {currentProduct.brand}</p>
                      <div className="type">{currentProduct.type}</div>
                    </div>
                  </div>
                  <div className="dots">
                    {products.map((_,i)=>(
                      <span key={i} className={`dot ${i === activeIndex ? "active":""}`}
                      onClick={()=>setActiveIndex(i)}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='card-row'>
              <div className='card' style={{
                                backgroundImage: "url('/assets/images/Subtract (1).svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
              }}>
                <button className='arrow-blue-btn position-btn'>
                  <img src={Images.crossuparrow} alt="Error" />
                  </button>
                <h2>Total Brand Owners</h2>
                <div className='image'>
                  <div className='image-stack'>
                    {images.slice(0,3).map((img,i)=>(
                      <img key={i} src={img} alt="Brand" />
                    ))}
                    {images.length > 3 && (
                      <div className='more-count'>
                        +{images.length-3}
                      </div>
                    )}
                  </div>
                  <h2>{images.length}</h2>
                  
                </div>
              </div>
              <div className='card' style={{
                                backgroundImage: "url('/assets/images/Subtract (1).svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat" }}>
                <button className='arrow-black-btn position-btn'>
                  <img src={Images.calendar} alt="Error" />
                  </button>
                <h2>Top Sales Category</h2>
                <div className="green-bar"><img src={Images.arrow_green} alt="error" />₹5647000</div>
                <div className='sales sales-btm'>
                  <div className="sale-img">
                    <div className="product-info">
                      <h5>{currentProduct.name}</h5>
                      <p>By {currentProduct.brand}</p>
                    </div>
                  </div>
                  <div className="dots">
                    {products.map((_,i)=>(
                      <span key={i} className={`dot ${i === activeIndex ? "active":""}`}
                      onClick={()=>setActiveIndex(i)}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="chart-container">
          <div className='chart'>
            <div className='chart-head'>
              <div className='chart-title'>
                <h2>Total Revenue</h2>
                <p>Bar of the company revenue</p>
              </div>
              <div>
                <input type="date"/>
              </div>
            </div>
            <div>
              <div>
                <p>Expenditure</p>
                <p>Profit</p>
              </div>
            </div>
            <div className='chart-box'>
              <ResponsiveContainer  width="100%" height={300}>
                <BarChart data={data} barGap={10} barCategoryGap={27}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(v)=>`${v/1000}k`}/>
                    <Bar dataKey="expenditure" stackId="a" className='bar-exp' radius={[20,20,20,20]} barSize={35}  stroke="#ffffff"       // 👈 gap color
      strokeWidth={5} />
                    <Bar dataKey="profit" stackId="a" className='bar-profit' radius={[20,20,20,20]} barSize={35}  stroke="#ffffff"       // 👈 gap color
      strokeWidth={5} />
                </BarChart>
              </ResponsiveContainer>

            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard