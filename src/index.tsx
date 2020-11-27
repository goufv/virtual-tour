// import React from "react"
// import { render } from "react-dom"

// import('./index.scss')
import $ from "jquery"
import map from 'url:./map.svg'
import buildingIcon from 'url:./building.jpg'

document.write(`
  <div id="ufv-map-root">
    <div class="stage">
      <div class="locations">
        <div class="map"></div>
        <div class="list"></div>
        <div class="toggle">Toggle</div>
      </div>
      <div class="player">
        <div class="instructions">
          <h1>Choose a location to learn more</h1>
        </div>
        <div class="modal">
          <div class="video-wrap">
            <div class="name"></div>
            <video id="video" playsinline preload width="600" height="800">
              <source src="">
            </video>
          </div>
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
    video: 'xhttps://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-2',
    name: 'Building 2',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-3',
    name: 'Building 3',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-4',
    name: 'Building 4',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-5',
    name: 'Building 5',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-6',
    name: 'Building 6',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-7',
    name: 'Building 7',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-8',
    name: 'Building 8',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-9',
    name: 'Building 9',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-10',
    name: 'Building 10',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-11',
    name: 'Building 11',
    // video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720.mp4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
    icon: buildingIcon,
  },
]

const $videoPlayer = $('#video')
const $modal = $('.modal')

const toggleVideo = ($item, location) => {
  if ($item.hasClass('active')) {
    return hideVideo()
  }
  else {
    return showVideo(location)
  }
}

const toggleList = () => {
  $('.locations .list, .locations .toggle').toggleClass('active')
  return false;
}

const showVideo = (location) => {
  $('.building.active, .location.active').removeClass('active')
  $(`#${location.id}, #list-${location.id}`).addClass('visited active')
  $videoPlayer.find('source').attr('src', location.video)
  $modal.find('.name').html(location.name)
  $videoPlayer.get(0).load()
  $videoPlayer.get(0).currentTime = 0
  $modal.addClass('active')
  $videoPlayer.get(0).play()
  return false
}

const hideVideo = () => {
  $videoPlayer.get(0).pause()
  $modal.removeClass('active')
  $('.building.active, .location.active').removeClass('active')
  return false
}

const setup = (svgData) => {
  $("#ufv-map-root .map").append(svgData)

  locations.forEach((location) => {
    const $item = $('#' + location.id)
    $item.on('touchstart', (e) => { return toggleVideo($item, location) })
    $item.on('click', (e) => { return toggleVideo($item, location) })

    const $el = $(`
      <div id="list-${location.id}" class="location">
        <img class="icon" src="${location.icon}">
        <h1>${location.name}</h1>
      </div>
    `)
    $el.on('click', (e) => { return toggleVideo($item, location) })
    $el.on('touchstart', (e) => { return toggleVideo($item, location) })
    $(".locations .list").append($el)
  })
  $('.locations .toggle').on('touchstart', toggleList)
  $('.locations .toggle').on('click', toggleList)
  $modal.on('touchstart', hideVideo)
  $modal.on('click', hideVideo)
}

fetch(map)
  .then(data => data.text())
  .then(setup)



// render(<h1>Hello World<img src={map}/></h1>, document.getElementById("ufv-map-root"))