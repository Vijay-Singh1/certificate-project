
var href=location.href
var n=href.charAt(href.length-1)
var l=n.toString()
console.log(l)





$.get(`details.json`, function abc(response) {
    const obj = response;

  teamscard(obj[l])


})




function teamscard(res){
   
    for(i=0;i<=res.length-1;i++){

var a = document.getElementById("team-member")
     a.innerHTML+=`<div class="teams-cards" onclick="nclick(${[i]})" >
     <img src=${res[i].preview} alt="" class="img">
     <h2 class="name">${res[i].name}</h2>
     <h6 class="Player-count">${res[i].from}</h6>
      <h2 class="Top-Batter">${res[i].playingStatus}</h2> 
      <h2 class="Top-Bowler">${res[i].price}</h2> 
      <h2 class="title-won">${res[i].description}</h2> 
      
     </div>`
    }
    }
    

    function nclick(x) {

      location.assign("http://127.0.0.1:5502/player.html?"+x)
      
     
      
      }
    

