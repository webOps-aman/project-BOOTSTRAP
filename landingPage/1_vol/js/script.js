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
		updateText();


		let counters = document.querySelectorAll('.counter');
		counters.forEach(counter =>{
			counter.innerText = 0;

			let updateCounter = () => {
				let target = +counter.getAttribute('data-target');
				let c = +counter.innerText;
				let increment = target / 200;

				if(c < target){
					counter.innerText = `${Math.ceil(c + increment)}`;
					setTimeout(updateCounter,1);
				}else{
					 counter.innerText = target
				}
			}
			updateCounter();
		});
// -----auto text end here