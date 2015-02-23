oceanGame.factory('gameFactory', function() {
	var questions = [
		{
			question: "How much of the earth's surface does the Pacific Ocean cover?",
			options: ["30%", "5%", "45%", "20%"],
			answer: 0
		},
		{
			question: "What is the average depth of the Pacific Ocean in feet?",
			options: ["6,000", "22,000", "14,000", "50,000"],
			answer: 2
		},
		{
			question: 'What does the name "Pacific" mean?',
			options: ["Grand", "Powerful", "Rapid", "Peaceful"],
			answer: 3
		},
		{
			question: "What is the biggest Hawaiian Island",
			options: ["The Big Island", "Kauai", "Maui", "Oahu"],
			answer: 0
		},
		{	
			question: "What are three continents that touch the Pacific Ocean?",
			options: ["Africa, Europe, Australia", "North America, South America, Asia", "Antarctica, North America, Africa", "South America, Antarctica, Europe"],
			answer: 1
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
