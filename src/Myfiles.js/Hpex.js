import React from 'react'
import { NavLink } from 'react-router-dom';

function Hpex() {
    const data=[
        {
            path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315737_0_unhcyg.png?tr=w-400",
            title:"HP Victus 15-fa2192TX ",
            discription:"Intel Core i5 13th Gen Gaming Laptop (16GB, 512GB SSD, Windows 11 Home, 4GB Graphics, 15.6 inch 144 Hz Full HD IPS Display, NVIDIA GeForce RTX 3050, MS Office Home 2024, Performance Blue, 2.29 KG)",
            price:"₹ 62,999.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307123_0_qdgrja.png?tr=w-400",
            title:"HP Omen 16 xd0020AX AMD Ryzen 7 Gaming Laptop ",
            discription:"HP Omen 16 xd0020AX AMD Ryzen 7 Gaming Laptop (16GB, 1TB SSD, Windows 11 Home, 8GB Graphics, 16.1 inch 165 Hz FHD Display, NVIDIA GeForce RTX 4060, MS Office 2021, Shadow Black, 2.37 KG)",
            price:"₹ 104,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/313184_0_p5y1uc.png?tr=w-400",
            title:"HP 15-fc0155AU AMD Ryzen 5 7520U Thin & Light Laptop ",
            discription:"HP 15-fc0155AU AMD Ryzen 5 7520U Thin & Light Laptop (8GB, 512GB SSD, Windows 11 Home, 15.6 inch Full HD Display, Natural Silver, 1.59 KG)",
            price:"₹ 35,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/316209_0_xx5hxu.png?tr=w-400",
            title:"HP 15-fc0389AU AMD Ryzen 5 Thin & Light Laptop  ",
            discription:"HP 15-fc0389AU AMD Ryzen 5 Thin & Light Laptop (16GB, 512GB SSD, Windows 11 Home, 15.6 inch Full HD Display, Natural Silver, 1.59 KG)",
            price:"₹ 42,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        }
    ]
  return (
    <div>
         <div className="container-fluid p-2">
            <h1 className="text-white m-4 text-center">HP Laptops</h1>
            <div className="row">
                {
                    data.map((item, index)=>{
                        return(
                            <div className="col-3 p-2" key={index}>
                                <div className="card col-11 p-4 m-3" data-aos="fade-up" data-aos-duration="2000">
                                    <img className="p-5" src={item.path} alt="lapi"/>
                                    <h4>{item.title}</h4>
                                    <h6>{item.discription}</h6>
                                    <h4>{item.price}</h4>
                                    <p><i class="bi bi-truck m-3"></i>{item.para}</p>
                                    <button className="btn btn-success w-75 m-2 ms-5" >{item.button1}</button>
                                    <button className="btn btn-primary w-75 m-2 ms-5">{item.button2}</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
            <NavLink to="/Hpx"><button className='seemore  text-center flex-center' >See More</button></NavLink>
        </div>
    </div>
  )
}

export default Hpex