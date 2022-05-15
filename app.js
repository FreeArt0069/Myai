const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const pisot = ['yes kaila ko pisot na siya', 'oo bahu siya tik tik'];
const greetings = ['I am Good my darling', 'Great so whats next',
'Please speak clearly OK!'];
const answer1 = ['My name is ella, How about you?', 'Huh, My name is ella, How about you?',
'Hey, My name is ella, How about you?'];
const answer2 = ['secret heehheehheeheeheeheehe can you be my boyfriend? are you single? available?'];
const answer3 = ['simple question', 'Go research please!', 'hahays,I\'m so tired you know'];
const answer4 = ['Simple Question', 'Blaaah, Blaaah! Blaah!', 'Figure it your self'];
const answer5 = ['I\'m so sleepy can you come back later or never'];
const answer6 = ['Nice name', 'So cute', 'Wow nice', 'Love it'];
const answer7 = ['yeah', 'yeees', 'hehehe'];
const answer8 = ['2', '2 OK', '2'];
const answer9 = ['maybe', 'I dont like it kassie', 'Yes, Because I dont like it kasi'];
const answer10 = ['I hate youuu', 'I hate youuu nahh', 'I hate you huh huh huh you make me cry you know'];
const answer11 = ['I said I hate you', 'I said I hate yoou nahh', 'I said! I hate you huhuuh you make me cry you know'];
const answer12 = ['I\'m eighteen years old', 'I\'m eighteen years old', 'I\'m eighteen years old you know'];
const answer13 = ['Thank you', 'Thank you very much', 'I know thank you'];
const answer14 = ['Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way. She had met Carrie on her first day at her new school\', \'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way - one she didn\'t want to attend. She had her dad to thank for that.\'Why have we got to move?\' Sherry had asked him.\'Because I\'ve got a new job,\' her father answered with a look of superiority - a look he usually adopted when he thought he was right. He was never right as far as Sherry was concerned.   to be continue,  come back next year. can you?', 'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way. She had met Carrie on her first day at her new school\', \'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way - one she didn\'t want to attend. She had her dad to thank for that.\'Why have we got to move?\' Sherry had asked him.\'Because I\'ve got a new job,\' her father answered with a look of superiority - a look he usually adopted when he thought he was right. He was never right as far as Sherry was concerned.   to be continue,  come back next year. can you?', 'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way. She had met Carrie on her first day at her new school\', \'Sherry was looking for her mate Carrie\'s house. She was lost. Then she saw a boy walking towards her. She stopped to asked him the way - one she didn\'t want to attend. She had her dad to thank for that.\'Why have we got to move?\' Sherry had asked him.\'Because I\'ve got a new job,\' her father answered with a look of superiority - a look he usually adopted when he thought he was right. He was never right as far as Sherry was concerned.   to be continue,  come back next year. can you?'];
const answer15 = ['information technology simple definition?is building communications networks for a company, safeguarding data and information, creating and administering databases, helping employees troubleshoot problems with their computers or mobile devices\, or doing a range of other work to ensure the efficiency and security of business information'];
const answer16 = ['A variable is any characteristics, number, or quantity that can be measured or counted. A variable may also be called a data item. Age, sex, business income and expenses, country of birth, capital expenditure, class grades, eye colour and vehicle type are examples of variables.'];
const answer17 = ['A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error.....The data types to know are:String (or str or text). Used for a combination of any characters that appear on a keyboard, such as letters, numbers and symbols.Character (or char). Used for single letters.Integer (or int). Used for whole numbers.Float (or Real). ...Boolean (or bool)....is that clear?'];
const answer18 = ['gamay ra uy, usahay naga damgo ako, heheh, nganong ipa bisaya ko nimo! basin masumbag tana imohang agtang bukol jud ka kol'];
const answer19 = ['maybe you are! e.kaaw.ra.uy'];
const answer20 = ['hi'];
const answer21 = ['good morning too'];
const answer22 = ['Nice Meeting you too'];
const answer23 = ['good afternoon! too'];
const answer24 = ['good Night my darling'];
const answer25 = ['good Evening too'];
const answer26 = ['my friend, troy iraq israel'];
const answer27 = ['no! i\'m not crazy maybe you are crazy. hehe'];
const answer28 = ['haha, are you sure , okay! haha , bagay tayo'];
const answer29 = ['For God so loved the world He gave us Him only Son Jesus Christ our Savior His most precious One He has sent us His message of love And sends those who hear To bring the message to everyone In a voice loud and clear Let us tell the world of His love The greatest love the world has known Search the world for those who have walked Astray and lead them home Fill the world\'s darkest corners With His light from up above Walk every step, every mile, every road And tell the world, tell the world of His love'];
const answer30 = ['Yes, I\'m very happy talking to you'];
const answer31 = ['because your crazy, haha, crazy inlove with me'];

const SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition || andriod.SpeechRecognition ;
const recognition = new SpeechRecognition();
recognition.onstart = function() {
	console.log('voice is activated, you can speak to microphone');
};
recognition.onresult = function(event) {	
	const current = event.resultIndex;
	
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutloud(transcript);
};

btn.addEventListener('click', () => {
	recognition.start();
});
function readOutloud(message){
	const speech = new SpeechSynthesisUtterance();
	speech.text = 'I dont understant, Speak clearly pleeasse';
	if(message.includes('sanji')) {
		const finalText =
		pisot[Math.floor(Math.random() * pisot.length)];
		speech.text = finalText;
	}
	
	if(message.includes('how are you')) {
		const finalText =
		greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}
	if(message.includes('your name')) {
		const finalText =
		answer1[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}
	if(message.includes('ka')) {
		const finalText =
		answer4[Math.floor(Math.random() * answer4.length)];
		speech.text = finalText;
	}
	if(message.includes('have a boyfriend')) {
		const finalText =
		answer2[Math.floor(Math.random() * answer2.length)];
		speech.text = finalText;
	}
	if(message.includes('my name is')) {
		const finalText =
		answer6[Math.floor(Math.random() * answer6.length)];
		speech.text = finalText;
	}
	if(message.includes('can you help me')) {
		const finalText =
		answer7[Math.floor(Math.random() * answer7.length)];
		speech.text = finalText;
	}
	if(message.includes('what is science')) {
		const finalText =
		answer9[Math.floor(Math.random() * answer9.length)];
		speech.text = finalText;
	}
	if(message.includes('do you know mathematics')) {
		const finalText =
		answer9[Math.floor(Math.random() * answer9.length)];
		speech.text = finalText;
	}
	if(message.includes('i thought you know')) {
		const finalText =
		answer10[Math.floor(Math.random() * answer10.length)];
		speech.text = finalText;
	}
	if(message.includes('what did you say')) {
		const finalText =
		answer11[Math.floor(Math.random() * answer11.length)];
		speech.text = finalText;
	}
	if(message.includes('how old are you')) {
		const finalText =
		answer12[Math.floor(Math.random() * answer12.length)];
		speech.text = finalText;
	}
	if(message.includes('you are beautiful')) {
		const finalText =
		answer13[Math.floor(Math.random() * answer13.length)];
		speech.text = finalText;
	}
	if(message.includes('tell a story')) {
		const finalText =
		answer14[Math.floor(Math.random() * answer14.length)];
		speech.text = finalText;
	}
	if(message.includes('what is information technology')) {
		const finalText =
		answer15[Math.floor(Math.random() * answer15.length)];
		speech.text = finalText;
	}
	if(message.includes('what is a variable')) {
		const finalText =
		answer16[Math.floor(Math.random() * answer16.length)];
		speech.text = finalText;
	}
	if(message.includes('what is a data type')) {
		const finalText =
		answer17[Math.floor(Math.random() * answer17.length)];
		speech.text = finalText;
	}
	if(message.includes('do you speak bisaya')) {
		const finalText =
		answer18[Math.floor(Math.random() * answer18.length)];
		speech.text = finalText;
	}
	if(message.includes('what the')) {
		const finalText =
		answer18[Math.floor(Math.random() * answer18.length)];
		speech.text = finalText;
	}
	if(message.includes('amo')) {
		const finalText =
		answer19[Math.floor(Math.random() * answer19.length)];
		speech.text = finalText;
	}
	if(message.includes('hello')) {
		const finalText =
		answer20[Math.floor(Math.random() * answer20.length)];
		speech.text = finalText;
	}
	if(message.includes('good morning')) {
		const finalText =
		answer21[Math.floor(Math.random() * answer21.length)];
		speech.text = finalText;
	}
	if(message.includes('nice meeting you')) {
		const finalText =
		answer22[Math.floor(Math.random() * answer22.length)];
		speech.text = finalText;
	}
	if(message.includes('good afternoon')) {
		const finalText =
		answer23[Math.floor(Math.random() * answer23.length)];
		speech.text = finalText;
	}
	if(message.includes('good night')) {
		const finalText =
		answer24[Math.floor(Math.random() * answer24.length)];
		speech.text = finalText;
	}
	if(message.includes('good evening')) {
		const finalText =
		answer25[Math.floor(Math.random() * answer25.length)];
		speech.text = finalText;
	}
	if(message.includes('who created you')) {
		const finalText =
		answer26[Math.floor(Math.random() * answer26.length)];
		speech.text = finalText;
	}
	if(message.includes('are you crazy')) {
		const finalText =
		answer27[Math.floor(Math.random() * answer27.length)];
		speech.text = finalText;
	}
	if(message.includes('bagay tayo')) {
		const finalText =
		answer28[Math.floor(Math.random() * answer28.length)];
		speech.text = finalText;
	}
	if(message.includes('god')) {
		const finalText =
		answer29[Math.floor(Math.random() * answer29.length)];
		speech.text = finalText;
	}
	if(message.includes('are you happy')) {
		const finalText =
		answer30[Math.floor(Math.random() * answer30.length)];
		speech.text = finalText;
	}
	if(message.includes('why')) {
		const finalText =
		answer31[Math.floor(Math.random() * answer31.length)];
		speech.text = finalText;
	}
	
	
	speech.volume = 200;
	speech.rate = .89;
	speech.pitch = 70;
	
	window.speechSynthesis.speak(speech);
}