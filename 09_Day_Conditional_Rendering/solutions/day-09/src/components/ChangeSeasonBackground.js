import React, { useEffect, useState } from 'react'

// Season: Autumn, Winter, Spring, Summer
const ChangeSeasonBackground = ({imageInfo, showDate, now}) => {
  const [currentTime, setCurrentTime] = useState(showDate(now))
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(showDate(new Date()))
    }, 1000)
  }, [currentTime])

  const onHandleUpdateImage = () => {
    let output = '';
    let isTrue = true;
    const currentTime = new Date().getHours()
    switch(isTrue){
      case currentTime >= 0 && currentTime < 12:
        output = imageInfo.autumn;
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.spring;
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.winter;
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.summer;
        break
    }

    return output
  }

  const updateSeasonName = () => {
    let output = '';
    let isTrue = true;
    const currentTime = new Date().getHours()
    switch(isTrue){
      case currentTime >= 0 && currentTime < 12:
        output = imageInfo.seasonName[0];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.seasonName[1];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.seasonName[2];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.seasonName[3];
        break
    }

    return output
  }

  const updateUrl = () => {
    let output = '';
    let isTrue = true;
    const currentTime = new Date().getHours()
    switch(isTrue){
      case currentTime >= 0 && currentTime < 12:
        output = imageInfo.sourceUrls[0];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.sourceUrls[1];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.sourceUrls[2];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.sourceUrls[3];
        break
    }

    return output
  }

  const updateImageOwner = () => {
    let output = '';
    let isTrue = true;
    const currentTime = new Date().getHours()
    switch(isTrue){
      case currentTime >= 0 && currentTime < 12:
        output = imageInfo.name[0];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.name[1];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.name[2];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.name[3];
        break
    }

    return output
  }

  const updateUnsplashUrl = () => {
    let output = '';
    let isTrue = true;
    const currentTime = new Date().getHours()
    switch(isTrue){
      case currentTime >= 0 && currentTime < 12:
        output = imageInfo.unsplashUrls[0];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.unsplashUrls[1];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.unsplashUrls[2];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.unsplashUrls[3];
        break
    }

    return output
  }

  return(
    <header className='header'>
      <h1 className='heading'>{updateSeasonName()}</h1>
      <figure className='figure'>
        <img src={onHandleUpdateImage()} loading='lazy' alt={updateSeasonName()}/>
        <figcaption className='figcaption'>
          <p className='info'>
            {updateSeasonName()}
          </p>
          <p>photo by <a href={updateUrl()}>
            {updateImageOwner()}
            </a> on <a href={updateUnsplashUrl()}>{imageInfo.title}</a></p>
          <small>{currentTime}</small>
        </figcaption>
      </figure>
    </header>
  )
}

export default ChangeSeasonBackground