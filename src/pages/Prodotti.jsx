import { useEffect, useState } from "react"
import AppProdottiCards from '../components/AppProdottiCards'

const apiUrl = 'https://fakestoreapi.com'

function Prodotti() {

  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({ id: 0 })
  const [currentRating, setCurrentRating] = useState(0)


  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  function handleProduct(element) {
    setCurrentProduct(element)
    setCurrentRating((element.rating.rate * 100) / 5)


  }

  return (
    <main className="min-vh-100">
      <div className="container">
        <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 py-5">
          {
            products.map(element => (
              currentProduct.id === 0 && (
                <AppProdottiCards key={element.id}
                element={element} 
                handleProduct={handleProduct}
                />
              )
            ))
          }
        </section>
        {
          currentProduct.id !== 0 && (
            <section>
              <div className="col g-4">
                <div className="card bg-secondary-subtle position-relative h-100 w-100">
                  <button className="btn back btn-warning position-absolute rounded-5">INDIETRO</button>
                  <button className="btn position-absolute next z-1"><i className="bi bi-caret-right-fill"></i></button>
                  <button className="btn position-absolute prev z-1"><i className="bi bi-caret-left-fill"></i></button>
                  <figure className="card-body mb-0 d-flex gap-4 flex-wrap flex-lg-nowrap">
                    <div className="d-flex justify-content-center align-items-center w-100">
                      <img src={currentProduct.image} alt={currentProduct.title} className="img-fluid bg-light rounded-3 m-3 p-3" />
                    </div>
                    <div className="d-flex flex-column px-5 py-3 py-lg-5">
                      <h2 className="h3 text-start">{currentProduct.title}</h2>
                      <small className="mb-3">{currentProduct.category.toUpperCase()}</small>
                      <p>{currentProduct.description}</p>
                      <div className="d-flex justify-content-between align-items-end h-100">
                        <div className="text-muted">
                          <span>{currentProduct.rating.rate}
                            <span className="px-2 rating" style={{ '--percent': `${currentRating}%` }}>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </span>
                          </span>
                          <span>({currentProduct.rating.count} Valutazioni)</span>
                        </div>
                        <span className="px-5 fs-5">
                          € {currentProduct.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </section >
          )
        }
      </div >
    </main >
  )
}

export default Prodotti