import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState<{name: string, price: number}[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

    return (
    <>
      <div className="App">
        <h1>Restore Client</h1>
      </div>
      <ul>
        {products.map((item, index) =>
          <li key={index}>{item.name} - ${item.price}</li>)}
      </ul>
    </>
  )
}

export default App
