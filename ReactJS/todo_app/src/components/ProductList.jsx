import { FaShoppingCart, FaStar } from "react-icons/fa"

const ProductList = ({ product }) => {
    const discount = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2)
    return <div style={{width: "16rem"}} className="shadow-lg text-center p-2">
        <div className="d-flex justify-content-center">
            <img src={product.images[0]} className="w-100" alt={product.title} style={{objectFit: "contain", height: "150px"}}/>
        </div>
        <div className="">
            <h5 className="text-truncate">{product.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-1">
                    <s className="text-secondary">${product.price}</s>
                    <div className="text-success">${discount}</div>
                </div>
                <div className="d-flex align-items-center gap-1">
                    <FaStar /> <div>{product.rating}</div>
                </div>
            </div>
            <button className="d-flex align-items-center gap-1 w-100 btn btn-success mt-2 justify-content-center"><FaShoppingCart /> Add to Cart</button>
        </div>
    </div>
}

export default ProductList