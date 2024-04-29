import { useState, useEffect } from "react";
import './Product.scss'

export default function UseEffect(){
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);

  useEffect(() => {
      fetch(`https://dummyjson.com/products?skip=${pageActive*limit}&limit=${limit}`)
       .then(res => res.json())
       .then(data => {
          setData(data);
          setQuantityPage(Math.ceil(data.total / limit));
      });
    }, [pageActive]);

  const handlClickPagi = (page) => {
    console.log(page);
    setPageActive(page);
  }

  console.log(quantityPage);

  return(
    <>
      <div className="product__list">
        {data.products && data.products.map(item => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.images[0]} alt={item.title}/>
            </div>
            <h3 className="product__title">
              {item.title}
            </h3>
            <div className="product__price">
              {item.price}$
            </div>
          </div>
        ))}
      </div>

      <ul className="pagination">
        {[...Array(quantityPage)].map((_, index) => (
          <li key={index} 
            onClick={() => handlClickPagi(index)}
            className={"pagination__item" + (pageActive === index ? "--active" : "")}
          >
            {index + 1}
          </li>
        ))}       
      </ul>
    </>
  );
}