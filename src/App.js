import React from 'react'

function App() {

  const [products, setProducts] = React.useState([]);

  React.useEffect(()=>{

    const fetchAllProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }

    fetchAllProducts();

  },[])

  return (
    <>
      {products?.map((product) => {
        const string = JSON.stringify(product);
        console.log(product)
        return(
          <h4 key={product.id}>{string}</h4>
        )
      })}
    </>
  )
}

export default App