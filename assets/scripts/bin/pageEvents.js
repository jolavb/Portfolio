
const intro = require('./../templates/innerpage/intro.handlebars')
const grocery = require('./../templates/innerpage/grocery.handlebars')
const tic_tac = require('./../templates/innerpage/tic_tac.handlebars')

const views = {
  Intro: intro(),
  'Grocery-Basket': grocery(),
  'Tic-Tac-Doh!': tic_tac()
}

const linksHandler = function () {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  const view = views[$(this).text()]
  $('.page-content').hide()
  $('.page-content').html(view)
  $('.page-content').fadeIn()
}


module.exports = {
  linksHandler
}
