import { useState } from "react"


function AppProdottoCard({ products, currentProduct, setCurrentProduct }) {

    const [currentRating, setCurrentRating] = useState((currentProduct.rating.rate * 100) / 5)

    function handleBackButton() {
        setCurrentProduct({ id: 0 })
    }

    function handleProductButton(i, currentProduct) {
        setCurrentProduct(products.find(element => element.id === i))
        const currentProductRating = products.find(element => element.id === i)
        setCurrentRating((currentProductRating.rating.rate * 100) / 5)
        console.log(currentProduct)
    }


    return (

        <div className="col g-4 h-100">
            <div className="card bg-secondary-subtle position-relative shadow">
                <button className="btn back btn-warning position-absolute rounded-5"
                    onClick={handleBackButton}>INDIETRO</button>
                <button className="btn btn-outline-light bg-transparent position-absolute next z-1 border-0"
                    onClick={() => handleProductButton(currentProduct.id + 1, currentProduct)}
                    disabled={currentProduct.id >= products.length}
                ><i className="bi bi-caret-right-fill"></i></button>
                <button className="btn btn-outline-light bg-transparent position-absolute prev z-1 border-0"
                    onClick={() => handleProductButton(currentProduct.id - 1, currentProduct)}
                    disabled={currentProduct.id === 1}
                ><i className="bi bi-caret-left-fill"></i></button>
                <figure className="card-body mb-0 d-flex flex-wrap align-items-center flex-lg-nowrap bg-light h-100">
                    <div className="productCardImg d-flex justify-content-center mx-auto py-3">
                        <img src={currentProduct.image} alt={currentProduct.title} className="img-fluid bg-light rounded-3 px-5" />
                    </div>
                    <div className="d-flex flex-column p-3 p-lg-5 productCardInfo">
                        <h2 className="h5 text-start">{currentProduct.title}</h2>
                        <small className="mb-4">{currentProduct.category.toUpperCase()}</small>
                        <p className="description overflow-y-auto">{currentProduct.description}</p>
                        <div className="d-flex justify-content-between align-items-end flex-wrap h-100">
                            <div className="text-muted my-4">
                                <span className="d-flex justify-content-between">{currentProduct.rating.rate}
                                    <span className="mx-2 rating" style={{ '--percent': `${currentRating}%` }}>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                </span>
                                <span className="">({currentProduct.rating.count} Valutazioni)</span>
                            </div>
                            <span className="me-5 mb-5 fs-5">
                                € {currentProduct.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </figure>
            </div>
        </div >
    )
}

export default AppProdottoCard