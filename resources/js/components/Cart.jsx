import { Link } from "react-router-dom";

const CartBox = ({ product }) => {

    const deleteProduct = async (e) => {
        await axios
            .get(`deleteCart/${e}`)
        .then((res) => {
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="md:flex md:items-center mb-2">
        <div className="md:w-3/12">
            <img src={`storage/products/${product.image_first.filename}`} />
        </div>
        <div className="md:w-4/12 md:ml-2">{product.name}</div>
        <div className="md:w-3/12 flex justify-around">
            <div>
                {product.pivot.quantity}個
            </div>
            <div>
                {product.price.toLocaleString()}<span className="text-sm text-gray-700">円(税込)</span>
            </div>
        </div>
        <div className="md:w-2/12">
            <button  href="/cart" key={product.id} onClick={() => deleteProduct(product.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    </div>
    );
};

export default CartBox;
