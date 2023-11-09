async function startTime() {
  const today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('time').innerHTML = h + ':' + m + ':' + s
  setTimeout(startTime, 1000)
}

async function timeAhead() {
  // clearTimeout(timeAheadTimeout)
  const time = new Date()
  let h = time.getHours() + 8
  let m = time.getMinutes()
  let s = time.getSeconds()

  h = checkHour(h)
  m = checkTime(m)
  s = checkTime(s)

  document.getElementById('timeAhead').innerHTML = h + ':' + m + ':' + s
  timeAheadTimeout = setTimeout(timeAhead, 1000)
}

function clearTime() {
  document.getElementById('timeAhead').innerHTML = ''
  clearTimeout(timeAheadTimeout)
}

function checkHour(h) {
  if (h > 24) {
    h = h - 24
  }
  return h
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

startTime()
