window.addEventListener("keydown", function (e) {
      let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
      if (!sound) return
      sound.currentTime = 0
      sound.play()
      // console.log(key)
       key.classList.add('playing')
      setTimeout(() => {
           key.classList.remove('playing')
      }, "70");
})