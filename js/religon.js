$(document).ready(function(){
	var GetRandom = function(a) { return a[Math.floor(Math.random()*a.length)]; }

	var escapeRegExp = function(str) 
	{
		return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}

	var replaceAll = function(str, find, replace) 
	{
		return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	}

	religon = {
		welcome:GetRandom(["Welcome traveler,", "So, you want to learn more about us?", "Thank you for joining us today.", "We knew you were coming, please read on.", "Welcome. You need this more than you think.", "Have you told your kids about us yet?"]),
		follower_type:GetRandom(["Faithful Followers Of The", "Communion Of The", "Cult Of The", "Paragon Of The", "Order Of The", "Those Who Follow The"]),
		name_base:GetRandom(["One God", "Gods", "Messiah", "Swamp Beast", "Three Gods", "Sun", "Joel", "Moon", "Grape Vine", "Promised Sodom", "Holy Fist", "Brutal Testament", "Lovely Kitten", "Cherished One", "Young Gentlemen"]),
		profit_firstname:GetRandom(["Kenneth", "Larry", "Edward", "Dennis", "Charles", "Stephen", "Kaylee", "Anthony", "Frank", "Brian", "Bruce", "Dick", "Richard", "Glenn", "Benjamin", "Dwight"]),
		profit_lastname:GetRandom(["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez"]),
		founded_year:Math.floor(Math.random()*85)+1930,
		kinds_of_people:["the poor", "the helpless", "the hungry", "the sexually frustrated", "the lost", "the unworthy", "the uneducated", "the female", "the male", "the tall", "the short", "the skinny", "the fat", "the well behaved", "the proper", "the misbehaved", "the ugly", "the pretty", "the sad", "the happy", "the confused", "the young", "the old", "the middle aged"],
		acts_to_people:["help", "feed", "guide", "raise", "fondle", "educate", "think about", "ignore", "stay focused on", "steal from", "never steal from", "teach sports to", "play games with", "commit adultery with", "covet", "honor", "remember", "fight"],
		act_conditions:["should", "should not", "shall never", "might sometimes", "should with vigilance", "quickly must", "absolutely never"],
		commandment_count:Math.floor(Math.random()*12)+1,
	};
	religon.profit_name = religon.profit_firstname + " " + religon.profit_lastname;

	var stories = [
		"In the year {year} our profit {profit} was blessed with a visit by the {messiah}. In an act of unspeakable wisdom, The {messiah} managed to find us wandering in the darkness. Through the {messiah} we were able to find the light, but must stay vigilant to stay on the righteous path. {profit} guides us daily in our struggle and helps us follow these {commandment_count} commandments."
	];

	religon.story = GetRandom(stories);
	religon.story = replaceAll(religon.story, "{year}", religon.founded_year);
	religon.story = replaceAll(religon.story, "{profit}", religon.profit_name);
	religon.story = replaceAll(religon.story, "{messiah}", religon.name_base);
	religon.story = replaceAll(religon.story, "{follower_type}", religon.follower_type);
	religon.story = replaceAll(religon.story, "{commandment_count}", religon.commandment_count+'');


	$religon = $('#religon');

	var $welcome = $('<h4>');
	$welcome.appendTo($religon);

	var $prefix = $('<h2>');
	$prefix.appendTo($religon);

	var $title = $('<h1>');
	$title.appendTo($religon);

	var $story = $('<p>');
	$story.appendTo($religon);

	var $ul = $('<ul>');
	for(var i = 0; i < religon.commandment_count; ++i)
	{
		$ul.append('<li>You ' + GetRandom(religon.act_conditions) + ' ' + GetRandom(religon.acts_to_people) + ' ' + GetRandom(religon.kinds_of_people) + ' people.</li>');
		
	}
	$ul.appendTo($religon);

	$welcome.text(religon.welcome);
	$prefix.text('We Are The ' + religon.follower_type);
	$title.text(religon.name_base);
	$story.text(religon.story);


});