const d3Events = require('./../d3/index')

const loadTabEvents = function (view) {
  $('.crime-data').on('click', d3Events.Crime)
  $('.iris-data').on('click', d3Events.Iris)
  $('.wine-data').on('click', d3Events.loadWineData)
  $('.thumbnail').click(function (e) {
    const selected = $(this).attr('aria-controls')
    $('.page-tab').removeClass('active')
    $('li > a[aria-controls=' + selected + ']').parent().addClass('active')
  })
}




module.exports = {
  loadTabEvents
}
