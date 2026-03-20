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
    <main>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {
            products.map(({ id, title, category, description, image, price, rating }) => (
          <div className="col g-4" key={id}>
            <div className="card h-100">
              <h2 className="h3">{title}</h2>
              <img src={image} alt="" />
            </div>
          </div>
          ))
          }

        </div>
      </div>
    </main>
  )
}

export default Prodotti