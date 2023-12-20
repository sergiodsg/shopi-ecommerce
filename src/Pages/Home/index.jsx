import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card"


function Home() {
  const context = useContext(ShoppingCartContext);
  
  return (
    <div>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          context.items?.map(item => (<Card key={item.id} data={item} />))
        }
      </div>
    </div>
  )
}

export default Home