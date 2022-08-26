import React, { useState, useEffect } from 'react'
import CatParadise from '../../components/CatParadise/CatParadise'
import axios from 'axios'
import './Cards.scss'

const Loading = () => {
  return (
    <div className='loading--container'>
      <h1 className='loading'>Loading...</h1>
    </div>
  )
}

const Cards = () => {
  const [catUrl, setCatUrl] = useState([]);
  const [catInfo, setCatInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = 'https:/api.thecatapi.com';
  const api_key = '13f1a0be-f901-474d-96d5-2afb36e2fad8'

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const loadCatUrl = `${BASE_URL}/v1/images/search?&limit=10&breed_ids=beng&${api_key}`
    const updateCatInfo = `${BASE_URL}/v1/breeds`
    try {
      const response = await axios.get(loadCatUrl);
      const updateBreedInfo = await axios.get(updateCatInfo);

      const getImageUrl = await response.data;
      const getBreedInfo = await updateBreedInfo.data;

      setCatUrl(getImageUrl);
      setCatInfo(getBreedInfo);
      setLoading(true)

    } catch (error) {
      console.log(`We've had problems trying to fetch the data: ${error.message}`)
      setError(error)
    }
  }

  if(!loading) return <Loading/>
  if(error) return 'Something went wrong!'

  return (
    <>
      <div className='cat--cards'>
        <CatParadise/>
        <div className='fetch--container'>
          {catUrl.map((cat, index) => {
            const info = catInfo;
            return (
              <figure className="figure" key={cat.id}>
                <div className="image--container">
                  <img src={cat.url} alt={info[index].name} />
                </div>
                <figcaption className="fig--container">
                  <p className="description">
                    name:
                    <span>{info[index].name}</span>
                  </p>
                  <p className="description">
                    origin:
                    <span>{info[index].origin}</span>
                  </p>
                  <p className="description">
                    temperament:
                    <span>{info[index].temperament}</span>
                  </p>
                  <p className="description">
                    weight:
                    <span>{info[index].weight.metric}</span>
                  </p>
                  <p className="description">
                    life span:
                    <span>{info[index].life_span}</span>
                  </p>
                  <p className="description">
                    description:
                    <span>{info[index].description}</span>
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Cards