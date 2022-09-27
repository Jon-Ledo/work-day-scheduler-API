const currentDate = moment()
const currentCalendarDay = currentDate.format('MMMM Do YYYY')
const currentTime = currentDate.format('LT')
const currentHour = currentDate.format('ha')

$(document).ready(function () {
  $('#currentDay').append(currentCalendarDay)
  getInputData()
  generateTimeBlocks()
})
// create time blocks for times ranging between 9AM and 9PM
let timesArray = [
  { time: '9am', color: 'future', value: '', key: 0, day: currentCalendarDay },
  { time: '10am', color: 'future', value: '', key: 1, day: currentCalendarDay },
  { time: '11am', color: 'future', value: '', key: 2, day: currentCalendarDay },
  { time: '12pm', color: 'future', value: '', key: 3, day: currentCalendarDay },
  { time: '1pm', color: 'future', value: '', key: 4, day: currentCalendarDay },
  { time: '2pm', color: 'future', value: '', key: 5, day: currentCalendarDay },
  { time: '3pm', color: 'future', value: '', key: 6, day: currentCalendarDay },
  { time: '4pm', color: 'future', value: '', key: 7, day: currentCalendarDay },
  { time: '5pm', color: 'future', value: '', key: 8, day: currentCalendarDay },
  { time: '6pm', color: 'future', value: '', key: 9, day: currentCalendarDay },
  { time: '7pm', color: 'future', value: '', key: 10, day: currentCalendarDay },
  { time: '8pm', color: 'future', value: '', key: 11, day: currentCalendarDay },
  { time: '9pm', color: 'future', value: '', key: 12, day: currentCalendarDay },
  {
    time: '10pm',
    color: 'future',
    value: '',
    key: 13,
    day: currentCalendarDay,
  },
  {
    time: '11pm',
    color: 'future',
    value: '',
    key: 14,
    day: currentCalendarDay,
  },
]

function generateTimeBlocks() {
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
    createdTextArea.attr('data-key', timeArr.key)
    createdTextArea.text(timeArr.value)

    const createdIconContainer = $('<div></div>')
    createdIconContainer.addClass('saveBtn col-1 ')
    const createdIcon = $('<i></i>')
    createdIcon.addClass('fas fa-save')

    // start appending ✨
    createdIconContainer.append(createdIcon)
    createdFlexBox.append(createdHeader, createdTextArea, createdIconContainer)
    createdArticle.append(createdFlexBox)
    $('.container').append(createdArticle)

    // attach relevant event listener
    createdIcon.click(saveInputData)
  })
}

function applyColorClasses(timesArray) {
  let futureFlag
  timesArray.forEach((time, index) => {
    if (time.time === currentHour) {
      time.color = 'present'
      futureFlag = index
    }

    timesArray.forEach((item, index) => {
      if (index < futureFlag) {
        item.color = 'past'
      }
    })
  })
}

function saveInputData(event) {
  // select the relevant textbox
  const userInfo = event.currentTarget.parentElement.previousElementSibling

  // control which array value to update
  const key = userInfo.dataset.key
  timesArray[key].value = userInfo.value

  // saves input from textarea to local storage
  localStorage.setItem('userData', JSON.stringify(timesArray))
}

function getInputData() {
  // grab data from localstorage to populate timeblocks
  if (localStorage.getItem('userData')) {
    timesArray = JSON.parse(localStorage.getItem('userData'))

    // check if it's same day data
    if (timesArray[0].day !== currentCalendarDay) {
      resetArrayData()
    }
  }
}

function resetArrayData() {
  timesArray.forEach((item) => {
    item.day = currentCalendarDay
    item.value = ''
  })
}
