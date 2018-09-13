

var nums = ['fefe','monster', 'Yoko', 'aurora', 'dog'];
let counter = 0;




// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the cat we're on...
    var num = nums[i];
    let dict = {};
    dict[num[i]]= counter;
    

    // We're creating a DOM element for the cat
    var catPics = document.createElement('IMG');
    catPics.src = ('img/fefe.jpg');

    
    //create the list of cats
    let catNames = document.createElement('LI');
    document.getElementById('catsName').appendChild(catNames);
    catNames.innerHTML = num;


    // when we click, the cat name the right catPic will show 
    catNames.addEventListener('click', (function(numCopy) {
        return function() {
            catPics.src = ('img/' + numCopy + '.jpg');

            
            document.body.appendChild(catPics);
            
        };
    })(num));

    catPics.addEventListener('click', function(){
        counter ++;

        document.getElementById('counter').innerHTML = counter;   

    });

        
}