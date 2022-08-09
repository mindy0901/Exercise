import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
      const [datas, setDatas] = useState([]);
      const [query, setQuery] = useState("");

      useEffect(() => {
            const getDatas = async () => {
                  try {
                        const res = await axios.get("https://restcountries.com/v3.1/all")
                        setDatas(res.data)
                  } catch (error) { }
            }
            getDatas()
      }, []);

      const handleSearch = (e) => {
            setQuery(e.target.value)
      }

      const handleFix = (x) => {
            console.log(Object.values(x))
      }

      return (
            <div className="App">

                  <div className="header">
                        <h1>World Country Data</h1>
                        <h2>{`Currently, we have ${datas.length} countries`}</h2>
                  </div>

                  <div className="container">
                        <div className="container__search">
                              <input type="search" value={query} onChange={(e) => handleSearch(e)} placeholder="name, capital, language" />
                        </div>
                        <div className="container__items">
                              {(query
                                    ? datas.filter(data =>
                                          Object.values(data).some(value =>
                                                String(value).toLowerCase().includes(query.toLowerCase())))
                                    : datas)
                                    .map((data, index) => (
                                          <div className="container__item" key={index}>
                                                <div className="container__img">
                                                      <img src={data.flags.png} alt="" />
                                                </div>
                                                <div className="container__details">
                                                      <h3>{data.name.common}</h3>
                                                      <div className="container__box">
                                                            <span>{`Capital: ${data.capital}`}</span>
                                                            <div className='languages__container'>
                                                                  <span>Languages: </span>
                                                                  {data?.languages && Object.values(data?.languages).map((e, i) => (
                                                                        <span key={i}>{e}</span>
                                                                  ))}
                                                            </div>
                                                            <span>{`Population: ${data.population}`}</span>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                        </div>
                  </div>
            </div>
      );
}

export default App;
