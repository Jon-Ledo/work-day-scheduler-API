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
  { time: '9am', color: 'past', value: '', key: 0 },
  { time: '10am', color: 'past', value: '', key: 1 },
  { time: '11am', color: 'past', value: '', key: 2 },
  { time: '12pm', color: 'past', value: '', key: 3 },
  { time: '1pm', color: 'past', value: '', key: 4 },
  { time: '2pm', color: 'past', value: '', key: 5 },
  { time: '3pm', color: 'past', value: '', key: 6 },
  { time: '4pm', color: 'past', value: '', key: 7 },
  { time: '5pm', color: 'past', value: '', key: 8 },
  { time: '6pm', color: 'past', value: '', key: 9 },
  { time: '7pm', color: 'past', value: '', key: 10 },
  { time: '8pm', color: 'past', value: '', key: 11 },
  { time: '9pm', color: 'past', value: '', key: 12 },
  { time: '10pm', color: 'past', value: '', key: 13 },
  { time: '11pm', color: 'past', value: '', key: 14 },
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
      if (index > futureFlag) {
        item.color = 'future'
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
  // grab data from localstorage to populate timeblocks (assuming its same day)
  if (localStorage.getItem('userData')) {
    timesArray = JSON.parse(localStorage.getItem('userData'))
  }
}
