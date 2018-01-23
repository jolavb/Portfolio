const D3 = require('./d3.min.js')
const getFormFields = require('./../../../lib/get-form-fields')

// Using d3 to select and style dom element

const colorElement = function () {
  D3.select('.D3-example-1').style('color', 'green')
}

const deletesvg = function () {
  D3.select('.deleteme').remove()
}

const datafunction = function () {
  const data = [1,2,3,4,5]
  const paragraph = D3.select('.p-pops')
    .selectAll('p')
    .data(data)
    .enter()
    .append('p')
    .text(function (d) {
      return d + ' '
    })
}

const setd3Event = function () {
  D3.selectAll('.eventlisten')
    .on('mouseover', function () {
      D3.select(this)
        .style('background-color', 'orange')

      // Get current event info
      console.log(D3.event)

      // Get x & y co-ordinates
      console.log(D3.mouse(this))
    })
    .on('mouseout', function () {
      D3.select(this)
        .style('background-color', 'steelblue')
    })
}

const transitions = function () {
  const svg = D3.select('.animation')
    .html('')
    .append('svg')
    .attr('width', 300)
    .attr('height', 200)

  const bar1 = svg.append('rect')
    .attr('fill', 'white')
    .attr('x', 0)
    .attr('y', 0)
    .attr('height', 0)
    .attr('width', 20)

  const bar2 = svg.append('rect')
    .attr('fill', 'red')
    .attr('x', 0)
    .attr('y', 0)
    .attr('height', 0)
    .attr('width', 20)
  update()

  function update () {
    bar1.transition()
      .ease(D3.easeLinear)
      .duration(1000)
      .attr('x', 100)
      .attr('height', 100)
  }
  bar2.transition()
    .ease(D3.easeLinear)
    .duration(1000)
    .delay(1000)
    .attr('x', 150)
    .attr('height', 100)
}

const loadedData2 = function () {
  // d3.csv parses as string by default, can specify type function call back to
  // overwite types
  D3.csv('./../../data/wine.csv', type, render)

  const svg = D3.select('.loaded-data2').append('svg')
    .attr('width', 250)
    .attr('height', 250)

  function type (d) {
    // overright string with parsed float
    // can also to parseFloat() same as "+"notation
    d.price = +d.price
    d.country = +d.country.length
    return d
  }

  function render (data) {
    // Bind Data
    const rects = svg.selectAll('circle').data(data)
    rects.enter().append('circle')
      .attr('r', 10)
      .merge(rects)
      .attr('cx', (d) => d.price)
      .attr('cy', (d) => d.country)
    rects.exit().remove()
  }
}

const colors = function () {
  const svg = D3.select('.loaded-data2').append('svg')
    .attr('width', 250)
    .attr('height', 250)

  const scale = D3.scaleLinear()
    .domain([1, 10])
    .range([0, 200])

  function render (data, color) {

    // Bind Data
    const rects = svg.selectAll('rect').data(data)
    // enter doesn't update data, only changes elements that weren't there before
    // to update previously added rects,

    // Enter
    rects.enter().append('rect')

      // Update - Use Merge to Update all selected elements on second pass
      .merge(rects)
      .attr('x', scale)
      .attr('y', 50)
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', color)

    // Exit - removes previously created elements
    rects.exit().remove()
  }

  setTimeout(function () { render([1, 2, 3], 'red') }, 1000)
  setTimeout(function () { render([1,2,3,4,5], 'blue') }, 2000)
  setTimeout(function () { render([1,2], 'yellow') }, 3000)

}

const examples = function () {
  // Scale transforms data space into pixel space
  // new linear scale instance
  const scaleLinear = D3.scaleLinear()
  // set min and max of domain which is
    .domain([0, 1]) // Setter function for Data space, returns scale
    .range([0, 100]) // Setter function for Pixel space, returns scale
  console.log(scaleLinear(0.5)) // prints 50

  // New ordinal scale instace. Ordinal = discrete values
  const scaleOrd = D3.scaleOrdinal()
    .domain(['a', 'b', 'c'])
    .range(['Apple', 'Bannana', 'Coconut'])
  console.log(scaleOrd('b')) // prints Apple

  // New ordinal scale instace.
  const scalePoint = D3.scalePoint()
    .domain(['a', 'b', 'c', 'd'])
    .range([0, 100])
  console.log(scalePoint('b')) // prints 33.3333333333

  // New ordinal scale instace with rounded range
  const scalePointRound = D3.scalePoint()
    .domain(['a', 'b', 'c', 'd'])
    .rangeRound([0, 100])
  console.log(scalePointRound('b')) // prints 34


  // SVGs with rectangle based on Data

  const data = [1,2,3,4,5,6,7,8,9,10]

  const svg = D3.select('.loaded-data2').append('svg')
    .attr('width', 250)
    .attr('height', 250)

  const scale = D3.scaleLinear()
    .domain([1, 10])
    .range([0, 200])

  svg.selectAll('rect')
    .data(data)
    .enter().append('rect')
    // x coords of rects are set based on scale
    .attr('x', function (d) { return scale(d) })
    .attr('y', 50)
    .attr('width', 20)
    .attr('height', 20)
}

const loadedData = function () {
  $('.wine').html('')

  const svg = D3.select('.wine')

  const margin = 200
  const width = svg.attr('width') - margin
  const height = svg.attr('height') - margin

  const xScale = D3.scaleBand().range([0, width]).padding(0.4) // set pixel range
  const yScale = D3.scaleLinear().range([height, 0])
  const g = svg.append('g').attr('transform', 'translate(' + 100 + ',' + 100 + ')')

  D3.csv('./../../data/wine.csv', render)

  function render (data) {
    xScale.domain(data.map(function (d) { return d.country }))
    yScale.domain([0, D3.max(data, function (d) { return d.price })])

    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(D3.axisBottom(xScale))
      .selectAll('text')
      .attr('dx', '-.8em')
      .attr('dy', '-.8em')
      .style('text-anchor', 'end')
      .attr('transform', function (d) {
        return 'rotate(-90)'
      })

    g.append('g')
      .call(D3.axisLeft(yScale).tickFormat(function (d) {
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
      .attr('x', function (d) { return xScale(d.country) })
      .attr('width', xScale.bandwidth())
      .attr('y', function (d) {
        return yScale(0)
      })

      .attr('height', 0)
      .transition()
      .ease(D3.easeElastic)
      .duration(1500)
      .attr('y', function (d) { return yScale(d.price) })
      .attr('height', function (d) { return height - yScale(d.price) })

    const sortOrder = ['Ascending', 'Descending']
    const options = D3.select('.loaded-data').append('select')
      .on('change', orderBy)
      .selectAll('option')
      .data(sortOrder)
      .enter().append('option')
      .text(function (d) { return d })
      .attr('value', function (d) { return d })

    function orderBy () {
      const bars = svg.selectAll('.bar')
      switch (event.target.value) {
        case 'Ascending':
          let x0 = xScale.domain(data.sort(function (a,b) { return a.price - b.price })
            .map(function (d) { return d.country }))
          bars.sort(function (a, b) { return x0(a.country) - x0(b.country) })
          bars.transition()
            .attr('x', function (d) { return x0(d.country) })

          break
        case 'Descending':
          x0 = xScale.domain(data.sort(function (a,b) { return b.price - a.price })
            .map(function (d) { return d.country }))
          bars.sort(function (a, b) { return x0(a.country) - x0(b.country) })
          bars.transition()
            .attr('x', function (d) { return x0(d.country) })


          break
        default:
          console.log('hello')
      }
    }

  }

  // // sort options
  // const sortOrder = ['Ascending', 'Descending']
  // const options = D3.select('.loaded-data').append('select')
  //   .on('change', orderBy)
  //   .selectAll('option')
  //   .data(sortOrder)
  //   .enter().append('option')
  //   .text(function (d) { return d })
  //   .attr('value', function (d) { return d })

  // function orderBy () {
  //   const bars = D3.selectAll('.bar')
  //   switch (event.target.value) {
  //     case 'Ascending':
  //       // let  asc = bars.sort((a,b) => b.price - a.price)
  //       console.log(sortAsc(bars))
  //       // xScale.domain()
  //
  //       // bars.transition()
  //       //   .attr('x', 0)
  //       break
  //     case 'Descending':
  //       console.log(bars)
  //       break
  //     default:
  //       console.log('hello')
  //   }
  // }
  //
  //
  //
  // function sortAsc (data) {
  //   return data.sort(function (a,b) {
  //     return a.price - b.price
  //   })
  // }
}

const loadWineData = function () {
  $('.wine').html('')
  D3.select('.wine-order').remove()

  const svg = D3.select('.wine')

  const margin = 200
  const width = svg.attr('width') - margin
  const height = svg.attr('height') - margin
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

    const sortOrder = ['Ascending', 'Descending']
    const options = D3.select('.loaded-data').append('select')
      .attr('class', 'wine-order')
      .on('change', orderBy)
      .selectAll('option')
      .data(sortOrder)
      .enter().append('option')
      .text(function (d) { return d })
      .attr('value', function (d) { return d })

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


}
const Iris = function () {

  const formData = $('form').serializeArray()

  // clear div
  D3.select('.loaded-data3 svg').remove()
  // Load Data and Call Render
  D3.csv('./../../data/Iris.csv', type, render)

  const outerWidth = 1000
  const outerHeight = 700
  const innerWidth = outerWidth - 30 - 30
  const innerHeight = outerHeight - 30 - 30

  const xCol = formData[0].value
  const yCol = formData[1].value
  const rCol = formData[2].value
  const colorCol = 'Species'
  const rMin = 5
  const rMax = 20

  // svg
  const svg = D3.select('.loaded-data3').append('svg')
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
      .call(D3.axisBottom(xScale))
      .attr('transform', 'translate(0,' + (outerHeight - 20) + ')')
      .selectAll('text')
      // .attr('x', '-20')
      // .attr('y', '-20')
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
  }

  function displayInfo (info) {
    $('.iris-info').html('')
    $('.iris-info').hide()

    const itembox = D3.select('.iris-info')
    const itemInfo = itembox.selectAll('tr').data(Object.keys(info))
    itemInfo.enter().append('tr').append('td')
      .text(function (key) {
        if (key !== 'Id') {
          return key + ': ' + info[key]
        }
      })
    $('.iris-info').fadeIn(200)
  }
}

const Crime = function () {
  D3.csv('./../../data/crime1.csv', type, render)
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
  const svg = D3.select('.loaded-data4').append('svg')
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
    const types = D3.select('.loaded-data4').append('div')
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
}




module.exports = {
  colorElement,
  deletesvg,
  datafunction,
  setd3Event,
  transitions,
  loadedData,
  loadedData2,
  examples,
  colors,
  Iris,
  Crime,
  loadWineData
}
