(() => {
	let keys = Array.from(document.querySelectorAll('.key'));

	keys.forEach(key => key.addEventListener('transitionend', resetKey))

	function resetKey() {
		this.classList.remove('playing');
	}


	function playSound (event) {
		//debugger;
		let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		if (!audioElement) { return }

		// if we have a match, then play the sound that gets with the keyboard key
		audioElement.currentTime = 0;
		audioElement.play();
		key.classList.add('playing');
	}


	// add an event listener to this 
	// and capture all the keyboard key presses
	window.addEventListener('keydown', playSound);


})();