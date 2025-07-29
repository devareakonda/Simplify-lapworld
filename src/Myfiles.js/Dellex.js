import React from 'react'
import { NavLink } from 'react-router-dom';

function Dellex() {
 const data=[
        {
           
            path:"https://dellstatic.luroconnect.com/media/catalog/product/i/n/inbsd-btc-inspiron-7440-2in1.png",
            title:"Inspiron 14 2-in-1 Laptop ",
            discription:"ProcessorIntel® Core™ 7 processor 150U (12MB cache, 10 cores, 12 threads, up to 5.4 GHz) Operating System Windows 11 Home, Single Language English Video Card Intel® Graphics Memory 16GB, 2x8GB, DDR5, 5200MT/s Storage 1TB M.2 PCIe NVMe Solid State Drive Display 14, FHD+ 1920x1200, 60Hz, WVA, IPS, Touch, 250 nit, ComfortView Color Ice Blue, with Fingerprint Reader",
            price:"₹ 96,090.00  ",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
         {
           
            path:"https://dellstatic.luroconnect.com/media/catalog/product/i/n/inbsd-btc-inspiron-5440-plastic_3.png",
            title:"Inspiron 14 Laptop  ",
            discription:"13th Gen Intel® Core™ i3-1305U processor (5 cores, up to 4.5 GHz), Windows 11 Home Single Language (English), Intel® UHD Graphics, 8GB DDR5 RAM (1 x 8GB, 4400 MT/s), 512GB M.2 PCIe NVMe SSD, 14.0-inch 16:10 FHD+ (1920x1200) Anti-Glare Non-Touch Display with ComfortView (300 nits, WVA/IPS), Ice Blue Plastic Cover.",
            price:"₹ 42,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
           
            path:"https://dellstatic.luroconnect.com/media/catalog/product/n/y/nyyezeaukjhk5cbqvjt5_2.jpeg",
            title:"Vostro 16 Laptop  ",
            discription:"Intel® Core™ 5 processor 120U (12MB cache, 10 cores, 12 threads, up to 5.0 GHz), Windows 11 Home Single Language (English), Intel® Graphics, 16GB DDR5 RAM (2 x 8GB, 5200 MT/s), 512GB M.2 PCIe NVMe SSD, 16-inch FHD+ (1920x1200) 16:10, Non-Touch, 60Hz, WVA IPS Anti-Glare Display with ComfortView (250 nits), Titan Grey color.",
            price:"₹ 35,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
          {
            path:"https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/i/n/inbsd-btc-inspiron-5445_1.png",
            title:"Inspiron 14 Laptop",
            discription:"AMD Ryzen™ 5 8540U processor (6 cores, up to 4.9 GHz Max Boost Clock), Windows 11 Home Single Language (English), AMD Radeon™ Graphics, 16GB DDR5 RAM (2 x 8GB, 5600 MT/s), 512GB M.2 PCIe NVMe SSD, 14-inch FHD+ (1920x1200) Non-Touch, 60Hz, WVA IPS Anti-Glare Display with ComfortView (250 nits), Ice Blue Plastic Cover.",
            price:"₹ 58,390.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
    ]

  return (
    <div>
         <div className="container-fluid p-2">
            <h1 className="text-white m-5 text-center">Dell Laptops</h1>
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
            <NavLink to="/Dellex"><button className='seemore  text-center flex-center' >See More</button></NavLink>
        </div>
    </div>
  )
}

export default Dellex