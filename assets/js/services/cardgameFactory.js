oceanGame.factory('cardgameFactory', function() {
	var questions = [
		{
			question: "https://farm3.staticflickr.com/2081/1580329208_e6178f2b83_n.jpg",
			options: ["Coral", "Jellyfish", "Squid", "Umbrella"],
			answer: 1
		},
		{
			question: "https://farm1.staticflickr.com/199/499200079_a4301c920b_n.jpg",
			options: ["Humpback Whale", "Orca", "Dolphin", "Gray Whale"],
			answer: 0
		},
		{
			question: "https://farm6.staticflickr.com/5155/14231557292_6b18dfffbd_n.jpg",
			options: ["Starfish", "Flower", "Coral", "Sea Anemone"],
			answer: 3
		},
		{
			question: "https://farm1.staticflickr.com/24/41713502_b77ab16476_n.jpg",
			options: ["Puffer Fish", "Bloat from Finding Nemo", "Blubber Fish", "Sturgeon"],
			answer: 0
		},
		{	
			question: "https://farm3.staticflickr.com/2083/2148733069_d550ba9890_n.jpg",
			options: ["Electic Ray", "Eel", "Manta Ray", "Jellyfish"],
			answer: 2
		}
	];
 
	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});


