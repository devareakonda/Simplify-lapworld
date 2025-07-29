import React from "react";

const Lenovolaptop=()=>{
    const data=[
        {
            path:"https://p1-ofp.static.pub/medias/25694757880_New_AG_202303210427441728323956211.png",
            title:"IdeaPad Slim 3i 13th Gen, 39.62cms - Intel i3 (Arctic Grey)",
            discription:"13th Gen Intel® Core™ i3-1315U Processor (E-cores up to 3.30 GHz, P-cores up to 4.50 GHz), Windows 11 Home Single Language 64, Integrated Intel® UHD Graphics, 8GB LPDDR5 RAM (4800 MT/s, soldered), 512GB SSD M.2 2242 PCIe Gen4 QLC, 15.6-inch FHD TN Display (1920 x 1080, 45% NTSC, 250 nits, 60Hz, Anti-Glare, Non-Touch, Narrow Bezel), 65W AC Adapter.",
            price:"₹ 39,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://p1-ofp.static.pub/medias/25838872816_IdeaPadSlim315IAH8ArticGrey_202306020227161725094221889.png",
            title:"IdeaPad Slim 3i 13th Gen, 39.62cms - Intel i3 (Arctic Grey)",
            discription:"12th Gen Intel® Core™ i5-12450H Processor (E-cores up to 3.30 GHz, P-cores up to 4.40 GHz), Windows 11 Home Single Language 64, Integrated Intel® UHD Graphics, 16GB LPDDR5 RAM (4800 MT/s, soldered), 512GB SSD M.2 2242 PCIe Gen4 QLC, 15.6-inch FHD IPS Display (1920 x 1080, 45% NTSC, 300 nits, 60Hz, Anti-Glare, Non-Touch, Narrow Bezel)",
            price:"₹279,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://p4-ofp.static.pub//fes/cms/2025/03/07/cpjn8xclm53x5tqce682r04niafdiy555839.png",
            title:"Ideapad Slim 5 Gen 10, 38.86cms - AMD R7 (Cloud Grey)",
            discription:"AMD Ryzen™ 7 7735HS Processor (3.20 GHz up to 4.75 GHz), Windows 11 Home Single Language 64, Integrated AMD Radeon™ 680M Graphics, 16GB LPDDR5X RAM (6400 MT/s, soldered), 512GB SSD M.2 2242 PCIe Gen4 QLC, 15.3-inch WUXGA IPS Display (1920 x 1200, 100% sRGB, 300 nits, 60Hz, Anti-Glare, Non-Touch), 65W AC Adapter, ClickPad.Integrated AMD Radeon™ 680M Graphics, 16GB LPDDR5X RAM (6400 MT/s, soldered)Integrated AMD Radeon™ 680M Graphics, 16GB LPDDR5X RAM (6400 MT/s, soldered)",
            price:"₹61,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://p1-ofp.static.pub/medias/26612208349_LOQ15IAX9ELG_202407230229581738438439529.png",
            title:"Lenovo LOQ 12th Gen, 39.62cms - Intel i5 (Luna Grey)",
            discription:"12th Gen Intel® Core™ i5-12450HX Processor (E-cores up to 3.10 GHz, P-cores up to 4.40 GHz), Windows 11 Home SL 64, NVIDIA® GeForce RTX™ 2050 Laptop GPU 4GB GDDR6, 12GB DDR5-4800MT/s RAM (SODIMM), 512GB SSD M.2 2242 PCIe Gen4 QLC, 15.6\" FHD IPS Display (1920x1080, 100% sRGB, 300 nits, 144Hz, Anti-Glare), 135W AC Adapter, ClickPad.",
            price:"₹ 62,490.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://p2-ofp.static.pub//fes/cms/2025/03/07/muy7hqpakxwoc7x46aiak88nd049zu893653.png",
            title:"Ideapad Slim 5 Gen 10, 33.78cms - AMD R7(Cloud Grey)",
            discription:"AMD Ryzen™ 7 7735HS Processor (3.20 GHz up to 4.75 GHz), Windows 11 Home SL 64, Integrated AMD Radeon™ 680M Graphics, 16GB LPDDR5X-6400MT/s (Soldered), 512GB SSD M.2 2242 PCIe Gen4 TLC   ",
            price:"₹ 63,491.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
         {
            path:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-pro/pc16250/media-gallery/black/hd-fhd/laptop-dell-pro-pc16250-bk-hd-fhd-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=667&qlt=100,1&resMode=sharp2&size=667,402&chrss=full",
            title:"IdeaPad 5i 2-in-1 13th Gen, 35.56cms - Intel i5 (Luna Grey)",
            discription:"Intel® Core™ i5-13420H (E-cores up to 3.40GHz, P-cores up to 4.60GHz), Windows 11 Home SL 64, Integrated Intel® UHD Graphics, 16GB LPDDR5X-5200MT/s (Soldered), 512GB SSD M.2 2242 PCIe Gen4 TLC, 14\" WUXGA (1920 x 1200) ",
            price:"₹ 70,991.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520-cnb-00000ff090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
            title:"Inspiron 15 Laptop",
            discription:"12th Gen Intel® Core™ i5-1235U, Windows 11 Home SL, Intel® Iris® Xe Graphics, 16GB DDR4-2666MHz (2x8GB), 512GB M.2 PCIe NVMe SSD, 15.6\" FHD (1920 x 1080) Display.",
            price:"₹ 52,989.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/4-zone-rgb-kb/notebook-laptop-g15-5530-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=554&qlt=100,1&resMode=sharp2&size=554,402&chrss=full",
            title:"G15 Gaming Laptop",
            discription:"13th Gen Intel® Core™ i7-13650HX, Windows 11 Home SL, NVIDIA® GeForce RTX™ 3050 6GB GDDR6, 16GB DDR5-4800MHz (1x16GB), 1TB M.2 PCIe NVMe SSD, 15.6\" FHD (1920 x 1080) Display.",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        
    ];
    return(
        <div className="container-fluid">
            <h1 className="text-white">Lenovo Laptops</h1>
            <div className="row">
                {
                    data.map((item, index)=>{
                        return(
                            <div className="col-3 p-2" key={index}>
                                <div className="card col-11 p-4 m-3" data-aos="fade-up" data-aos-duration="2000">
                                    <img className="p-4" src={item.path} alt="lapi"/>
                                    <h4>{item.title}</h4>
                                    <h6>{item.discription}</h6>
                                    <h4>{item.price}</h4>
                                    <p><i class="bi bi-truck m-3 text-warning"></i>{item.para}</p>
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
export default Lenovolaptop;