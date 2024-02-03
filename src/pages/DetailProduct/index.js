import React, { useState } from 'react';
import './index.css';

import { Button, Rating } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

function DetailProduct() {
    const [images, setImages] = useState({
        img1: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
        img2: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-gau-bong-1-4800.webp',
        img3: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
        img4: 'https://ckdvietnam.com/upload/product/anyconvcomanyconvcomanyconvcomthumb-bao-li-xi-1616.webp',
    });

    const voucherdata = [
        {
            id: 1,
            voucher: 'CKD15',
            discount: '15%',
            value: '999.000đ',
        },
        {
            id: 2,
            voucher: 'CKD18',
            discount: '18%',
            value: '1.399.000đ',
        },
        {
            id: 3,
            voucher: 'CKD20',
            discount: '20%',
            value: '1.799.000đ',
        },
    ];

    const freeShip = [
        {
            id: 1,
            discount: '16.000 đ',
            value: '299.000đ',
        },
        {
            id: 2,
            discount: '30.000 đ',
            value: '399.000đ',
        },
    ];

    const codeVoucher = [
        {
            id: 1,
            code: 'FREESHIP',
            discount: 'Miễn phí ship',
            value: '299.000đ',
        },
        {
            id: 2,
            code: 'CKD15',
            discount: '15%',
            value: '999.000đ',
        },
        {
            id: 3,
            code: 'CKD18',
            discount: '18%',
            value: '1.399.000đ',
        },
        {
            id: 4,
            code: 'CKD20',
            discount: '20%',
            value: '1.799.000đ',
        },
    ];

    const [activeImg, setActiveImage] = useState(images.img1);

    const [amount, setAmount] = useState(1);

    return (
        <>
            <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
                <div className="flex flex-col gap-6 lg:w-2/4">
                    <img src={activeImg} alt="" className="w-full h-full aspect-square object-cover rounded-xl" />
                    <div className="flex flex-row justify-between h-40">
                        {Object.keys(images).map((key) => (
                            <img
                            src={images[key]}
                            alt=""
                            className="w-24 h-24 rounded-md cursor-pointer md:w-40 md:h-40"
                            onClick={() => setActiveImage(images[key])}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:w-2/4">
                    <div>
                        <span className=" text-green-700 font-semibold border border-green-700">CKD</span>
                        <h1 className="text-3xl font-bold">Sữa rửa mặt dưỡng trắng da chuyên sâu</h1>
                    </div>
                    <p className="text-gray-700">
                        <table>
                            <tr>
                                <td className="font-semibold">Mã sản phẩm</td>
                                <td>D22042</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Thể tích</td>
                                <td>Việt Nam</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Dung tích:</td>
                                <td>150ml</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Giá:</td>
                                <td>
                                    <span className="text-2xl font-semibold">$ 199.00</span>
                                </td>
                            </tr>
                        </table>
                    </p>
                    <div className="flex flex-row items-center gap-12">
                        <div className="flex flex-row items-center">
                            <button
                                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                                onClick={() => setAmount((prev) => prev - 1)}
                            >
                                -
                            </button>
                            <span className="py-4 px-6 rounded-lg">{amount}</span>
                            <button
                                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                                onClick={() => setAmount((prev) => prev + 1)}
                            >
                                +
                            </button>
                        </div>
                        {/* radio thêm túi giấy */}
                        <div className="flex flex-row items-center gap-4">
                            <input type="radio" name="bag" id="bag" />
                            <label htmlFor="bag">Thêm túi giấy</label>
                        </div>
                    </div>

                    <div className="  fixed-vouchers-box">
                        <div className="  fixed-vouchers-heading">
                            <h3 className="  fixed-vouchers-title">Ưu Đãi Voucher Tháng 02</h3>
                        </div>
                        <ul className="  fixed-vouchers-list">
                            {voucherdata.map((voucher) => (
                                <li className="  fixed-voucher" key={voucher.id}>
                                    <p>
                                        Nhận ngay <strong className="  color-main">{voucher.discount}</strong> khi mua
                                        hàng từ
                                        <span className="text-red-500 font-semibold"> {voucher.value}</span>
                                    </p>
                                </li>
                            ))}

                            {freeShip.map((ship) => (
                                <li className="  fixed-voucher" key={ship.id}>
                                    <p>
                                        Hỗ trợ phí ship <strong className="  color-main">{ship.discount}</strong> cho
                                        đơn hàng dưới từ
                                        <span className="text-red-500 font-semibold"> {ship.value}</span>
                                    </p>
                                </li>
                            ))}
                            <li className="  fixed-voucher">
                                <p>
                                    Nhận ngay <strong className="  color-main">mã giảm giá 10%</strong> khi bạn đăng ký
                                    là thành viên
                                </p>
                            </li>
                        </ul>
                        <p></p>
                        <p className="  fixed-vouchers-box__footer">- Voucher áp dụng khi mua hàng tại website</p>
                    </div>

                    <div className="fixed-vouchers-footer">
                        <div className="fixed-vouchers-footer-heading">
                            <h3 className="fixed-vouchers-footer-title">Các mã giảm giá có thể sử dụng:</h3>
                        </div>
                        <div className="voucher-container">
                            <ul className="fixed-vouchers-footer-list">
                                {codeVoucher.map((code) => (
                                    <li className="fixed-voucher">
                                        <a href="/" className="p-2 text-white rounded-md">
                                            {code.code}
                                        </a>

                                        <div className="fixed-voucher-infobox">
                                            <p className="m-0 p-0">
                                                Nhập mã <strong className="color-main">{code.code}</strong>
                                            </p>{' '}
                                            <span
                                                className="px-2 "
                                                style={{
                                                    fontSize: '1rem',
                                                    color: 'var(--color-main)',
                                                    fontWeight: 700,
                                                    display: 'inline',
                                                }}
                                            >
                                                Miễn phí ship cho đơn hàng từ 299.000đ
                                                <br />
                                            </span>{' '}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="quick_ship">
                        <div className="d-flex flex-wrap center align-items-center">
                            <img
                                className="w-20 "
                                src="https://ckdvietnam.com/assets/images/now-free.png"
                                alt="CKD VIỆT NAM"
                            />
                            <b>Giao Nhanh Miễn Phí Trong 2H TP HCM</b>{' '}
                        </div>
                        <p>
                            <span style={{ fontSize: 16 }}>
                                <strong>
                                    Áp dụng<span style={{ color: '#c0392b' }}>&nbsp;free</span> cho&nbsp;đơn trên
                                    1.000.000đ, dưới 1.000.000&nbsp;hỗ trợ phí ship 16.000đ&nbsp;
                                </strong>
                            </span>
                        </p>
                    </div>
                    <div class=" container grid grid-cols-6 gap-4">
                        <div class="col-start-1"></div>
                        <div class="col-end-5 md:col-end-6">
                            <div className="flex space-x-4">
                                <Button className="flex items-center justify-center gap-2 border-2 bg-white border-green-500 hover:bg-green-500 text-white">
                                    <HiShoppingCart className="mr-2 h-8 w-8 text-green-700" />
                                </Button>
                                <Button>
                                    <span className="text-white font-bold">Zalo</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 shadow-md dark:bg-gray-800 p-4 mt-5 rounded-lg">
                {/* Left Column */}
                <div
                    // căn giữa
                    className="flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-lg "
                >
                    <h1>
                        <span className="text-3xl font-semibold text-red-500 dark:text-red-500">5.0/5</span>
                    </h1>
                    <Rating className="mb-2">
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        
                    </Rating>
                    <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                        1,745 lượt đánh giá
                    </p>
                </div>

                {/* Right Column */}
                {/* căn giữa */}
                <div  className=" flex flex-col justify-center  gap-4 p-4 bg-white rounded-lg">
                    {/* Other content goes here */}
                    <Rating.Advanced percentFilled={100} className="mb-2"
                    >
                        5 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={17} className="mb-2">
                        4 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={8} className="mb-2">
                        3 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={4} className="mb-2">
                        2 sao
                    </Rating.Advanced>
                    <Rating.Advanced percentFilled={1}>1 sao</Rating.Advanced>
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
