/*function listArrayitems(arr){
 for(i = 0; i < arr.length; i++){
    if (arr[i] == 'red'){
        console.log(i*100, "tomato!");
    }else {
            console.log(i*100, arr[i]);
        }
    }
 }   


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayitems(colors);*/

function letterFinder(word, match){
    for(i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log('Found the', match, 'at', i);
        } else {
            console.log('--- No match found at', i);
        }
    }
}

letterFinder("aleksi", "k");