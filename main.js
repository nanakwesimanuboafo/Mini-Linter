let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
// console.log(storyWords.length);

const betterWords = storyWords.filter(word => {
  for(let i= 0; i < unnecessaryWords.length; i++){
    if(!unnecessaryWords[i].includes(word)){
      return word;
    }
  }
});

const checkoverusedWords = (arr1, arr2) => {
  let appears = 0;
  arr1.forEach(element => {
    for(let j = 0; j < arr2.length; j++){
     if(element === arr2[j]){
       appears++;
     }
    }
  });
 return appears;
};
// checkoverusedWords(betterWords,overusedWords);

const checkSentences = (arr)=>{
  let sentences = 0;

  arr.forEach(word => {
    if(word[word.length-1] === '.' || word[word.length-1] === '!' ){
      sentences++;
    }
  });
  return (sentences);
};


console.log("the word count: " + betterWords.length);

console.log("the sentence count: " + checkSentences(betterWords) );
console.log("the overused word count: " +  checkoverusedWords(betterWords,overusedWords));

console.log(betterWords.join(' '));
