import { useEffect, useState } from "react"
import AppProdottiCards from '../components/AppProdottiCards'
import AppProdottoCard from "../../AppProdottoCard"

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

  function handleBackButton() {
    setCurrentProduct({ id: 0 })
  }

  function handleProductButton(i) {
    setCurrentProduct(products.find(element => {
      return element.id === i ? { element } : 0;
    })
    )
  }

  return (
    <main className="min-vh-100">
      <div className="container">
        {
          currentProduct.id === 0 && (
            <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 py-5">
              {
                products.map(element => (
                  <AppProdottiCards key={element.id}
                    element={element}
                    handleProduct={handleProduct}
                  />
                ))
              }
            </section>
          )
        }
        {
          currentProduct.id !== 0 && (
            <section className="row singleProductSection">
              <AppProdottoCard
                currentProduct={currentProduct}
                currentRating={currentRating}
                handleBackButton={handleBackButton}
                handleProductButton={handleProductButton}
              />
            </section>
          )
        }
      </div >
    </main >
  )
}

export default Prodotti