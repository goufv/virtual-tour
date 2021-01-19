// import React from "react"
// import { render } from "react-dom"

import('./index.scss')
import $ from "jquery"
import map from 'url:./map.svg'
import buildingIcon from 'url:./building.jpg'
import captions from 'url:./Building-E.vtt'

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
          <div class="backdrop"></div>
          <div class="video-wrap">
            <div class="controls">
              <div class="top">
                <div>
                  <div class="icon back">Close Video</div>
                  <div class="icon sound">Unmute</div>
                </div>
                <div class="caption-wrap">
                  <div class="captions"></div>
                </div>
              </div>
              <div class="meta-reaction">
                <div class="name"></div>
                <div class="icon emoji-homg">OMG</div>
                <div class="icon emoji-stars">Stars</div>
                <div class="icon emoji-smile">Smile</div>
              </div>
              <div class="progress"></div>
            </div>
            <video id="video" muted playsinline preload width="600" height="800">
              <source src="">
              <track label="English" kind="subtitles" mode="showing" srclang="en" src="${captions}" default>
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
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9148_720_audio.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-2',
    name: 'Building 2',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/F_building_1_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-3',
    name: 'Building 3',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-4',
    name: 'Building 4',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-5',
    name: 'Building 5',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-6',
    name: 'Building 6',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-7',
    name: 'Building 7',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-8',
    name: 'Building 8',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-9',
    name: 'Building 9',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9078_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-10',
    name: 'Building 10',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9076_720_smaller.mp4',
    icon: buildingIcon,
  },
  {
    id: 'building-11',
    name: 'Building 11',
    video: 'https://ddwhdx18r9qya.cloudfront.net/ufv/IMG_9077_720_smaller.mp4',
    icon: buildingIcon,
  },
]

const $videoPlayer = $('#video')
const $modal = $('.modal')

const tracks = $videoPlayer.get(0).textTracks[0]
tracks.mode = 'hidden'
const cues = tracks.cues
window.tylor = cues

const toggleVideo = ($item, location) => {
  if ($item.hasClass('active')) {
    return hideVideo()
  }
  else {
    return showVideo(location)
  }
}

const toggleSound = () => {
  $('.sound').toggleClass('active')
  $videoPlayer.get(0).muted = !$videoPlayer.get(0).muted;
}

const emote = (e) => {
  console.log($(e.target));
  $(e.target).addClass('emote');
  setTimeout(() => {
    $(e.target).removeClass('emote');
  }, 2000)
}

const toggleList = () => {
  $('.locations .list, .locations .toggle').toggleClass('active')
  return false;
}

// https://stackoverflow.com/a/45087610
var replaceText = function(text) {
  $('.captions').html(text);
};

var showText = function() {
  $('.captions').show();
};

var hideText = function() {
  $('.captions').hide();
};

var cueEnter = function() {
  replaceText(this.text);
  showText();
};

var cueExit = function() {
  hideText();
};

var videoLoaded = function(e) {
  for (var i in cues) {
    var cue = cues[i];
    if (typeof cue === 'object') {
      cue.onenter = cueEnter;
      cue.onexit = cueExit;
    }
  }
};

var playVideo = function(e) {
  console.log('playVideo')
  $videoPlayer.get(0).play();
};

const showVideo = (location) => {
  $('.building.active, .location.active').removeClass('active')
  $(`#${location.id}, #list-${location.id}`).addClass('visited active')
  $videoPlayer.find('source').attr('src', location.video)
  $modal.find('.name').html(location.name)
  // $videoPlayer.get(0).load()
  $videoPlayer.get(0).currentTime = 0
  $('.progress').css({ transform: 'scaleX(0.00001)' })
  $modal.addClass('active')
  // $videoPlayer.get(0).play()
  $videoPlayer.get(0).addEventListener('loadedmetadata', videoLoaded);
  $videoPlayer.get(0).addEventListener('load', playVideo);
  $videoPlayer.get(0).load();
  $videoPlayer.get(0).play()
  // $videoPlayer.get(0).textTracks[0].mode = 'showing'
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
  $modal.find('.back, .backdrop').on('touchstart', hideVideo)
  $modal.find('.back, .backdrop').on('click', hideVideo)
  $modal.find('.sound').on('touchstart', toggleSound)
  $modal.find('.sound').on('click', toggleSound)
  $modal.find('.meta-reaction .icon').on('touchstart', emote)
  $modal.find('.meta-reaction .icon').on('click', emote)

  $videoPlayer.on('timeupdate', () => {
    $('.progress').css({ transform: 'scaleX(' + ($videoPlayer.get(0).currentTime / $videoPlayer.get(0).duration) + ')' })
  })

  if (window.location.hash !== '') {
    const location = locations.find((l) => l.id === window.location.hash.replace('#', ''))
    if (location) {
      showVideo(location)
    }
  }
}

fetch(map)
  .then(data => data.text())
  .then(setup)



// render(<h1>Hello World<img src={map}/></h1>, document.getElementById("ufv-map-root"))