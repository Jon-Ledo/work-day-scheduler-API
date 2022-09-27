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
  const timesArray = [
    { time: '9am', color: 'past' },
    { time: '10am', color: 'past' },
    { time: '11am', color: 'past' },
    { time: '12pm', color: 'past' },
    { time: '1pm', color: 'past' },
    { time: '2pm', color: 'past' },
    { time: '3pm', color: 'past' },
    { time: '4pm', color: 'past' },
    { time: '5pm', color: 'past' },
    { time: '6pm', color: 'past' },
    { time: '7pm', color: 'past' },
    { time: '8pm', color: 'past' },
    { time: '9pm', color: 'past' },
    { time: '10pm', color: 'past' },
    { time: '11pm', color: 'past' },
  ]

  // change color value of the array
  applyColorClasses(timesArray)

  // use loop to build time blocks one at a time
  timesArray.forEach((timeArr) => {
    const createdArticle = $('<article></article>')
    createdArticle.addClass('row time-block')

    const createdFlexBox = $('<div></div>')
    createdFlexBox.addClass('col-12 d-flex')

    const createdHeader = $(`<header>${timeArr.time}</header>`)
    createdHeader.addClass('hour col-1')

    const createdTextArea = $('<textarea></textarea>')
    createdTextArea.addClass(`description col-10 ${timeArr.color}`)
    const createdIconContainer = $('<div></div>')
    createdIconContainer.addClass('saveBtn col-1 ')
    const createdIcon = $('<i></i>')
    createdIcon.addClass('fas fa-save')

    // start appending ✨
    createdIconContainer.append(createdIcon)
    createdFlexBox.append(createdHeader, createdTextArea, createdIconContainer)
    createdArticle.append(createdFlexBox)
    timeBlocksContainer.append(createdArticle)
  })

  // attach relevant event listeners
  // -- editText()
}

function editText() {}

function applyColorClasses(timesArray) {
  let futureFlag
  timesArray.forEach((time, index) => {
    if (time.time === currentHour) {
      time.color = 'present'
      futureFlag = index
    }

    timesArray.forEach((item, index) => {
      if (index > futureFlag) {
        item.color = 'future'
      }
    })
  })
}
