// import React from "react"
// import { render } from "react-dom"

import('./index.scss')
import map from 'url:./map.svg'

document.write(`
  <div id="ufv-map-root">
    <div class="stage">
      <div class="locations">
        <div class="map"></div>
        <div class="list"></div>
      </div>
      <div class="player">
        <div class="instructions">
          <h1>Choose a location</h1>
        </div>
        <div class="modal">
          <div class="name"></div>
          <video id="video" playsinline preload>
            <source src="">
          </video>
        </div>
      </div>
    </div>
  </div>`
)

const locations = [
  {
    id: 'building-1',
    name: 'Building 1',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
  },
  {
    id: 'building-2',
    name: 'Building 2',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
  },
  {
    id: 'building-3',
    name: 'Building 3',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
  },
  {
    id: 'building-4',
    name: 'Building 4',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
  },
  {
    id: 'building-5',
    name: 'Building 5',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
  },
  {
    id: 'building-6',
    name: 'Building 6',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
  },
  {
    id: 'building-7',
    name: 'Building 7',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
  },
  {
    id: 'building-8',
    name: 'Building 8',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
  },
  {
    id: 'building-9',
    name: 'Building 9',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
  },
  {
    id: 'building-10',
    name: 'Building 10',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
  },
  {
    id: 'building-11',
    name: 'Building 11',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
  },
]

const $videoPlayer = document.querySelector('#video')
const $modal = document.querySelector('.modal')

const toggleVideo = (e, item, location) => {
  if (item.classList.contains('active')) {
    console.log('hideing')
    hideVideo(e);
  }
  else {
    console.log('showing')
    showVideo(e, item, location);
  }
}

const showVideo = (e, item, location) => {
  e.preventDefault()
  const activeLocation = document.querySelector('.building.active')
  if (activeLocation) {
    activeLocation.classList.remove('active')
  }
  item.classList.add('visited')
  item.classList.add('active')
  const source = $videoPlayer.querySelector('source')
  source.setAttribute('src', location.video)
  $modal.querySelector('.name').innerHTML = location.name
  $videoPlayer.load();
  $videoPlayer.currentTime = 0
  $modal.classList.add('active')
  $videoPlayer.play()
}

const hideVideo = (e) => {
  e.preventDefault()
  $videoPlayer.pause()
  $modal.classList.remove('active')
  const activeLocation = document.querySelector('.building.active')
  if (activeLocation) {
    activeLocation.classList.remove('active')
  }
}

const setup = (svgData) => {
  document.querySelector("#ufv-map-root .map").insertAdjacentHTML('beforeend', svgData);

  locations.forEach((location) => {
    console.log(location)
    const item = document.getElementById(location.id)
    item.addEventListener('click', (e) => { toggleVideo(e, item, location) })
    item.addEventListener('touchstart', (e) => { toggleVideo(e, item, location) })
  });
  // [].forEach.call(document.querySelectorAll('.building'), (item) => {
  // });
  $modal.addEventListener('click', hideVideo)
  $modal.addEventListener('touchstart', hideVideo)

}

fetch(map)
  .then(data => data.text())
  .then(setup)



// render(<h1>Hello World<img src={map}/></h1>, document.getElementById("ufv-map-root"))