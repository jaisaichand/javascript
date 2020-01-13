//variables
 const tweetList = document.getElementById("tweet-list");
//event Listeners
    eventListeners();


    function eventListeners(){
        document.querySelector("#form").addEventListener('submit',newTweet);

        //remove tweet from list
        tweetList.addEventListener('click',removeTweet);

        //document
        document.addEventListener('DOMContentLoaded',localStorageOnLoad);
    }

//functions

function newTweet(eve){
    eve.preventDefault();
    
    const tweet = document.getElementById("tweet").value;

    //create a remove button

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    

   // create an li element

   const li =document.createElement('li');
   li.textContent =tweet;
   

   // add remove button to each tweet that will be created
    li.appendChild(removeBtn);
   // add to the list
    tweetList.appendChild(li);
    //add to local storage

    addTweetLocalStorage(tweet);
    this.reset();
}

function removeTweet(eve){
    if(eve.target.classList.contains('remove-tweet')){
        eve.target.parentElement.remove();
    }
    removeTweetLocalStorage(eve.target.parentElement.textContent);
}



//addd tweet to local storage

function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();
    //add the tweet to array
    tweets.push(tweet);

    //convert tweet array into string
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //get values,, if null is returned then we create empty array
    if(localStorage.getItem('tweets')==null){
        tweets = [];
    }
    else{
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();
    //loop through storage and then print values
    tweets.forEach(function(tweet){
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
    
        
    
       // create an li element
    
       const li =document.createElement('li');
       li.textContent =tweet;
       
    
       // add remove button to each tweet that will be created
        li.appendChild(removeBtn);
       // add to the list
        tweetList.appendChild(li);
    })
}

//remove tweet from local storage
function removeTweetLocalStorage(tweet) {
    // get tweets from storage
    let tweets = getTweetsFromStorage();

    // Remove the X from the tweet

    const tweetDelete = tweet.substring( 0,tweet.length-1);

    // Loop Throught  the tweets and remove the tweet that's equal
    tweets.forEach(function(tweetLS, index) {
         if(tweetDelete === tweetLS) {
              tweets.splice(index, 1);
         }
    });

    // Save the data 
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

