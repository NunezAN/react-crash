function Product(props){
    return(
    <div>
        <h1>{props.product.name}</h1>
        <h3>${props.product.price}</h3>
        <p>{props.product.description}</p>
    </div>
    )
}

export default Product;