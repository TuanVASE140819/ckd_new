 import { useEffect, useState } from "react";
 import { get } from "../../utils/httpRequest"
 import { checkIsMobile , path_upload} from "../../utils/ckdUtils"

 import 'swiper/css';
 import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Progress } from 'flowbite-react';

import { product_list, review, title } from '../../data/home';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 

import { Tabs, Card } from 'flowbite-react';

import  './index.css';
import React from 'react';

import { Rating } from 'flowbite-react';

 


function Home() {
    return (
        <>
            <section className=" data-te-lazy-load-init " data-te-lazy-load="true">
                <div id="banner">{/* <Banner /> */}</div>

                <div id="slick_cate" className="main_fix pt-5">
                    {/* <Cate /> */}
                </div>

                <div id="banner2" className="pt-5">
                    <Banner2 />
                </div>

                <div id="product_slide" className="p-5 main_fix bg-white">
                    <ProductSlide />
                </div>

                <div id="banner2" className="pt-5">
                    <Banner3 />
                </div>
                <div id="promotion_slide" className="p-5 main_fix pt-5 bg-white">
                    <PromotionSlide />
                </div>
                <div className="main_fix pt-5 bg-white">
                    <Review />
                    {/* <Review2 /> */}
                    {/* <Review3 /> */}
                </div>

                {/* <Ontop />   */}
                <div className="main_fix pt-5 bg-white">
                    <Video />
                </div>
            </section>
        </>
    );
}

// function Banner(){
//   const tag_mb = checkIsMobile();

//   const options = {
//     table: 'photo',
//     select: 'id,tenvi as ten,photo,link',
//     where: 'type="slidevi'+tag_mb+'" and hienthi >0',
//     order_by: 'stt,id desc',
//   };

//   const [banner,setBanner] = useState([]);

//    useEffect(()=>{
//     const fetch = async ()=>{
//       const _banner = await get('tab', {params:options})
//       setBanner(_banner)
//     }

//     fetch();
//    }, [])
  

// return (
//   <Swiper
//     loop={true}
//     autoplay={{
//       delay: 2000,
      
//         }}
        
//     modules={[Autoplay, Pagination, Navigation]}
//     onSwiper={(swiper) => console.log(swiper)}
     
//   >
   
//       { !!banner && 
//           banner.map(i =>{
//             const _url = path_upload().photo;
          
//               return (
//                   <SwiperSlide key={i.id}>
//                       <a className="bg-cover " href={i.link}>
//                           <img className="w-full object-cover h-auto" src={_url + i.photo} alt={i.ten} />
//                       </a>
//                   </SwiperSlide>
//               );
//           })
//         }
    
     
    
//   </Swiper>
// )
// }
// function Cate(){

//   const options = {
//     table: 'product_list',
//     select: 'id,tenvi as ten,tenkhongdauvi as link,photo',
//     where: 'type="san-pham" and hienthi >0',
//     order_by: 'stt,id desc',
//   };

//   const [banner,setBanner] = useState([]);

//    useEffect(()=>{
//     const fetch = async ()=>{
//       const _banner = await get('tab', {params:options})
//       setBanner(_banner)
//     }

//     fetch();
//    }, [])


//   return (
//       <Swiper
//           autoplay={{
//               delay: 2000,
//           }}
//           loop={true}
//           spaceBetween={10}
//           slidesPerView={2}
//           modules={[Autoplay, Pagination, Navigation]}
//           breakpoints={{
//               300: {
//                   slidesPerView: 3,
//                   spaceBetween: 5,
//               },
//               450: {
//                   slidesPerView: 3,
//                   spaceBetween: 5,
//               },
//               600: {
//                   slidesPerView: 4,
//                   spaceBetween: 10,
//               },
//               900: {
//                   slidesPerView: 5,
//                   spaceBetween: 20,
//               },
//           }}
//       >
//           {!!banner &&
//               banner.map((i) => {
//                   const _url = path_upload().product;

//                   return (
//                       <SwiperSlide key={i.id}>
//                           <div className="item_dm">
//                               <p className="img_sp_home zoom_hinh border overflow-hidden">
//                                   <a href={i.link} title={i.ten}>
//                                       <img
//                                           className="img-fluid border rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
//                                           src={_url + i.photo}
//                                           alt="CKD COS VIETNAM"
//                                       />
//                                   </a>
//                               </p>
//                               <h2 className="name_sp catchuoi2">
//                                   <a href={i.link} title={i.ten}>
//                                       {i.ten}
//                                   </a>
//                               </h2>
//                           </div>
//                       </SwiperSlide>
//                   );
//               })}
//       </Swiper>
//   );
// }

function Banner2(){
 
  return (
      <div>
          <a
              href="https://ckdvietnam.com/san-pham/tinh-chat-mo-tham-sang-da-ckd-vita-c-teca-7-days-4g"
              title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
          >
              <img
                  className="w-full h-full object-cover"
                  src="https://ckdvietnam.com/upload/photo/anyconvcombanner-vit-c-9453.webp"
                  alt="banner"
              />
          </a>
      </div>
  );
}



function ProductSlide(){
   return (
       <>
           <Tabs style="pills" className=" justify-center mx-auto">
               <Tabs.Item active title={title.Tab1}
                   className="flex justify-center active">
                   <Swiper
                       spaceBetween={20}
                       freeMode={true}
                       pagination={{
                           clickable: true,
                       }}
                       //  chạy
                       autoplay={{
                           delay: 5000,
                       }}
                       modules={[Autoplay]}
                       breakpoints={{
                           300: {
                               slidesPerView: 2,
                               spaceBetween: 2,
                           },
                           450: {
                               slidesPerView: 2,
                               spaceBetween: 5,
                           },
                           600: {
                               slidesPerView: 3,
                               spaceBetween: 10,
                           },
                           900: {
                               slidesPerView: 4,
                               spaceBetween: 20,
                           },
                       }}
                       className="mySwiper"
                   >
                       {product_list.map((item, index) => (
                           <SwiperSlide key={index}>
                               <div className="container flex justify-center mb-5">
                                   <div className="max-w-sm">
                                       <div className="bg-white relative transition duration-500 rounded-lg">
                                           <img
                                               className="rounded-t-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                               src={item.image}
                                               alt=""
                                           />
                                           <div className="py-6 px-8 rounded-lg bg-white ">
                                               {/* reposive */}
                                               <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                   <a
                                                       href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                       title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                   >
                                                       {item.name}
                                                   </a>
                                               </h1>
                                               <p className="gia_sp">
                                                   <span className="gia giamoi">{item.price}</span>
                                               </p>
                                               <div className="flex justify-center">
                                                   <span className="border rounded p-1 border-green-500 text-green-500">
                                                       New
                                                   </span>
                                               </div>
                                               <div className="mt-2">
                                                   <div className="text-gray-500 text-xs">
                                                       {title.daban}
                                                   </div>
                                                   <Progress
                                                       progress={50}
                                                       color="pink"
                                                       textLabel="50/100"
                                                       size="lg"
                                                       //    labelProgress
                                                       labelText
                                                   />
                                               </div>
                                           </div>

                                           <span
                                               className="cart-buy addcart transition"
                                               data-id="157"
                                               data-action="buynow"
                                           ></span>
                                           {!!item.voucher && (
                                               <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                   {item.voucher}%
                                               </div>
                                           )}
                                       </div>
                                   </div>
                               </div>
                           </SwiperSlide>
                       ))}
                   </Swiper>
                   <Swiper
                       spaceBetween={20}
                       freeMode={true}
                       pagination={{
                           clickable: true,
                       }}
                       //  chạy
                       autoplay={{
                           delay: 5000,
                       }}
                       modules={[Autoplay]}
                       breakpoints={{
                           300: {
                               slidesPerView: 2,
                               spaceBetween: 2,
                           },
                           450: {
                               slidesPerView: 2,
                               spaceBetween: 5,
                           },
                           600: {
                               slidesPerView: 3,
                               spaceBetween: 10,
                           },
                           900: {
                               slidesPerView: 4,
                               spaceBetween: 20,
                           },
                       }}
                       className="mySwiper"
                   >
                       {product_list.map((item, index) => (
                           <SwiperSlide key={index}>
                               <div className="container flex justify-center mb-5">
                                   <div className="max-w-sm">
                                       <div className="bg-white relative transition duration-500 rounded-lg">
                                           <img
                                               className="rounded-t-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                               src={item.image}
                                               alt=""
                                           />
                                           <div className="py-6 px-8 rounded-lg bg-white ">
                                               {/* reposive */}
                                               <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                   <a
                                                       href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                       title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                   >
                                                       {item.name}
                                                   </a>
                                               </h1>
                                               <p className="gia_sp">
                                                   <span className="gia giamoi">{item.price}</span>
                                               </p>
                                               <div className="flex justify-center">
                                                   <span className="border rounded p-1 border-green-500 text-green-500">
                                                       New
                                                   </span>
                                               </div>
                                               <div className="mt-2">
                                                   <div className="text-gray-500 text-xs">{title.daban}</div>
                                                   <Progress
                                                       progress={50}
                                                       color="pink"
                                                       textLabel="50/100"
                                                       size="lg"
                                                       //    labelProgress
                                                       labelText
                                                   />
                                               </div>
                                           </div>
                                           <span
                                               className="cart-buy addcart transition"
                                               data-id="157"
                                               data-action="buynow"
                                           ></span>
                                           {!!item.voucher && (
                                               <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                   {item.voucher}%
                                               </div>
                                           )}
                                       </div>
                                   </div>
                               </div>
                           </SwiperSlide>
                       ))}
                   </Swiper>

                   <p className="xemtatca">
                       <a
                           href="https://ckdvietnam.com/san-pham/tot-nhat"
                           className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                       >
                           {title.xemthem}
                       </a>
                   </p>
               </Tabs.Item>
               <Tabs.Item title="MỚI">
                   <Swiper
                       spaceBetween={20}
                       freeMode={true}
                       pagination={{
                           clickable: true,
                       }}
                       //  chạy
                       autoplay={{
                           delay: 5000,
                       }}
                       modules={[Autoplay]}
                       breakpoints={{
                           300: {
                               slidesPerView: 2,
                               spaceBetween: 2,
                           },
                           450: {
                               slidesPerView: 2,
                               spaceBetween: 5,
                           },
                           600: {
                               slidesPerView: 3,
                               spaceBetween: 10,
                           },
                           900: {
                               slidesPerView: 4,
                               spaceBetween: 20,
                           },
                       }}
                       className="mySwiper"
                   >
                       {product_list.map((item, index) => (
                           <SwiperSlide key={index}>
                               <div className="container flex justify-center mb-5">
                                   <div className="max-w-sm">
                                       <div className="bg-white relative transition duration-500 rounded-lg">
                                           <img
                                               className="rounded-t-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                               src={item.image}
                                               alt=""
                                           />
                                           <div className="py-6 px-8 rounded-lg bg-white ">
                                               {/* reposive */}
                                               <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                   <a
                                                       href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                       title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                   >
                                                       {item.name}
                                                   </a>
                                               </h1>
                                               <p className="gia_sp">
                                                   <span className="gia giamoi">{item.price}</span>
                                               </p>
                                               <div className="flex justify-center">
                                                   <span className="border rounded p-1 border-green-500 text-green-500">
                                                       New
                                                   </span>
                                               </div>
                                               <div className="mt-2">
                                                   <div className="text-gray-500 text-xs">{title.daban}</div>
                                                   <Progress
                                                       progress={50}
                                                       color="pink"
                                                       textLabel="50/100"
                                                       size="lg"
                                                       //    labelProgress
                                                       labelText
                                                   />
                                               </div>
                                           </div>
                                           <span
                                               className="cart-buy addcart transition"
                                               data-id="157"
                                               data-action="buynow"
                                           ></span>
                                           {!!item.voucher && (
                                               <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                   {item.voucher}%
                                               </div>
                                           )}
                                       </div>
                                   </div>
                               </div>
                           </SwiperSlide>
                       ))}
                   </Swiper>
                   <Swiper
                       spaceBetween={20}
                       freeMode={true}
                       pagination={{
                           clickable: true,
                       }}
                       //  chạy
                       autoplay={{
                           delay: 5000,
                       }}
                       modules={[Autoplay]}
                       breakpoints={{
                           300: {
                               slidesPerView: 2,
                               spaceBetween: 2,
                           },
                           450: {
                               slidesPerView: 2,
                               spaceBetween: 5,
                           },
                           600: {
                               slidesPerView: 3,
                               spaceBetween: 10,
                           },
                           900: {
                               slidesPerView: 4,
                               spaceBetween: 20,
                           },
                       }}
                       className="mySwiper"
                   >
                       {product_list.map((item, index) => (
                           <SwiperSlide key={index}>
                               <div className="container flex justify-center mb-5">
                                   <div className="max-w-sm">
                                       <div className="bg-white relative transition duration-500 rounded-lg">
                                           <img
                                               className="rounded-t-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                               src={item.image}
                                               alt=""
                                           />
                                           <div className="py-6 px-8 rounded-lg bg-white ">
                                               {/* reposive */}
                                               <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                                   <a
                                                       href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                       title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                                   >
                                                       {item.name}
                                                   </a>
                                               </h1>
                                               <p className="gia_sp">
                                                   <span className="gia giamoi">{item.price}</span>
                                               </p>
                                               <div className="flex justify-center">
                                                   <span className="border rounded p-1 border-green-500 text-green-500">
                                                       New
                                                   </span>
                                               </div>
                                               <div className="mt-2">
                                                   <div className="text-gray-500 text-xs">{title.daban}</div>
                                                   <Progress
                                                       progress={50}
                                                       color="pink"
                                                       textLabel="50/100"
                                                       size="lg"
                                                       //    labelProgress
                                                       labelText
                                                   />
                                               </div>
                                           </div>
                                           <span
                                               className="cart-buy addcart transition"
                                               data-id="157"
                                               data-action="buynow"
                                           ></span>
                                           {!!item.voucher && (
                                               <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                                   {item.voucher}%
                                               </div>
                                           )}
                                       </div>
                                   </div>
                               </div>
                           </SwiperSlide>
                       ))}
                   </Swiper>

                   <p className="xemtatca">
                       <a
                           href="https://ckdvietnam.com/san-pham/tot-nhat"
                           className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                       >
                           {title.xemthem}
                       </a>
                   </p>
               </Tabs.Item>
           </Tabs>
       </>
   );
}
  
function Banner3() {
    return (
        <div>
            <a
                href="https://ckdcosvietnam.com/san-pham/khuyen-mai"
                title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
            >
                <img
                    className="w-full h-full object-cover"
                    src="https://ckdvietnam.com/upload/photo/anyconvcombanner-web-pc-9456.webp"
                    alt="banner"
                />
            </a>
        </div>
    );
}

function PromotionSlide() {
    return (
        <React.Fragment>
            <div className="title-main">
                <h1 className="h1_home">{title.sanphamkhuyenmai}</h1>
            </div>
            <Swiper
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                //  chạy
                autoplay={{
                    delay: 5000,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >
                {product_list.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="container flex justify-center mb-5">
                            <div className="max-w-sm">
                                <div className="bg-white relative transition duration-500 rounded-lg">
                                    <img
                                        className="rounded-t-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                        src={item.image}
                                        alt=""
                                    />
                                    <div className="py-6 px-8 rounded-lg bg-white ">
                                        {/* reposive */}
                                        <h1 className="text-gray-700  mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs">
                                            <a
                                                href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                            >
                                                {item.name}
                                            </a>
                                        </h1>
                                        <p className="gia_sp">
                                            <span className="gia giamoi">{item.price}</span>
                                        </p>
                                        <div className="flex justify-center">
                                            <span className="border rounded p-1 border-green-500 text-green-500">
                                                New
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <div className="text-gray-500 text-xs">{title.daban}</div>
                                            <Progress
                                                progress={50}
                                                color="pink"
                                                textLabel="50/100"
                                                size="lg"
                                                //    labelProgress
                                                labelText
                                            />
                                        </div>
                                    </div>
                                    <span
                                        className="cart-buy addcart transition"
                                        data-id="157"
                                        data-action="buynow"
                                    ></span>
                                    {!!item.voucher && (
                                        <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                            {item.voucher}%
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper mb-5"
            >
                {product_list.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="container flex justify-center mb-5">
                            <div className="max-w-sm">
                                <div className="bg-white relative transition duration-500 rounded-lg">
                                    <img
                                        className="rounded-t-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                        src={item.image}
                                        alt=""
                                    />
                                    <div className="py-6 px-8 rounded-lg bg-white ">
                                        <h1
                                            className=" mb-3 hover:text-gray-900 hover:cursor-pointer sm: text-xs md: text-xs lg: text-xs xl: text-xs 2xl: text-xs
                                        "
                                        >
                                            <a
                                                href="san-pham/bo-cham-soc-da-toan-dien-limited-xuan-ruc-ro-full-qua-tang-gioi-han-100-hop-duy-nhat-cnc-d"
                                                title="Bộ Chăm Sóc Da Toàn Diện Limited  -  Xuân Rực Rỡ , Full Quà Tặng Giới Hạn 100 hộp duy nhất"
                                            >
                                                {item.name}
                                            </a>
                                        </h1>
                                        <p className="gia_sp">
                                            <span className="gia giamoi">{item.price}</span>
                                        </p>
                                        <div className="flex justify-center">
                                            <span className="border rounded p-1 border-green-500 text-green-500">
                                                New
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <div className="text-gray-500 text-xs">{title.daban}</div>
                                            <Progress
                                                progress={50}
                                                color="pink"
                                                textLabel="50/100"
                                                size="lg"
                                                //    labelProgress
                                                labelText
                                            />
                                        </div>
                                    </div>
                                    <span
                                        className="cart-buy addcart transition"
                                        data-id="157"
                                        data-action="buynow"
                                    ></span>
                                    {!!item.voucher && (
                                        <div className="absolute top-0 left-0 mt-4 ml-4 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                            {item.voucher}%
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="xemtatca">
                <a
                    href="https://ckdvietnam.com/san-pham/tot-nhat"
                    className="bg-green-500 hover:bg-pink-400
                     text-white hover:text-white
                      font-bold py-2 px-4 rounded-full"
                >
                    {title.xemthem}
                </a>
            </p>
        </React.Fragment>
    );
}

function Review() {  
    return (
        <>
            <div className="title-main">
                <h1 className="h1_home">{title.danhgia}</h1>
            </div>
            <div className="px-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 gap-7 xl:gap-10">
                    {review.map((item, index) => (
                        <div className="card rounded overflow-hidden relative" key={index}>
                            <div className="aspect-w-16 aspect-h-9 img_post cursor-pointer">
                                <img
                                    className="object-cover brightness-100 group-hover:brightness-50 w-full fixed-photo"
                                    src={item.img}
                                    alt="CKD COS VIETNAM"
                                />
                            </div>
                            <div className="group relative">
                                <div className=" text-white glass absolute bottom-0 m-4 p-4 translate-y-[80%] group-hover:translate-y-[0%] transition-transform duration-300">
                                    {/* Rating */}
                                    <div className="absolute top-0 right-0 p-2">
                                        <Rating></Rating>
                                    </div>
                                    <div className="grid gap-1 ">
                                        <RatingComponent rating={item.rating} />
                                        <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                            {item.customer}
                                        </p>
                                        <div className="flex items-center mb-4">
                                            <div>
                                                <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                                    {item.feedback}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function Review2() {
       return (
           <>
               <div className="title-main">
                   <h1 className="h1_home">{title.danhgia}</h1>
               </div>
               <div className="relative flex flex-col justify-center overflow-hidden">
                   <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                       <div className="text-center">
                           {/* Logo Carousel animation */}
                           <div
                               x-data="{}"
                               x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
              })"
                               className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                           >
                               <ul
                                   x-ref="logos"
                                   className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                               >
                                   <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
                                       <div>
                                           <Card className="max-w-sm" imgSrc=
                                               "/images/blog/image-4.jpg"
                                               horizontal>
                                               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                   Noteworthy technology acquisitions 2021
                                               </h5>
                                               <p className="font-normal text-gray-700 dark:text-gray-400">
                                                   Here are the biggest enterprise technology acquisitions of 2021 so
                                                   far, in reverse chronological order.
                                               </p>
                                           </Card>
                                       </div>
                                       <div className="col-start-3">
                                           <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
                                               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                   Noteworthy technology acquisitions 2021
                                               </h5>
                                               <p className="font-normal text-gray-700 dark:text-gray-400">
                                                   Here are the biggest enterprise technology acquisitions of 2021 so
                                                   far, in reverse chronological order.
                                               </p>
                                           </Card>
                                       </div>
                                       <div>
                                           <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
                                               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                   Noteworthy technology acquisitions 2021
                                               </h5>
                                               <p className="font-normal text-gray-700 dark:text-gray-400">
                                                   Here are the biggest enterprise technology acquisitions of 2021 so
                                                   far, in reverse chronological order.
                                               </p>
                                           </Card>
                                       </div>
                                       <div>
                                           <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
                                               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                   Noteworthy technology acquisitions 2021
                                               </h5>
                                               <p className="font-normal text-gray-700 dark:text-gray-400">
                                                   Here are the biggest enterprise technology acquisitions of 2021 so
                                                   far, in reverse chronological order.
                                               </p>
                                           </Card>
                                       </div>
                                       <div className="row-start-1 col-start-2 col-span-2">
                                           <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
                                               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                   Noteworthy technology acquisitions 2021
                                               </h5>
                                               <p className="font-normal text-gray-700 dark:text-gray-400">
                                                   Here are the biggest enterprise technology acquisitions of 2021 so
                                                   far, in reverse chronological order.
                                               </p>
                                           </Card>
                                       </div>
                                       
                                   </div>
                               </ul>
                           </div>
                           {/* End: Logo Carousel animation */}
                       </div>
                   </div>
               </div>
           </>
       );
}

function Review3() {
     const [visibleImages, setVisibleImages] = useState(6); // Set the initial number of visible images
     const totalImages = review.length; // Assuming 'review' is the array of images

     const showMore = () => {
         // Increase the number of visible images when "Show More" is clicked
         setVisibleImages((prevVisible) => prevVisible + 3); // You can adjust the number as needed
     };
    return (
        <>
            {/* grid 3 cột 1 dòng */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-7 xl:gap-10">
                {review.slice(0, visibleImages).map((item, index) => (
                    <div className="card rounded overflow-hidden relative" key={index}>
                        <div className="aspect-w-16 aspect-h-9 img_post cursor-pointer">
                            <img
                                className="object-cover brightness-100 group-hover:brightness-50 w-full fixed-photo"
                                src={item.img}
                                alt="CKD COS VIETNAM"
                            />
                        </div>
                        <div className="group relative">
                            <div className=" text-white glass absolute bottom-0 m-4 p-4 translate-y-[80%] group-hover:translate-y-[0%] transition-transform duration-300">
                                {/* Rating */}
                                <div className="absolute top-0 right-0 p-2">
                                    <Rating></Rating>
                                </div>
                                <div className="grid gap-1 ">
                                    <RatingComponent rating={item.rating} />
                                    <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                        {item.customer}
                                    </p>
                                    <div className="flex items-center mb-4">
                                        <div>
                                            <p className="text-white text-sm sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs line-clamp-3">
                                                {item.feedback}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleImages < totalImages && (
                <div className="text-center mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={showMore}>
                        Show More
                    </button>
                </div>
            )}
        </>
    );
}

function Video() {
  return (
      <>
          <div className="title-main mb-5">
              <h1 className="h1_home">
                  {title.video}
              </h1>
          </div>
          <video className="w-full mb-5" autoPlay loop muted>
              <source src="https://ckdvietnam.com/assets/webm/welcome.webm?v=1706522344" type="video/webm" />
          </video>
      </>
  );
}



function RatingComponent({ rating }) {
    // Chuyển đổi giá trị rating thành số nguyên
    const integerRating = Math.floor(rating);

    return (
        <div className="flex flex-col gap-2">
            <Rating>
                {Array(5)
                    .fill()
                    .map((_, index) => (
                        <Rating.Star key={index} filled={index < integerRating} />
                    ))}
                
            </Rating>
        </div>
    );
}


export default Home;
