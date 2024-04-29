import { useState, useEffect } from 'react';
import './Tabs.scss';

export default function Tabs() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [tabActive, setTabActive] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/${tabActive}`)
      .then(res => res.json())
      .then(data => {
        setData(data[tabActive]);
        console.log(data[tabActive]);
      });
  }, [tabActive]);

  const handleChangeTab = (tab) => {
    setActive(!tabActive);
    tab !== tabActive && setActive(true);
    tab !== tabActive ? setTabActive(tab) : setTabActive("");
  }

  return (
    <>
      <div className="tabs">
        <div className="tabs__item" onClick={() => handleChangeTab('products')}>
          Products
        </div>
        <div className="tabs__item" onClick={() => handleChangeTab('users')}>
          Users
        </div>
        <div className="tabs__item" onClick={() => handleChangeTab('posts')}>
          Posts
        </div>
      </div>

      <div className={"tabs__content" + (active ? "--active" : "")}>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.title || `${item.firstName} ${item.lastName}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}