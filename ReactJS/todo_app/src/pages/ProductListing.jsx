import ProductList from "../components/ProductList"
import { products } from "../constants/products"

const ProductListing = () => {
    return <div>
        <h1 className="text-center">Product Listing</h1>
        <div className="d-flex gap-3 mt-4 flex-wrap justify-content-center">
            {
                products.map((product) => {
                    return <ProductList product={product} key={product.id}/>
                })
            }
        </div>
    </div>
}

export default ProductListing