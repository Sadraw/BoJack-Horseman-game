const quotes = [
    'We\'re just two lonely people trying to hate ourselves a little less.',
    'Sometimes I feel like I was born with a leak, and any goodness I started with just slowly spilled out of me, and now it\'s all gone.',
    'I don\'t understand how people… live. It\'s amazing to me that people wake up every morning and say: \'Yeah, another day, let\'s do it.',
    'Settle. Because otherwise you\'re just gonna get older and harder, and more alone. And you\'re gonna do everything you can to fill that hole, with friends, and your career, and meaningless sex, but the hole doesn\'t get filled.',
    'Before I leapt, I should have seen the view from halfway down.',
    'Every happy ending has the day after the happy ending.',
    'Either you know what you want and then you don\'t get what you want, or you get what you want and then you don\'t know what you want.',
    'There\'s no deep down. I believe that all we are is what we do.',
    'Things don\'t become traditions because they\'re good, BoJack, they become good because they\'re traditions.',
    'Sometimes I feel like my whole life is just a series of loosely-related wacky misadventures.',
    'You are all the things that are wrong with you.',
    'I don\'t know how you expect me to love you when you so clearly hate yourself.',
    'You gotta get your shit together. So you took some licks, but you\'re gonna bounce back! Because you\'re talented, you\'re smart, and damn it, you\'re good.',
    'My life is a mess right now and I compulsively take care of other people when I don\'t know how to take care of myself.',
    'I\'m at a place where I don\'t need to grow as a person and can constantly surround myself with sycophants and enablers until I die tragically young.',
    'Yeah, I wanted a change in my life. Because, I heard if you stop doing drugs for a while, the first time you do them again it\'s amazing.',
    'I\'m this close to falling off the deep end. I know I\'m smiling right now, but the light inside me is dying.',
    'The universe is a cruel, uncaring void, The key to being happy isn\'t a search for meaning. It\'s to just keep yourself busy with unimportant nonsense, and eventually, you\'ll be dead.',
    'And finally, "I gotta say I am having the time of my life being depressed.',

];

let words = [];
let wordIndex = 0;

// the starting time 
let startTime = Date.now();

// page elements 
const quoteElement      = document.getElementById('quote');
const messageElement    = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const gamePlay          = document.getElementById("typed-value");

 document.getElementById('start').addEventListener('click', () => {

    gamePlay.disabled = false;

     // generate a random number between 0 and the length of quotes array

     const quoteIndex    = Math.floor(Math.random() * quotes.length);

     // assign the number to quote 

     const quote         = quotes[quoteIndex];

     // put the quote into an array of words 
     // splits the quote into an array of words by using the split() method
     // and passing in a space character (' ') as the separator.

     words               = quote.split(' ');

     // reset the word index for tracking
     // reset wordIndex variable to 0, which will be used to keep track of which 
     // word in the quote is currently being displayed

     wordIndex           = 0;


     // UI updates
     // create an array of span elements so we can set a class
    
     const spanWords = words.map(function(word) { return `<span>${word} </span>`});

     // convert into string and set as innerHTML on quote display

     quoteElement.innerHTML = spanWords.join('');

     // highlight the first word 

     quoteElement.childNodes[0].className = 'highlight';

     //clear any prior messages

     messageElement.innerText = '';


     // setup the text-box
     // clear the text-box

     typedValueElement.value = '';

     // set focus 

     typedValueElement.focus();

     // set the event handler 

     // start the timer 

     startTime = new Date().getTime();

});


// typing logic

typedValueElement.addEventListener('input', () => {
    
    //Get the current word 
    const currentWord = words[wordIndex];

    // get the current value 
    const typedValue  = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // end of sentence 
        // display success 
        const elapsedTime = new Date().getTime() - startTime;
        const message     = alert(`Congratulations! You finished in ${elapsedTime / 1000 } seconds.`);
        messageElement.innerText = message;
        gamePlay.disabled = true;
        return;

    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        
        // end of word 
        //clear the typedValueElement for the new word
        
        typedValueElement.value = '';

        // move to the next word 
        wordIndex ++; 
        // reset the class name for all elements in quote 
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
            
        }
        // highlight the new word 
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        // currently correct 
        // highlight the next word 
        typedValueElement.className = '';
    } else {
        // error state 
        typedValueElement.className = 'error';
    }

    if(document.getElementById("typed-value".disabled == true)) {
        
    }


})
