import { useEffect, useState } from "react"

export default function ProductState() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = () => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProduct(data.products)
      });
    }

    setTimeout(() => {
      setLoading(false);
      fetchApi();
    }, 3000)
  }, []);

  return (
    <>
      {!loading ? (
        <ul>
          {product.map(item => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      ): (
        <> Waiting ... </>
      )}
    </>
  )
}