import ReactDOM from 'react-dom';
import Title from "../components/Title";
import React, { useState, useEffect } from 'react';
import useProductsRequest from "../hooks/useProductsRequest";
import NavLink from "../components/NavLink";
import Header from "../components/Header";
import CartBox from "../components/Cart";

const Cart = () => {

    const result = useProductsRequest("/getCart");
    const checkout = () => {
        location = 'cart/checkout';
    }

    return (
        <>
            <NavLink />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <Header page="CART"/>
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
                                    {result.data.products.map((product, key) => <CartBox product={product} key={key} />)}
                                <div className="my-2">
                                    小計: {result.data.totalPrice}<span className="text-sm text-gray-700">円(税込)</span>
                                </div>
                                <div>
                                    <button onClick={() => checkout()} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">購入する</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
