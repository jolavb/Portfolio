const d3Events = require('./../d3/index')


const loadTabEvents = function () {
  $('.wine-data').on('click', d3Events.loadWineData)
  $('.thumbnail').click(function (e) {
    const selected = $(this).attr('aria-controls')
    $('.active').removeClass('active')
    $('li > a[aria-controls=' + selected + ']').parent().addClass('active')
    // $(this).tab('show')
  })
}




module.exports = {
  loadTabEvents
}
