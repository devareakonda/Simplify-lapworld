import React from "react";

const Asuslaptop=()=>{
    const data=[
        {
            path:"https://in.store.asus.com/media/catalog/product/1/_/1._gz302ea-ru420ws__main.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Flow Z13",
            discription:"Windows 11 Home, AMD Ryzen™ AI MAX 390 Processor with AMD XDNA™ NPU (up to 50 TOPS), 13.4-inch 2.5K WQXGA (2560 x 1600) 16:10 ROG Nebula Touchscreen Display (180Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹ 199,990.00  ",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/1/_/1._ga403wr-qs123ws__main.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Zephyrus G14 (2025) GA403WR-QS123WS",
            discription:"Windows 11 Home, AMD Ryzen™ AI 9 HX 370 Processor with AMD XDNA™ NPU (up to 50 TOPS), NVIDIA® GeForce RTX™ 5070 Ti Laptop GPU, 14-inch 3K OLED ROG Nebula Display (2880 x 1800, 16:10, 120Hz), 2TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹ 279,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/g/a/ga403um-qs007ws_3__1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Zephyrus G14 (2025) GA403UM-QS007WS",
            discription:"Windows 11 Home, AMD Ryzen™ 9 270 Processor with AMD XDNA™ NPU (up to 16 TOPS), NVIDIA® GeForce RTX™ 5060 Laptop GPU, 14-inch 3K OLED ROG Nebula Display (2880 x 1800, 16:10, 120Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹ 189,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/s/t/strix-g16-_g614_2025.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Strix G16 (2025) G614 G614PH-RV033WS",
            discription:"Windows 11 Home, AMD Ryzen™ 9 8940HX Processor, NVIDIA® GeForce RTX™ 5050 Laptop GPU, 16-inch FHD+ WUXGA Display (1920 x 1200, 16:10, 165Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹ 142,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/g/6/g614pm-s5046ws_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Strix G16 (2025) G614 G614PR-RV032WS",
            discription:"Windows 11 Home, AMD Ryzen™ 9 8940HX Processor, NVIDIA® GeForce RTX™ 5070 Ti Laptop GPU, 16-inch FHD+ WUXGA Display (1920 x 1200, 16:10, 165Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹ 229,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/g/6/g614ph-rv033ws_4_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Strix G16 (2025) G614 G614PM-S5046WS",
            discription:"Windows 11 Home, AMD Ryzen™ 9 8940HX Processor, NVIDIA® GeForce RTX™ 5060 Laptop GPU, 16-inch 2.5K WQXGA ROG Nebula Display (2560 x 1600, 16:10, 240Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹  167,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/g/6/g615-lw.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Flow Z13 (2025) GZ302EA-RU420WS",
            discription:"Windows 11 Home, AMD Ryzen™ AI MAX 390 Processor with AMD XDNA™ NPU (up to 50 TOPS), 13.4-inch 2.5K WQXGA ROG Nebula Touchscreen Display (2560 x 1600, 16:10, 180Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹199,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/7/_/7._g615lr-s5190ws__design_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Zephyrus G14 (2025) GA403WR-QS123WS",
            discription:"Windows 11 Home, AMD Ryzen™ AI 9 HX 370 Processor with AMD XDNA™ NPU (up to 50 TOPS), NVIDIA® GeForce RTX™ 5070 Ti Laptop GPU, 14-inch 3K OLED ROG Nebula Display (2880 x 1800, 16:10, 120Hz), 2TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹279,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/g/6/g615lp-s5022ws_3_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Zephyrus G14 (2025) GA403UM-QS007WS",
            discription:"Windows 11 Home, AMD Ryzen™ 9 270 Processor with AMD XDNA™ NPU (up to 16 TOPS), NVIDIA® GeForce RTX™ 5060 Laptop GPU, 14-inch 3K OLED ROG Nebula Display (2880 x 1800, 16:10, 120Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹189,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
         {
            path:"https://in.store.asus.com/media/catalog/product/1/_/1._ga403wr-qs123ws__main.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Zephyrus G14 (2025) GA403WR-QS123WS",
            discription:"Windows 11 Home, AMD Ryzen™ AI 9 HX 370 Processor with AMD XDNA™ NPU (up to 50 TOPS), NVIDIA® GeForce RTX™ 5070 Ti Laptop GPU, 14-inch 3K OLED ROG Nebula Display (2880 x 1800, 16:10, 120Hz), 2TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹ 279,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
         {
            path:"https://in.store.asus.com/media/catalog/product/g/6/g615-lw.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Flow Z13 (2025) GZ302EA-RU420WS",
            discription:"Windows 11 Home, AMD Ryzen™ AI MAX 390 Processor with AMD XDNA™ NPU (up to 50 TOPS), 13.4-inch 2.5K WQXGA ROG Nebula Touchscreen Display (2560 x 1600, 16:10, 180Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹199,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        {
            path:"https://in.store.asus.com/media/catalog/product/g/6/g615-lw.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800",
            title:"ROG Flow Z13 (2025) GZ302EA-RU420WS",
            discription:"Windows 11 Home, AMD Ryzen™ AI MAX 390 Processor with AMD XDNA™ NPU (up to 50 TOPS), 13.4-inch 2.5K WQXGA ROG Nebula Touchscreen Display (2560 x 1600, 16:10, 180Hz), 1TB M.2 NVMe™ PCIe® 4.0 SSD storage.",
            price:"₹199,990.00",
            para:"Standard Delivery by Thur, 24th Jul",
            button1:"Add to Cart",
            button2:"Buy Now"
        },
        
      
      

    ];
    return(
        <div className="container-fluid">
            <h1 className="text-white">Ausu Laptops</h1>
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
export default Asuslaptop;