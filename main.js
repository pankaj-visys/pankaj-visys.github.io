var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://github.com/pankaj-visys/datafiles.git/schools.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);    
        renderHTML(ourData);
    }
    ourRequest.send();
});


function renderHTML(data){
    var htmlString = "";
    var loop1 = data.length;

    for (i=0; i<loop1; i++){
        var text1 = "";
        var text = "";

        for (j=0; j<data[i].foods.likes.length; j++){
            if(j==0)
            {
                text1 += " and likes " + data[i].foods.likes[j];
            }
            else 
            {
                text1 += " and "+data[i].foods.likes[j];
            }
        }

        for (k=0; k<data[i].foods.dislikes.length; k++){
            if(k==0){
                text1 += " and dislikes " + data[i].foods.dislikes[k];
            }
            else{
                text1 += " and "+data[i].foods.dislikes[k];
            }
        }
        var text = "<p>" + data[i].name + " is a " + data[i].species + "\b" + text1  + "</p>";
        htmlString += text;
    }

    animalContainer.innerHTML = htmlString;

}
