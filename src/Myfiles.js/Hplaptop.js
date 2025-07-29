import React from "react";

const Hplaptop=()=>{
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
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315208_0_royvm2.png?tr=w-400",
            title:"HP Core 14-gr0002TU",
            discription:"HP Core 14-gr0002TU Intel Core i5 13th Gen Thin & Light Laptop (16GB, 512GB SSD, Windows 11 Home, 14 inch, Full HD Display, MS Office Home 2024, Natural Silver, 1.40 KG",
            price:"₹ 55.499.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
              path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/316005_0_klbxwe.png?tr=w-400",
            title:"HP 15-hr1000TU",
            discription:"HP 15-hr1000TU Intel Core Ultra 5 Thin & Light Laptop (16GB, 512GB SSD, Windows 11 Home, 15.6 inch Full HD Display, Natural Silver, 1.65 KG",
            price:"₹ 65,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:" https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315830_0_xwq6wa.png?tr=w-400",
            title:"HP 15-fc0154AU",
            discription:"HP 15-fc0154AU AMD Ryzen 3 Thin & Light Laptop (8GB, 512GB SSD, Windows 11 Home, 15.6 inch Full HD Display, MS Office Home, Natural Silver, 1.59 KG",
            price:"₹ 32,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/313186_0_c4q14m.png?tr=w-400",
            title:"HP 14-em0026AU",
            discription:"HP 14-em0026AU AMD Ryzen 5 7520U Thin & Light Laptop (8GB, 512GB SSD, Windows 11 Home, 14 inch Full HD Display, MS Office 2021, Natural Silver, 1.4 KG",
            price:"₹ 39,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/313741_0_v6dzy6.png?tr=w-400",
            title:"HP 15-fd0492TU",
            discription:"HP 15-fd0492TU Intel Core i5 13th Gen Thin & Light Laptop (16GB, 512GB SSD, Windows 11 Home, 15.6 inch Full HD Display, MS Office 2021, Natural Silver, 1.59 KG",
            price:"₹ 56,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
         {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315640_0_ok26nj.png?tr=w-400",
            title:"HP 15-fd0490TU",
            discription:"HP 15-fd0490TU Intel Core i3 13th Gen Thin & Light Laptop (8GB, 512GB SSD, Windows 11 Home, 15.6 inch Full HD Display, MS Office 2024, Natural Silver, 1.59 KG",
            price:"₹ 39,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315638_0_j7tet1.png?tr=w-400",
            title:"HP 14-ep0294TU",
            discription:"HP 14-ep0294TU Intel Core i3 13th Gen Laptop (8GB, 512GB SSD, Windows 11 Home, 14 inch Full HD Display, MS Office 2024, Natural Silver, 1.4 KG",
            price:"₹ 39,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/316450_0_eokfbr.png?tr=w-400",
            title:"HP Victus 15-fa2701TX",
            discription:"HP Victus 15-fa2701TX Intel Core i5 13th Gen Gaming Laptop (16GB, 512GB SSD, Windows 11 Home, 6GB Graphics, 15.6 inch 144 Hz Full HD IPS Display, NVIDIA GeForce RTX 4050, MS Office Home 2024, Mica Silver, 2.29 KG",
            price:"₹ 76,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315737_0_unhcyg.png?tr=w-400",
            title:"HP Victus 15-fa2192TX",
            discription:"Intel Core i5 13th Gen Gaming Laptop (16GB, 512GB SSD, Windows 11 Home, 4GB Graphics, 15.6 inch 144 Hz Full HD IPS Display, NVIDIA GeForce RTX 3050, MS Office Home 2024, Performance Blue, 2.29 KG",
            price:"₹ 62,999.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307123_0_qdgrja.png?tr=w-400",
            title:"HP Omen 16 xd0020AX AMD Ryzen 7 Gaming Laptop",
            discription:"HP Omen 16 xd0020AX AMD Ryzen 7 Gaming Laptop (16GB, 1TB SSD, Windows 11 Home, 8GB Graphics, 16.1 inch 165 Hz FHD Display, NVIDIA GeForce RTX 4060, MS Office 2021, Shadow Black, 2.37 KG",
            price:"₹ 104,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/313184_0_p5y1uc.png?tr=w-400",
            title:"HP 15-fc0155AU AMD Ryzen 5 7520U Thin & Light Laptop ",
            discription:"HP 15-fc0155AU AMD Ryzen 5 7520U Thin & Light Laptop (8GB, 512GB SSD, Windows 11 Home, 15.6 inch Full HD Display, Natural Silver, 1.59 KG",
            price:"₹ 35,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
             path:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/316450_0_eokfbr.png?tr=w-400",
            title:"HP Victus 15-fa2701TX",
            discription:"HP Victus 15-fa2701TX Intel Core i5 13th Gen Gaming Laptop (16GB, 512GB SSD, Windows 11 Home, 6GB Graphics, 15.6 inch 144 Hz Full HD IPS Display, NVIDIA GeForce RTX 4050, MS Office Home 2024, Mica Silver, 2.29 KG",
            price:"₹ 76,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },


    ];
    return(
        <div className="container-fluid">
            <h1 className="text-white">HP Laptops</h1>
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
        </div>
    )
};
export default Hplaptop;