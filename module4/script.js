(function () {
	var names = ["Yaakov", "John", "Jen", "Jackson", 
	"Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (name in names) {
		// console.log(names[name]);
		var firstLetter = names[name].charAt(0).toLowerCase();
		if (firstLetter == "j") {
			window.goodbyeSpeaker.speak(names[name]);
		} else {
			window.helloSpeaker.speak(names[name]);
		}
	}
})();