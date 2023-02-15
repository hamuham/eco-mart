import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
import Title from "../components/Title";
import NavLink from "../components/NavLink";
import SearchHeader from "../components/SearchHeader";
import useProductsRequest from "../hooks/useProductsRequest";
import MuiPagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
import React, { FC, useState, useEffect } from 'react';


const Home = () => {

    const [page, setPage] = useState(1)
    const [result, setResult] = useState(1)

    useEffect(() => {
        getPostsData();
    }, [])

    const getPostsData = () => {
        axios
            .get(`/getProduct/?page=${page}`)
            .then(response => {
                setResult(response);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    const pageChange = (e) => {
        setPage(e);
        getPostsData();
    }

    const Pagination = withStyles({
            root: {
            display: 'inline-block',
        },
    })(MuiPagination);

    return (
        <>
            <NavLink />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {!result.data ? (
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Title txt="Loading..." size={25} transform="uppercase" />
                        </div>
                    ) : (
                        <SearchHeader setResult={setResult} data={result.data.categories} />
                    )}
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
                                <div className="flex flex-wrap">
                                    {result.data && (
                                        <div className={styles.title}>
                                            <Title color="#171717" size={22} transform="uppercase" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-wrap">
                                    {result.data ? (
                                        result.data.products.data.map((product, key) => <Card product={product} key={key} />)
                                    ) : (
                                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                            <Title txt={result.error} size={25} transform="uppercase" />
                                        </div>
                                    )}
                                </div>
                                <div style={{textAlign: "center"}}>
                                <Pagination
                                    count={result.data.products.last_page}
                                    color="primary"
                                    onChange={(e, page) => pageChange(page)}
                                    page={page}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
