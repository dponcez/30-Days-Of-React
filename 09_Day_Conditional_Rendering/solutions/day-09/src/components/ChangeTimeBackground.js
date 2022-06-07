import React, { useEffect, useState } from 'react';

// Time: Morining, Noon, Evening, Night
const ChangeTimeBackground = ({imageInfo, showDate, now}) => {
  const [currentTime, setCurrentTime] = useState(showDate(now));
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
        output = imageInfo.morning;
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.noon;
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.evening;
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.night;
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
        output = imageInfo.seasonName[4];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.seasonName[5];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.seasonName[6];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.seasonName[7];
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
        output = imageInfo.sourceUrls[4];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.sourceUrls[5];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.sourceUrls[6];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.sourceUrls[7];
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
        output = imageInfo.name[4];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.name[5];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.name[6];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.name[7];
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
        output = imageInfo.unsplashUrls[4];
        break;
      case currentTime >= 12 && currentTime < 18:
        output = imageInfo.unsplashUrls[5];
        break;
      case currentTime >= 18 && currentTime < 21:
        output = imageInfo.unsplashUrls[6];
        break;
      case currentTime >= 21 && currentTime < 24:
        output = imageInfo.unsplashUrls[7];
        break
    }

    return output
  }

  return (
    <main className='main'>
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
    </main>
  )
}

export default ChangeTimeBackground