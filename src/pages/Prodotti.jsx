import { useEffect, useState } from "react"

const apiUrl = 'https://fakestoreapi.com'

function Prodotti() {

  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({ id: 0 })


  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  function handleProduct(element) {
    setCurrentProduct(element)
    console.log(currentProduct)

  }

  return (
    <main className="min-vh-100">
      <div className="container">
        <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 py-5">
          {
            products.map(element => (
              currentProduct.id === 0 && (
                <div className="col g-4" key={element.id}>
                  <div className="card bg-secondary-subtle h-100" onClick={() => handleProduct(element)}>
                    <figure className="card-body d-flex flex-column justify-content-between align-items-center">
                      <div className="position-relative">
                        <img src={element.image} alt={element.title} className="img-fluid border bg-light rounded-3 p-5" />
                        <figcaption className="position-absolute translate-middle fw-bold text-muted">{element.rating.rate} / {element.rating.count}</figcaption>
                      </div>
                      <h2 className="h5 text-start w-100 h-100 my-3">{element.title}</h2>
                      <div className="d-flex justify-content-between w-100">
                        <span className="text-muted">
                          {element.category.toUpperCase()}
                        </span>
                        <span className="px-3 fs-5">
                          € {element.price.toFixed(2)}
                        </span>
                      </div>
                    </figure>
                  </div>
                </div>
              )
            ))
          }
        </section>
        {
          currentProduct.id !== 0 && (
            <section>
              <div className="col g-4">
                <div className="card bg-secondary-subtle h-100">
                  <figure className="card-body d-flex mb-0 row">
                    <div className="col col-4 position-relative">
                      <img src={currentProduct.image} alt={currentProduct.title} className="img-fluid border bg-light rounded-3 p-5" />
                    </div>
                    <div className="col col-8">
                      <h2 className="h5 text-start">{currentProduct.title}</h2>
                      <small>{currentProduct.category.toUpperCase()}</small>
                      <p>{currentProduct.description}</p>
                          {currentProduct.rating.rate} / {currentProduct.rating.count}
                      <div>
                        <span className="text-muted">
                        </span>
                        <span className="px-3 fs-5">
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