import { useState, useEffect, useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Card from "../../Components/Card"
import Modal from "../../Components/Modal"
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext);

  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (<Card key={item.id} data={item} />))
        }
      </div>
      {context.openModal && (
        <Modal>
          <ProductDetail />
        </Modal>
      )}
      
    </div>
  )
}

export default Home