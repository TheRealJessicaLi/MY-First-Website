var quotes = [
'\"Most Trees Are Blue\" -Jaden Smith',
'\"How Can Mirrors Be Real If Our Eyes Aren\'t Real\" <br>-Jaden Smith',
'\"if you drop the soap on the ground.. is the floor clean or the soap dirty?\" <br>-Jaden Smith',
'\"I\'m not superstitious, but I am a little stitious.\" <br>-Michael Scott',
'\"Early worm gets the worm.\" <br>-Michael Scott',
'\"I. DECLARE. BANKRUPTCY\" <br>-Michael Scott',
'\"I wonder if king sized sheets are called presidential sized in England. I really should have a Tweeter account.\" <br>-Dwight Schrute',
'\"The worst thing about prison was the Dementors\" <br>-Prison Mike',
'\"Well, well, well...How the turntables\" <br>-Michael Scott',
'\"Never half-ass two things. Whole-ass one thing.\" <br>-Ron Swanson',
'\"There\'s only one thing I hate more than lying: skim milk. Which is water that\'s lying about being milk.\" <br>-Ron Swanson',
'Our greatest glory is not in never falling, but in rising every time we fall. <br>-Confucius',
'Everything you\'ve ever wanted is on the other side of fear. <br>-George Addair',
'Believe you can and you\'re halfway there. <br>-Theodore Roosevelt',
'Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change. <br>-Unknown',
'Strength does not come from physical capacity. It comes from an indomitable will. <br>-Mahatma Gandhi',
'Life is 10% what happens to you and 90% how you react to it. <br>-Charles R. Swindoll',
'We may encounter many defeats but we must not be defeated. <br>-Maya Angelou',
'Twenty years from now you will be more disappointed by the things you didn\'t do than by the things you did. <br>-Mark Twain',
'\"If I can\'t scuba, then what\'s this all been about?\" <br>-Creed Bratton',]

function newQuote(){
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
} 
