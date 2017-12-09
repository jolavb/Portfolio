const about = require('./../templates/about.handlebars')

// Loads Navbar Link Events
const loadClickEvents = function () {
  $('li').on('click', linksHandler)
}

// Navbar Link Events Show Views depending on target
const linksHandler = function (event) {
  showView($(this).attr('id'))
  // FadeOut Resolved.
    .then(pickView)
    .catch(()=> {console.log('error')})
}

// ShowView Returns TargetView on resolving fadeOut content and Background
const showView = function (target) {
  return new Promise((resolve, reject) => {
    if ($('.content').hide()) {
      resolve(target)
    } else {
      reject(console.log('error'))
    }
  })


}

const pickView = function (target) {
  const views = {
    about: about()
  }

  $('.content').html(views[target])
  $('.content').fadeIn()
  // $('.content').show()
  // $('.content').show()
}

module.exports = {
  loadClickEvents
}
