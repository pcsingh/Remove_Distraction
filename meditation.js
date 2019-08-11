var status = 'none'
var audio = document.createElement('audio')

audio.setAttribute('src', 'far_from_world.mp3')
audio.setAttribute('loop', 'true')

  function audio_control() {
    switch (status) {
      case 'none':
        audio.play()
        audio.volume = 0.5
        status = 'low'
        break
      case 'low':
        audio.volume = 1
        status = 'high'
        break
      case 'high':
        audio.pause()
        status = 'none'
        break
    }
/*
    chrome.browserAction.setIcon({
      path: {
        "16": "images/" + status + "16x16.png",
        "32": "images/" + status + "32x32.png"
      }
    })
*/
  }

chrome.browserAction.onClicked.addListener(audio_control)