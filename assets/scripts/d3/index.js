
// HandleBars templates
const WineHbs = require('./../templates/innerpage/wine.hbs')
const CrimeHbs = require('./../templates/innerpage/crime.hbs')
const IrisHbs = require('./../templates/innerpage/iris.hbs')

const D3 = require('./d3.min.js')
const getFormFields = require('./../../../lib/get-form-fields')


// Variables
let loaded = false


// Chart Actions
const loadResize = function () {
  $(window).on('resize', responsive).trigger('resize')
}

const responsive = function () {
  console.log('hello')
  const chart = $('.chart')
  const aspect = chart.width() / chart.height()
  const container = chart.parent()
  const targetWidth = container.width()
  chart.attr('width', targetWidth)
  chart.attr('height', Math.round(targetWidth / aspect))
}

const removeActive = function() {
  $(window).unbind('resize')
  $('.data-navpils li').removeClass('active')
}

const loadWineData = function () {
  loaded = false
  // clear content
  D3.select('.crime-info svg').remove()

  $('.loaded-data').html(WineHbs())
  removeActive()
  $('.wine-data').addClass('active')

  // Dimensions
  const outerWidth = 1200
  const outerHeight = 500
  const margin = 200
  const width = outerWidth - margin
  const height = outerHeight - margin

  // const svg = D3.select('.wine')
  const svg = D3.select('.wine-info').append('svg')
    .attr('class', 'chart')
    .attr('viewBox', '0 0 1200 500')
    .attr('perserveAspectRatio', 'xMinYMid')
    .attr('width', outerWidth)
    .attr('height', outerHeight)


  const g = svg.append('g').attr('transform', 'translate(' + 100 + ',' + 100 + ')')

  D3.csv('public/wine.csv', render)


  function render (data) {
    const xAxis = D3.scaleBand()
      .range([0, width]).padding(0.4) // set pixel range
      .domain(data.map(function (d) { return d.country }))
    const yAxis = D3.scaleLinear()
      .range([height, 0])
      .domain([0, D3.max(data, function (d) { return d.price })])

    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(D3.axisBottom(xAxis))
      .selectAll('text')
      .attr('dx', '-.8em')
      .attr('dy', '-.8em')
      .style('text-anchor', 'end')
      .attr('transform', function (d) {
        return 'rotate(-90)'
      })

    g.append('g')
      .call(D3.axisLeft(yAxis).tickFormat(function (d) {
        return '$' + d
      }).ticks(10))
      .append('text')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('value')

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('fill', 'blue')
      .on('mouseover', function (d) {
        g.append('text')
          .attr('class', 'price-show')
          .attr('x', xAxis(d.country))
          .attr('y', yAxis(d.price))
          .text('$' + parseFloat(d.price).toFixed(2))
          .attr('transform', 'rotate(90 ' + xAxis(d.country) + ' ' + yAxis(d.price) + ')')
      })
      .on('mouseout', function (d) {
        D3.select('.price-show')
          .remove()
      })
      .attr('x', function (d) { return xAxis(d.country) })
      .attr('width', xAxis.bandwidth())
      .attr('y', function (d) {
        return yAxis(0)
      })

      .attr('height', 0)
      .transition()
      .ease(D3.easeElastic)
      .duration(1500)
      .attr('y', function (d) { return yAxis(d.price) })
      .attr('height', function (d) { return height - yAxis(d.price) })


    // Event Listener for Change Order
    D3.select('.wine-order')
      .on('change', orderBy)

    function orderBy () {
      const bars = svg.selectAll('.bar')
      switch (event.target.value) {
        case 'Ascending':
          xAxis.domain(data.sort(function (a,b) { return a.price - b.price })
            .map(function (d) { return d.country }))
          bars.sort(function (a, b) { return xAxis(a.country) - xAxis(b.country) })
          bars.transition()
            .attr('x', function (d) { return xAxis(d.country) })
            .attr('fill', function (d) {
              return 'rgb(0,' + (parseInt(d.price) * 2) + ',0)'
            })
          D3.select('.x-axis').transition()
            .call(D3.axisBottom(xAxis))

          break
        case 'Descending':
          xAxis.domain(data.sort(function (a,b) { return b.price - a.price })
            .map(function (d) { return d.country }))
          bars.sort(function (a, b) { return xAxis(a.country) - xAxis(b.country) })
          bars.transition()
            .attr('x', function (d) { return xAxis(d.country) })
            .attr('fill', function (d) {
              return 'rgb(0,' + (parseInt(d.price) * 2) + ',0)'
            })
            .select('x-axis')
            .call(D3.axisBottom(xAxis))
          D3.select('.x-axis').transition()
            .call(D3.axisBottom(xAxis))


          break
        default:
          console.log('hello')
      }
    }
  }
  loadResize()
}


const Iris = function () {
  removeActive()

  $('.iris-data').addClass('active')

  if (!loaded) {
    $('.loaded-data').html(IrisHbs({'loaded': loaded}))
  } else {
    $('svg').remove()
  }

  const formData = $('form').serializeArray()

  // clear div
  // D3.select('.loaded-data3 svg').remove()
  // Load Data and Call Render
  D3.csv('public/Iris.csv', type, render)

  const outerWidth = 1200
  const outerHeight = 500
  const innerWidth = outerWidth - 30 - 30
  const innerHeight = outerHeight - 30 - 30

  const xCol = formData[0].value
  const yCol = formData[1].value
  const rCol = formData[2].value
  const colorCol = 'Species'
  const rMin = 5
  const rMax = 20

  // svg
  const svg = D3.select('.iris-info').append('svg')
    .attr('class', 'chart')
    .attr('viewBox', '0 0 1200 500')
    .attr('perserveAspectRatio', 'xMinYMid')
    .attr('width', outerWidth)
    .attr('height', outerHeight)

  // group
  const g = svg.append('g')
    .attr('transform', 'translate( 30, 30)')

  // converts strings to numbers
  function type (d) {
    d.SepalLengthCm = +d.SepalLengthCm
    d.SepalWidthCm = +d.SepalWidthCm
    d.PetalLengthCm = +d.PetalLengthCm
    d.PetalWidthCm = +d.PetalWidthCm
    return d
  }

  function render (data) {
    // Scales
    const xScale = D3.scaleLinear().range([0, innerWidth]) // pixel space
      .domain(D3.extent(data, function (d) { return d[xCol] })) // set data domains for x
    const yScale = D3.scaleLinear().range([innerHeight, 0]) // pixel space, range y is inverted to show mins at bottom
      .domain(D3.extent(data, function (d) { return d[yCol] }))// set data domains for y
    const rScale = D3.scaleLinear().range([rMin, rMax])
      .domain(D3.extent(data, function (d) { return d[rCol] }))// set data domains for y
    const colorScale = D3.scaleOrdinal(D3.schemeCategory10)

    svg.append('g')
      .attr('class', 'color-axis')
      .call(D3.axisBottom(xScale))
      .attr('transform', 'translate(0,' + (outerHeight - 10) + ')')
      .selectAll('text')
      .style('text-anchor', 'end')

    svg.append('g')
      .attr('class', 'color-axis')
      .call(D3.axisLeft(yScale))
      .attr('transform', 'translate(' + (outerWidth - 10) + ', 0)')
      .selectAll('text')
      .style('text-anchor', 'end')


    const circles = g.selectAll('circle').data(data)

    circles.enter().append('circle')
      .merge(circles) // update case
      .on('mouseover', function (d) { displayInfo(d) })
      .attr('id', function (d) { return d.Id })
      .attr('cx', function (d) { return xScale(d[xCol]) }) // return scaled x coord
      .attr('cy', function (d) { return yScale(d[yCol]) }) // return scaled y coord
      .attr('fill', function (d) { return colorScale(d[colorCol]) })
      .transition()
      .duration(100)
      .delay(function (d, i) { return i * 50 })
      .on('start', function repeat () {
        D3.active(this)
          .transition()
          .attr('r', 0) // return scaled radius
          .transition()
          .attr('r', function (d) { return rScale(d[rCol]) }) // return scaled radius
      })
    circles.exit().remove()
    loadResize()
  }

  function displayInfo (info) {
    $('.iris-table').html('')
    $('.iris-table').hide()

    const itembox = D3.select('.iris-table')
    const itemInfo = itembox.selectAll('tr').data(Object.keys(info))
    itemInfo.enter().append('tr').append('td')
      .text(function (key) {
        if (key !== 'Id') {
          return key + ': ' + info[key]
        }
      })
    $('.iris-table').fadeIn(200)
  }
// Add Change Event After Template Load
  loaded = true
  $('select').on('change', Iris)
}

const Crime = function () {
  // Clear Content
  loaded = false
  $('.loaded-data').html(CrimeHbs())
  // Active Link
  removeActive()
  $('.crime-data').addClass('active')

  D3.csv('public/crime1.csv', type, render)

  // general dimenions
  const outerWidth = 1000
  const outerHeight = 1000
  const innerWidth = outerWidth - 30 - 30
  const innerHeight = outerHeight - 30 - 30

  //   const xCol = formData[0].value
  const xCol = 'lng'
  const yCol = 'lat'
  const colorCol = 'offense'
  const radius = 1

  // scales
  const xScale = D3.scaleLinear().range([0, innerWidth]) // pixel space
  const yScale = D3.scaleLinear().range([innerHeight, 0]) // pixel space, range y is inverted to show mins at bottom
  const colorScale = D3.scaleOrdinal(D3.schemeCategory20)


  // svg
  const svg = D3.select('.crime-info').append('svg')
    .attr('width', outerWidth)
    .attr('height', outerHeight)

  function render (data) {
    xScale.domain(D3.extent(data, function (d) { return d[xCol] })) // set data domains for x
    yScale.domain(D3.extent(data, function (d) { return d[yCol] }))// set data domains for y
    const circles = svg.selectAll('circle').data(data)
    circles.enter().append('circle')
      // .merge(circles) // update case
      .transition()
      .duration(10)
      .delay(function (d, i) { return i * .5 })
      .on('start', function repeat () {
        D3.active(this)
          .transition()
          .attr('cx', 0) // return scaled radius
          .transition()
          .attr('class', function (d) { return d[colorCol].replace(/(\/| )/g, '_') })
          .attr('cx', function (d) { return xScale(d[xCol]) }) // return scaled x coord
          .attr('r', radius) // return scaled radius
          .attr('fill', function (d) { return colorScale(d[colorCol])})
          .attr('cy', function (d) { return yScale(d[yCol]) }) // return scaled y coord
      })
    circles.exit().remove()
    unique(data)
  }

  function unique (data, colors) {
    const types = D3.select('.crime-info').append('div')
      .attr('class', 'types')

    types.selectAll('p')
      .data(D3.map(data, function (d) { return d.offense }).keys())
      .enter().append('p')
      .text(function (d) { return d })
      .attr('style', function (d) { return 'color:' + colorScale(d) })
      .on('mouseover', function (d) {
        D3.selectAll('circle').attr('visibility', 'hidden')
        const selection = $('.' + d.replace(/(\/| )/g, '_'))
        selection.attr('visibility', 'visible')
      })
      .on('mouseout', function () {
        D3.selectAll('circle').attr('visibility', 'visible')
      })
  }

  function type (d) {
    d.lat = +d.lat
    d.lng = +d.lng
    return d
  }
  loadResize()
}


module.exports = {
  Iris,
  Crime,
  loadWineData
}
