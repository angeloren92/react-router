import { useEffect, useState } from "react"

const apiUrl = 'https://fakestoreapi.com'

function Prodotti() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  console.log(products)

  return (
    <main className=" bg-dark  min-vh-100">
      <div className="container">
        <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
          {
            products.map(({ id, title, category, description, image, price, rating }) => (
              <div className="col g-4" key={id}>
                <div className="card bg-secondary-subtle h-100">
                  <figure className="card-body d-flex flex-column justify-content-between align-items-center">
                    <div className="position-relative">
                      <img src={image} alt="{title}" className="img-fluid border bg-light rounded-3 p-5" />
                      <figcaption className="position-absolute translate-middle fw-bold text-muted">{rating.rate} / {rating.count}</figcaption>
                    </div>
                    <h2 className="h5 text-start w-100 h-100 my-3">{title}</h2>
                    <div className="d-flex justify-content-between w-100">
                      <span className="text-muted">
                        {category.toUpperCase()}
                      </span>
                      <span className="px-3 fs-5">
                        € {price.toFixed(2)}
                      </span>
                    </div>

                  </figure>
                </div>
              </div>
            ))
          }

        </section>
      </div>
    </main>
  )
}

export default Prodotti