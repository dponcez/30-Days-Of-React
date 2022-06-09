import React, { Component } from 'react'
import ChangeSeasonBackground from './components/ChangeSeasonBackground'
import ChangeTimeBackground from './components/ChangeTimeBackground'
import LoadFetchData from './components/LoadFetchData'
import autumn from './images/autumn.jpg'
import spring from './images/spring.jpg'
import summer from './images/summer.jpg'
import winter from './images/winter.jpg'
import morning from './images/morning.jpg'
import noon from './images/noon.jpg'
import evening from './images/evening.jpg'
import night from './images/night.jpg'

import './styles/Container.scss'
class App extends Component {
  constructor(props){
    super(props)
    this.showDate = this.showDate.bind(this)
  }

  showDate(time){
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const day = days[time.getDay()];
    const date = time.getDate();
    const hour = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    const year = time.getFullYear();

    return `${day} ${date} / ${month} / ${year} - ${hour}:${mins}:${secs}`
  }
  
  render(){
    const imageInfo ={
      autumn: autumn,
      sprint: spring,
      winter: winter,
      summer: summer,
      morning: morning,
      noon: noon,
      evening: evening,
      night: night,
      seasonName: ['autumn', 'spring', 'winter', 'summer', 'morning', 'noon', 'evening', 'night'],
      name: [
        'Johannes Plenio', 
        'Arno Smit', 
        'Timothy Eberly', 
        'Mateo Giraud',
        'Emma Simpson',
        'Lora P',
        'Tadej Skofic',
        ' Nathan Anderson'
      ],
      sourceUrls: [
        'https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/@_entreprenerd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/@timothyeberly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/@mateo_giraud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/@esdesignisms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/@lorapaskaleva?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/es/@tadej?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/@nathananderson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      ],
      title: 'unsplash',
      unsplashUrls: [
        'https://unsplash.com/s/photos/autumn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/s/photos/spring?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/s/photos/winter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/s/photos/summer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/s/photos/morning?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/s/photo/noon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/s/photo/evening?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        'https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      ]
    }

    const now = new Date()

    return (
      <div className='App'>
          {/* <ChangeTimeBackground
            now={now}
            showDate={this.showDate}
            imageInfo={imageInfo}
          />
          <ChangeSeasonBackground
            now={now}
            showDate={this.showDate}
            imageInfo={imageInfo}
          /> */}
          <LoadFetchData/>
      </div>
    )
  }
}

export default App