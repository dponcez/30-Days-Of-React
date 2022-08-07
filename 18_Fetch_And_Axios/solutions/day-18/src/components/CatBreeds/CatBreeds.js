import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadCatInfo from './LoadCatInfo'
import '../../styles/CatBreeds.scss'

const CatBreeds = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catImageUrl, setCatImageUrl] = useState([]);
  const [catInfo, setCatInfo] = useState([])

  const api_key = "13f1a0be-f901-474d-96d5-2afb36e2fad8"
  const BASE_URL = "https://api.thecatapi.com";
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const breedUrl = `${BASE_URL}/v1/breeds`
    const imageUrl = `${BASE_URL}/v1/images/search?breed_ids=beng&api_key=${api_key}`

    try {
      const searchByBreed = await axios.get(breedUrl);
      const updateImageUrl = await axios.get(imageUrl);

      const getCatBreed = await searchByBreed.data;
      const getCatImageUrl = await updateImageUrl.data;

      setCatInfo(getCatBreed)
      setCatImageUrl(getCatImageUrl)
      
      setLoading(true)
    } catch (error) {
      setError(error);
      console.log(`We have problems trying to fetch the data: ${error.message}`)
    }

    setLoading(true)
  }

  if(!loading)  return 'Loading...'
  if(error) return 'Something went wrong!'

  return (
    <div className='container'>
      <h1 className='heading'>metric weight and life span of cats</h1>
      <div className='fetch--container'>
        {catInfo.map((cat) => {
          cat.url = catImageUrl[0].url;
          return <LoadCatInfo cat={cat} key={cat.id}/>
        })}
      </div>
    </div>
  )
}

export default CatBreeds