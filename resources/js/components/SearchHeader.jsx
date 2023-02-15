import { SORT_ORDER } from "../utility/Constants";
import { NUMBER_PRODUCT } from "../utility/Constants";
import { useState } from "react";

const SearchHeader = ({ setResult, data }) => {

    const [values, setValues] = useState({
        selectCategory: '',
        searchKeyword: '',
        selectSort: '',
        selectPagination: '',
    });

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    }

    const categoryMenu = (options) => {
        const option = [];
        const Category = [];
        option.push(<option key="all" value="0">全て</option>)
        options.map((v, n) => {
            Category[v.name] = [<optgroup key={v.id} label={v.name}></optgroup>];
            v.secondary.map((c) => {
                Category[v.name].push(<option key={c.name} value={c.id}>  {c.name}</option>)
            })
            option.push(Category[v.name]);
        });
        return option;
    }



    const search = () => {
        axios
            .get(`/getProduct/?category=${ values.selectCategory }&keyword=${ values.searchKeyword }&sort=${ values.selectSort }&pagination=${ values.selectPagination }`)
            .then(response => {
                setResult(response);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">商品一覧</h2>
            <div className="lg:flex lg:justify-around">
                <div className="lg:flex items-center">
                    <select name="selectCategory" onChange={(e) => handleChange(e)} key="category" className="mb-2 lg:mb-0 lg:mr-2">
                            {categoryMenu(data)}
                    </select>
                    <div className="flex space-x-2 items-center">
                        <div><input name="searchKeyword" onChange={(e) => handleChange(e)} className="border border-gray-500 py-2" placeholder="キーワードを入力" /></div>
                        <div><button onClick={() => search()} className="ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">検索する</button></div>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <span className="text-sm">表示順</span><br/>
                        <select name="selectSort" onChange={(e) => handleChange(e)} key="sort" className="mb-2 lg:mb-0 lg:mr-2">
                            {SORT_ORDER.map((option, n) => {
                                return (<option key={option} value={n}>{option}</option>)
                            })}
                        </select>
                    </div>
                    <div>
                        <span className="text-sm">表示件数</span><br />
                        <select name="selectPagination" onChange={(e) => handleChange(e)} key="number" className="mb-2 lg:mb-0 lg:mr-2">
                            {NUMBER_PRODUCT.map((option, n) => {
                                return (<option key={option} value={option}>{option}件</option>)
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchHeader;
