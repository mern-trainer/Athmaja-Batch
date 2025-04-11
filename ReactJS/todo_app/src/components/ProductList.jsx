const ProductList = ({ product }) => {
    return <div className="bg-dark">
        <div className="" style={{width: "16rem"}}>
            <img src={product.thumbnail} alt={product.title} className="q-100 h-100" style={{aspectRatio: "1/1", objectFit: "cover"}}/>
        </div>
        <h3>{product.title}</h3>
    </div>
}

export default ProductList