// -----auto text start here
let auto_text = document.querySelector(".auto-text");
		let careers = ['Company Name'];
		let careerIndex = 0;
		let characterIndex = 0;

		function updateText(){
			
			characterIndex++;
			auto_text.innerHTML = `${careers[careerIndex].slice(0, characterIndex)}`;

			if(characterIndex === careers[careerIndex].length){
				careerIndex++;
				characterIndex = 0
			}

			if(careerIndex === careers.length){
				careerIndex = 0;
			}

			setTimeout(updateText, 500);
			
		}
		updateText()
// -----auto text end here