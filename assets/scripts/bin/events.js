
// HandleBars Templates
const home = require('./../templates/main.handlebars')
const about = require('./../templates/about.handlebars')
const projects = require('./../templates/projects.handlebars')
const experiance = require('./../templates/experiance.handlebars')
const timeline = require('./../templates/timeline.handlebars')

// Dependecies
const pageEvents = require('./pageEvents')



// Consolidate Handlebars Views
const views = {
  home: home({view: true}),
  about: about(),
  projects: projects(),
  experiance: experiance(),
  timeline: timeline()
}

// Loads Navbar Link Events on Main Page Load

const loadClickEvents = function () {
  $('.navlink').on('click', linksHandler)
  $('.arrow').on('click', scrollLinks)
  $('.container-fluid').keyup(keyActions)
}


// Navbar Link Events Show Views depending on target
const linksHandler = function () {
  pickView(this)
  // FadeOut Resolved.
    .then(activateLink)
    .then(showView)
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
  $('li').removeClass('active')
  $(target).addClass('active')
  return target
}

// Up Down Key Actions
const keyActions = function () {
  const upDown = {
    ArrowDown: $('.down'),
    ArrowUp: $('.up')
  }
  console.log(upDown[event.key])
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
