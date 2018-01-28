
// Slider Render
import 'slick-carousel'
// HandleBars Templates
const home = require('./../templates/main.handlebars')
const about = require('./../templates/about.handlebars')
const projects = require('./../templates/projects.handlebars')
const experiance = require('./../templates/experiance.handlebars')
const visualizations = require('./../templates/d3.hbs')
// const timeline = require('./../templates/timeline.handlebars')

// Dependecies
const pageEvents = require('./pageEvents')



// Consolidate Handlebars Views
const views = {
  home: home({view: true}),
  about: about(),
  projects: projects(),
  experiance: experiance(),
  visualizations: visualizations()
  // timeline: timeline()
}

// Loads Navbar Link Events on Main Page Load
const loadClickEvents = function () {
  $('.navlink').on('click', linksHandler)
  $('.arrow').on('click', scrollLinks)
  $('.container-fluid').keyup(keyActions)
  $('.slider').on('click', function () {
    pickView(this)
      .then(showView)
      .then(() => activateLink('#projects'))
      .then(pageEvents.loadTabEvents)
      .catch(console.error)
  })
}

// Renders Slider if homeview is rendered
const loadSLider = function (view) {
  if (view === 'home') {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    })
  }
  loadClickEvents()
  return view
}


// Navbar Link Events Show Views depending on target
const linksHandler = function () {
  pickView(this)
  // FadeOut Resolved.
    .then(activateLink)
    .then(showView)
    .then(loadSLider)
    .then(pageEvents.loadTabEvents)
    .catch(console.log)
}

// pickView Returns TargetView on resolving fadeOut content and Background
const pickView = function (target) {
  return new Promise((resolve, reject) => {
    if ($('.content').hide()) {
      $('.content').html('')
      resolve(target)
    } else {
      reject(console.log('error'))
    }
  })
}

// Changes content html to view and FadesIn, returns view
const showView = function (target) {
  const view = $(target).attr('id')
  $('.content').html(views[view])
  $('.content').fadeIn()
  return view
}

// Link Events- removes active class from all li's adds active to target
const activateLink = function (target) {
  $('.navlink').removeClass('active')
  $(target).addClass('active')
  return target
}

// Up Down Key Actions
const keyActions = function () {
  const upDown = {
    ArrowDown: $('.down'),
    ArrowUp: $('.up')
  }
  scrollLinks.call(upDown[event.key])
}

// Find The correct link based on Arrow Action
const scrollLinks = function () {
  let i = $('.active').index()
  const arrow = $(this).children().first().attr('class')
  const links = $('.nav').children('.navlink')
  arrow === 'arrow-down' ? i++ : i--
  if (i > links.length) { i = 1 } else if (i === 0) { i = links.length }
  linksHandler.call(links[i - 1])
}

module.exports = {
  loadClickEvents
}
