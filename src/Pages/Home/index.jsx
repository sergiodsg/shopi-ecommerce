import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="flex items-center justify-center m-4">
        <h1 className="font-medium text-2xl">Exclusive Products</h1>
      </div>
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search a product"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(e) => context.setSearchByTitle(e.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.searchByTitle?.length > 0
          ? (context.filteredItems?.length > 0 ? (context.filteredItems?.map((item) => (
              <Card key={item.id} data={item} />
            ))) : <div className="w-full text-center text-xl font-medium">No results found :(</div>) 
          : context.items?.map((item) => <Card key={item.id} data={item} />) }
      </div>
    </div>
  );
}

export default Home;
