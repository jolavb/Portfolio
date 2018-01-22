


const loadTabEvents = function () {
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
