const textarea = document.querySelector("textarea"),
voiceList = document.querySelector("select"),
speechBtn = document.querySelector("button");

let synth = window.speechSynthesis,
isSpeaking = true;

voices();

function voices(){
	for(let voice of synth.getVoices()){
		let selected = voice.name === "Google US English" ? "selected" : "";
		let option ='<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>';
		voiceList.insertAdjacentHTML("beforeend", option);
}}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
	let utternance = new SpeechSynthesisUtterance(text);
	for(let voice of synth.getVoices()){
		if(voice.name === voiceList.vale){
			utternance.voice = voice;
		}
	}
	synth.speak(utternance);
}

speechBtn.addEventListener("click", e =>{
	e.preventDefault();
	if(textarea.value !== ""){
		if(!synth.speaking){
		textToSpeech(textarea.value);
	}
	if(textarea.value.length > 80){
		if(isSpeaking){
			synth.resume();
			isSpeaking = false;
			speechBtn.innerText = "Pause";
		}else {
			synth.pause();
			isSpeaking = true;
			speechBtn.innerText = "Resume";
		}
		
		setInterval(() =>{
			if(!synth.speaking && !isSpeaking){
				isSpeaking = true;
				speechBtn.innerText = "Play";
			}
		});
	}else{
		speechBtn.innerText = "Play";
	}
	
	}
}
);