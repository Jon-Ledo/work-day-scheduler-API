const timeBlocksContainer = $('.container')
const currentDayContainer = $('#currentDay')
const currentDate = moment()
const currentCalendarDay = currentDate.format('MMMM Do YYYY')
const currentTime = currentDate.format('LT')
const currentHour = currentDate.format('ha')

$(document).ready(function () {
  currentDayContainer.append(currentCalendarDay)
  // getStorageData()
  generateTimeBlocks()
})

function generateTimeBlocks() {
  // create time blocks for times ranging between 9AM and 9PM
  // use loop to build time blocks one at a time
  // each timeblock gets a color class based on relation to CURRENTHOUR
  // --time block time === currentTime >> red
  // --time block time < currentTime >> grey
  // --time block time > currentTime >> green
  // attatch relevant event listeners
  // -- editText()
  // append time block to the container
}

function editText() {}
