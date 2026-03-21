import { useState } from "react"


function AppProdottoCard({ currentProduct, currentRating, handleBackButton, handleProductButton }) {
    
    return (

        <div className="col g-4 h-100">
            <div className="card bg-secondary-subtle position-relative h-100 shadow">
                <button className="btn back btn-warning position-absolute rounded-5" onClick={handleBackButton}>INDIETRO</button>
                <button className="btn position-absolute next z-1" onClick={() => handleProductButton(currentProduct.id + 1 )}><i className="bi bi-caret-right-fill"></i></button>
                <button className="btn position-absolute prev z-1" onClick={() => handleProductButton(currentProduct.id - 1 )}><i className="bi bi-caret-left-fill"></i></button>
                <figure className="card-body mb-0 d-flex flex-wrap align-items-center flex-lg-nowrap bg-light">
                    <div className="productCardImg d-flex justify-content-center mx-auto">
                        <img src={currentProduct.image} alt={currentProduct.title} className="img-fluid bg-light rounded-3 m-3 p-3" />
                    </div>
                    <div className="d-flex flex-column p-3 p-lg-5 productCardInfo">
                        <h2 className="h3 text-start">{currentProduct.title}</h2>
                        <small className="mb-4">{currentProduct.category.toUpperCase()}</small>
                        <p>{currentProduct.description}</p>
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
        </div>
    )
}

export default AppProdottoCard