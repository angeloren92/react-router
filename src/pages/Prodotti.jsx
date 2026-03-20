import { useEffect, useState } from "react"

const apiUrl = 'https://fakestoreapi.com'

function Prodotti() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts([data])
      })
  }, [])

  console.log(products)

  return (
    <main>
      <div className="container">
        <div className="row">


        </div>
      </div>
    </main>
  )
}

export default Prodotti