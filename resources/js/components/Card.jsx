import styles from "../styles/Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    return (
        <div className="w-full lg:w-1/4 p-2 md:p-4">
            <Link to={`/show/${product.id}`}>
                <div className="border rounded-md p-2 md:p-4">
                    <img src={`storage/products/${product.filename}`}/>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ product.category }</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{ product.name }</h2>
                        <p className="mt-1">{ product.price }<span className="text-sm text-gray-700">円(税込)</span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
