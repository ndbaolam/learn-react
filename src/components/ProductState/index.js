import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Product.scss';

export default function ProductState() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = () => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProduct(data.products);
        setLoading(false);
      });
    }

    setTimeout(() => {
      fetchApi();
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="product__list">
            {[...Array(6)].map((_, index) => (
              <div className="product__item" key={index}>
                <Skeleton className="product__img"/>
                <Skeleton className="product__title"/>
              </div>
            ))}
        </div>
        </>
      ): (
        <div className="product__list">
          {product.map(item => (
            <div className="product__item" key={item.id}>
              <img className="product__img" src={item.thumbnail} alt={item.title}/>
              <h3 className="product__title">{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  )
}