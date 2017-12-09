'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const mainTemplate = require('./templates/main.handlebars')
const events = require('./bin/events')

$(() => {
  setAPIOrigin(location, config)
  const showMain = function () {
    return new Promise((resolve, reject) => {
      if ($('.fade-in').html(mainTemplate())) {
        resolve('loaded')
      } else {
        reject(console.log('error'))
      }
    })
  }

  showMain()
    .then(() => { $('.fade-in').fadeIn() })
    .then(events.loadClickEvents)
    .catch(() => { console.log('error loading') })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
mainTemplate()
