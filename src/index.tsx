// import React from "react"
// import { render } from "react-dom"

import('./index.scss')
import $ from "jquery"
import map from 'url:./map-final-01.svg'
import buildingIcon from 'url:./building.jpg'
// import captions from 'url:../video-cc/captions_A_Abbey.srt'

import thumbnail_Building_A from 'url:./buildings/buildings_Building_A.svg'
import thumbnail_Building_A_hover from 'url:./buildings/buildings_hover_Building_A.svg'
import thumbnail_Building_B from 'url:./buildings/buildings_Building_B.svg'
import thumbnail_Building_B_hover from 'url:./buildings/buildings_hover_Building_B.svg'
import thumbnail_Baker_House from 'url:./buildings/buildings_Baker_House.svg'
import thumbnail_Baker_House_hover from 'url:./buildings/buildings_hover_Baker_House.svg'
import thumbnail_Building_E from 'url:./buildings/buildings_Building_E.svg'
import thumbnail_Building_E_hover from 'url:./buildings/buildings_hover_Building_E.svg'
import thumbnail_Building_G from 'url:./buildings/buildings_Building_G.svg'
import thumbnail_Building_G_hover from 'url:./buildings/buildings_hover_Building_G.svg'
import thumbnail_Indigenous_Gathering from 'url:./buildings/buildings_Indigenous_Gathering.svg'
import thumbnail_Indigenous_Gathering_hover from 'url:./buildings/buildings_hover_Indigenous_Gathering.svg'
import thumbnail_Building_S from 'url:./buildings/buildings_Building_S.svg'
import thumbnail_Building_S_hover from 'url:./buildings/buildings_hover_Building_S.svg'
import thumbnail_Chilliwack_TTC from 'url:./buildings/buildings_Chilliwack-TTC.svg'
import thumbnail_Chilliwack_TTC_hover from 'url:./buildings/buildings_hover_Chilliwack-TTC.svg'
import thumbnail_Chilliwack_CEP_A from 'url:./buildings/buildings_Chilliwack-CEP-A.svg'
import thumbnail_Chilliwack_CEP_A_hover from 'url:./buildings/buildings_hover_Chilliwack-CEP-A.svg'

import preview_B_1 from 'url:./images/preview_B_1.png'
import preview_B_2 from 'url:./images/preview_B_2.png'

import captions_ISC from 'url:../video-cc/captions_-_ISC.vtt'
import captions_S from 'url:../video-cc/captions_-_S.vtt'
import captions_TTC from 'url:../video-cc/captions_-_TTC.vtt'
import captions_G from 'url:../video-cc/captions_-_G.vtt'
import captions_E from 'url:../video-cc/captions_-_E.vtt'
import captions_chilliwack_A from 'url:../video-cc/captions_-_chilliwack_-_A_Nursing.vtt'
import captions_Baker_House from 'url:../video-cc/captions_-_Baker_House.vtt'
import captions_B from 'url:../video-cc/captions_-_B.vtt'
import captions_A_Abbey from 'url:../video-cc/captions_-_A_Abbey.vtt'
$(`
  <div class="stage">
    <div class="locations">
      <div class="map"></div>
      <div class="list">
        <h1>Abbotsford Campus</h1>
        <div data-location="Building_A" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Building_A}">
            <img class="hover" src="${thumbnail_Building_A_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Building A</h2>
          </div>
        </div>
        <div data-location="Building_B" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Building_B}">
            <img class="hover" src="${thumbnail_Building_B_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Building B</h2>
            <h3>2 videos</h3>
          </div>
        </div>
        <div data-location="Baker_House" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Baker_House}">
            <img class="hover" src="${thumbnail_Baker_House_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Baker House</h2>
          </div>
        </div>
        <div data-location="Building_E" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Building_E}">
            <img class="hover" src="${thumbnail_Building_E_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Building E</h2>
          </div>
        </div>
        <div data-location="Building_G" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Building_G}">
            <img class="hover" src="${thumbnail_Building_G_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Building G</h2>
          </div>
        </div>
        <div data-location="Indigenous_Gathering" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Indigenous_Gathering}">
            <img class="hover" src="${thumbnail_Indigenous_Gathering_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Indigenous Gathering Place</h2>
          </div>
        </div>
        <div data-location="Building_S" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Building_S}">
            <img class="hover" src="${thumbnail_Building_S_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Building S</h2>
          </div>
        </div>

        <h1>Chilliwack</h1>
        <div data-location="Chilliwack-TTC" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Chilliwack_TTC}">
            <img class="hover" src="${thumbnail_Chilliwack_TTC_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Building TTC</h2>
          </div>
        </div>
        <div data-location="Chilliwack-CEP-A" class="location">
          <div class="image">
            <img class="default" src="${thumbnail_Chilliwack_CEP_A}">
            <img class="hover" src="${thumbnail_Chilliwack_CEP_A_hover}">
          </div>
          <div class="text">
            <h1>Science Labs</h1>
            <h2>Building CEP-A</h2>
          </div>
        </div>
      </div>
      <div class="toggle">Toggle</div>
      <div class="playlist" data-playlist="Building_B">
        <div class="icon back hoverable">Close</div>
        <h1>Student Services & International Global Lounge</h1>
        <h2>Building B</h2>
        <div class="videos">
          <div class="video">
            <div class="preview">
              <img src="${preview_B_1}">
            </div>
            <h3>Student Residences</h3>
          </div>
          <div class="video">
            <div class="preview">
              <img src="${preview_B_2}">
            </div>
            <h3>Campus Life</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="player">
      <div class="instructions">
        <h1>Tap a building to see what’s inside</h1>
      </div>
      <div class="modal">
        <div class="backdrop"></div>
        <div class="video-wrap">
          <div class="top-controls">
            <h1>Video Title</h1>
            <h2>Video Subtitle</h2>
            <div class="controls">
              <div class="icon back white hoverable">Close Video</div>
              <div class="icon sound green">Unmute</div>
              <div class="icon thumbs green">Thumbs Up</div>
            </div>
          </div>
          <div class="bottom-controls">
            <div class="top">
              <div class="caption-wrap">
                <div class="captions"></div>
              </div>
            </div>
            <div class="progress"></div>
          </div>
          <video id="video" muted playsinline preload width="600" height="800">
            <source id="mp4_src" src="" type="video/mp4"> 
            <source id="webm_src" src="" type="video/webm"> 
            <track label="English" kind="subtitles" mode="showing" srclang="en" src="" default>
          </video>
        </div>
      </div>
    </div>
  </div>`
).appendTo('#ufv-map-root');

const locations = [
  {
    id: 'Building_A',
    title: "Science Labs",
    subtitle: "Building A",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Building A",
        file: 'A-Abby',
        captions: captions_A_Abbey,
      },
    ],
  },
  {
    id: 'Building_B',
    title: "Science Labs",
    subtitle: "Building B",
    videos: [
      {
        title: "Campus Life",
        subtitle: "Building B",
        file: 'B-Building',
        captions: captions_B,
      },
      {
        title: "Second Video",
        subtitle: "Building B",
        file: 'B',
      },
    ],
  },
  {
    id: 'Baker_House',
    title: "Science Labs",
    subtitle: "Baker House",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Baker House",
        file: 'Baker-House',
        captions: captions_Baker_House,
      },
    ],
  },
  {
    id: 'Building_E',
    title: "Science Labs",
    subtitle: "Building E",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Building E",
        file: 'E',
        captions: captions_E,
      },
    ],
  },
  {
    id: 'Building_G',
    title: "Science Labs",
    subtitle: "Building G",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Building G",
        file: 'G',
        captions: captions_G,
      },
    ],
  },
  {
    id: 'Indigenous_Gathering',
    title: "Science Labs",
    subtitle: "Indigenous Gathering Place",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Indigenous Gathering Place",
        file: 'Indigenous-Gathering',
        captions: captions_ISC,
      },
    ],
  },
  {
    id: 'Building_S',
    title: "Science Labs",
    subtitle: "Building S",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Building S",
        file: 'S',
        captions: captions_S,
      },
    ],
  },
  {
    id: 'Chilliwack-TTC',
    title: "Science Labs",
    subtitle: "Building TTC",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Building TTC",
        file: 'Chilliwack-TTC',
        captions: captions_TTC,
      },
    ],
  },
  {
    id: 'Chilliwack-CEP-A',
    title: "Science Labs",
    subtitle: "Building CEP-A",
    videos: [
      {
        title: "Science Labs",
        subtitle: "Building CEP-A",
        file: 'Chilliwack-CEP-A',
        captions: captions_chilliwack_A,
      },
    ],
  },
];

const $videoPlayer = $('#video')
const $modal = $('.modal')

const tracks = $videoPlayer.get(0).textTracks[0]
tracks.mode = 'hidden'
const cues = tracks.cues

const toggleVideo = (location) => {
  $('.map #' + location.id + ', .locations [data-location="' + location.id + '"]').addClass('visited')
  $('.instructions').addClass('hide')
  // If we ever need more than one playlist: this needs a refactor.
  if (location.videos.length === 1) {
    return showVideo(location.videos[0])
  }
  else {
    return showPlaylist(location)
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
  $('.instructions').addClass('hide')
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
  document.querySelector('video').textTracks[0].mode = "hidden";
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

const showPlaylist = (location) => {
  if ($('.locations .toggle.active').length > 0) {
    $('.locations .list').removeClass('active')
  }
  $('.locations .toggle').addClass('hide')
  $('.playlist').addClass('active')
}

const hidePlaylist = (location) => {
  if ($('.locations .toggle.active').length > 0) {
    $('.locations .list').addClass('active')
  }
  $('.locations .toggle').removeClass('hide')
  $('.playlist').removeClass('active')
}

const showVideo = (video) => {
  $('.building.active, .location.active').removeClass('active')
  // $(`#${location.id}, #list-${location.id}`).addClass('visited active')
  $videoPlayer.find('#mp4_src').attr('src', `https://ddwhdx18r9qya.cloudfront.net/ufv/videos/${video.file}.mp4`)
  $videoPlayer.find('#webm_src').attr('src', `https://ddwhdx18r9qya.cloudfront.net/ufv/videos/${video.file}.webm`)
  if (video.captions) {
    $videoPlayer.find('track').attr('src', video.captions)
  }
  else {
    $videoPlayer.find('track').attr('src', '')
  }
  $modal.find('h1').html(video.title)
  $modal.find('h2').html(video.subtitle)
  // $videoPlayer.get(0).load()
  $videoPlayer.get(0).currentTime = 0
  $('.progress').css({ transform: 'scaleX(0.00001)' })
  $modal.addClass('active')
  // $videoPlayer.get(0).play()
  // $videoPlayer.get(0).addEventListener('ended', hideVideo);
  $videoPlayer.get(0).load();
  $videoPlayer.get(0).play();
  // $videoPlayer.get(0).textTracks[0].mode = 'showing'
  return false
}

const hideVideo = () => {
  $videoPlayer.get(0).pause()
  $modal.removeClass('active')
  $('.building.active, .location.active').removeClass('active')
  hideText()
  return false
}

const setup = (svgData) => {
  $("#ufv-map-root .map").append(svgData)

  locations.forEach((location) => {
    const $item = $('.map #' + location.id)
    $item.on('touchstart', (e) => { return toggleVideo(location) })
    $item.on('click', (e) => { return toggleVideo(location) })

    $el = $('.locations [data-location="' + location.id + '"]')
    $el.on('click', (e) => { return toggleVideo(location) })
    $el.on('touchstart', (e) => { return toggleVideo(location) })
  })

  $('[data-playlist]').each((_, playlist) => {
    playlistId = $(playlist).data('playlist')
    $(playlist).find('.video').each((i, video) => {
      let location = locations.find(location => location.id === playlistId)
      $(video).on('click', () => {
        showVideo(location.videos[i])
        return false;
      })
    })
  })
  $('.locations .toggle').on('touchstart', toggleList)
  $('.locations .toggle').on('click', toggleList)
  $('.playlist .back').on('touchstart', hidePlaylist)
  $('.playlist .back').on('click', hidePlaylist)
  $modal.find('.back, .backdrop').on('touchstart', hideVideo)
  $modal.find('.back, .backdrop').on('click', hideVideo)
  $modal.find('.sound').on('touchstart', toggleSound)
  $modal.find('.sound').on('click', toggleSound)
  $modal.find('.meta-reaction .icon').on('touchstart', emote)
  $modal.find('.meta-reaction .icon').on('click', emote)

  $videoPlayer.on('click', () => {
    let playing = !!($videoPlayer.get(0).currentTime > 0 && !$videoPlayer.get(0).paused && !$videoPlayer.get(0).ended && $videoPlayer.get(0).readyState > 2);
    if (playing) {
      $videoPlayer.get(0).pause()
    }
    else {
      $videoPlayer.get(0).play()
    }
  })
  $videoPlayer.on('timeupdate', () => {
    $('.progress').css({ transform: 'scaleX(' + ($videoPlayer.get(0).currentTime / $videoPlayer.get(0).duration) + ')' })
  })
  $videoPlayer.on('loadedmetadata', videoLoaded);
  $videoPlayer.on('load', playVideo);

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