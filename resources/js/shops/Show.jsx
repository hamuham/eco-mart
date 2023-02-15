import styles from "../styles/Home.module.scss";
import "./modal.css";
import { useState } from "react";
import NavLink from "../components/NavLink";
import Title from "../components/Title";
import Header from "../components/Header";
import useProductsRequest from "../hooks/useProductsRequest";
import { Navigation, Pagination } from 'swiper'; // モジュールをインポート
import { Swiper, SwiperSlide } from 'swiper/react';
import {useNavigate} from "react-router-dom"
import getParameter from "../hooks/getParameter";
import 'swiper/swiper.scss';

const Show = () => {
    const parameters = getParameter();
    const navigation = useNavigate()
    const [val, setVal] = useState(1);
    const handleChange = (e) => {
        setVal(e);
    };
    const result = useProductsRequest(`/showProduct/${parameters[1]['*']}`);

    const quantity = () => {
        const quantityArr = [];
        for (let i = 1; i <= result.data.quantity; i++) {
            quantityArr.push(<option key={i} value={i}>{i}</option>);
        }
        return quantityArr;
    };
    const image = (image) => {
        if (image != null) {
            return (
                <div className="swiper-slide">
                    <img src={`../storage/products/${image}`} />
                </div>
            )
        } else {
            return <img src=""/>;
        }
    }
    const addCart = async (quantity, id) => {
        await axios
            .post('/cartAdd', {
                product_id: id,
                quantity: quantity
            })
            .then((res) => {
                navigation("/cart")
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <NavLink />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <Header page="SHOW"/>
                </div>
            </header>
            <div className="py-12">
                {!result.data ? (
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Title txt="Loading..." size={25} transform="uppercase" />
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="md:flex md:justify-around">
                                    <div className="md:w-1/2">
                                        <div className="swiper-container">
                                            <Swiper
                                                modules={[Navigation, Pagination]}
                                                navigation
                                                pagination={{ clickable: true }}
                                            >
                                                <SwiperSlide>{image(result.data.product.image_first.filename)}</SwiperSlide>
                                                <SwiperSlide>{image(result.data.product.image_second.filename)}</SwiperSlide>
                                                <SwiperSlide>{image(result.data.product.image_third.filename)}</SwiperSlide>
                                                <SwiperSlide>{image(result.data.product.image_fourth.filename)}</SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 ml-4">
                                        <h2 className="mb-4 text-sm title-font text-gray-500 tracking-widest">{result.data.product.category.name}</h2>
                                        <h1 className="mb-4 text-gray-900 text-3xl title-font font-medium">{result.data.product.name}</h1>
                                        <p className="mb-4 leading-relaxed">{result.data.product.information}</p>
                                        <div className="flex justify-around items-center">
                                            <div>
                                                <span className="title-font font-medium text-2xl text-gray-900">{result.data.product.price}</span><span className="text-sm text-gray-700">円(税込)</span>
                                            </div>
                                            <form method="post">
                                                <div className="flex items-center">
                                                    <span className="mr-3">数量</span>
                                                    <div className="relative">
                                                        <select name="quantity" value={val} onChange={(e) => handleChange(e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                            {quantity()}
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                            <button onClick={() => addCart(val, result.data.product.id)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">カートに入れる</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-400 my-8"></div>
                                <div className="mb-3 text-center">この商品を販売しているショップ</div>
                                <div className="mb-3 text-center">{result.data.product.shop.name}</div>
                                <div className="mb-3 text-center">
                                    <img className="mx-auto w-40 h-40 object-cover rounded-full" src={`../storage/shops/${result.data.product.shop.filename}`} />
                                </div>
                                <div className="mb-4 text-center">
                                    {result.data.product.shop.information}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}

export default Show;
