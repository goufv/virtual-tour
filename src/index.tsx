import React from "react"
import { render } from "react-dom"

import('./index.scss')
import map from 'url:./map.svg'

document.write(`
  <div id="ufv-map-root">
    <div class="stage">
      <div class="locations">
        <div class="map"></div>
      </div>
      <div class="player">
        <div class="instructions">
          <h1>Be cool be cool</h1>
        </div>
        <div class="modal">
          <video id="video" playsinline preload>
            <source src="http://s3.amazonaws.com/denimandsteel/ufv/IMG_8338.mov">
          </video>
        </div>
      </div>
    </div>
  </div>`
)

const show = (e, item) => {
  e.preventDefault();
  if (item) {
    item.classList.add('visited')
  }
  document.querySelector('.modal').classList.toggle('active')
  if (document.querySelector('.modal').classList.contains('active')) {
    document.querySelector('#video').play()
  }
  else {
    document.querySelector('#video').pause()
    document.querySelector('#video').currentTime = 0
  }
}

const setup = (svgData) => {
  document.querySelector("#ufv-map-root .map").insertAdjacentHTML('beforeend', svgData);

  [].forEach.call(document.querySelectorAll('.building'), (item) => {
    item.addEventListener('click', (e) => { show(e, item) })
    item.addEventListener('touchstart', (e) => { show(e, item) })
    document.querySelector('.modal').addEventListener('click', show)
    document.querySelector('.modal').addEventListener('touchstart', show)
  });

}

fetch(map)
  .then(data => data.text())
  .then(setup)



// render(<h1>Hello World<img src={map}/></h1>, document.getElementById("ufv-map-root"))