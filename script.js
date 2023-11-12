let snapshotTime

function startTime() {
  const today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('time').innerHTML = h + ':' + m + ':' + s
  setTimeout(startTime, 1000)
}

function takeSnapshot(i) {
  const currentTime = new Date()
  let h = currentTime.getHours() + i
  let m = currentTime.getMinutes()
  h = checkHour(h)
  m = checkTime(m)
  snapshotTime = h + ':' + m
  document.getElementById('timeAhead').innerHTML = snapshotTime
}

function clearTime() {
  document.getElementById('timeAhead').innerHTML = ''
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
