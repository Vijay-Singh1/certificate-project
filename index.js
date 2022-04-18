
  





var count=1
var $slider=$(".slider");
var slides=$slider.children()

var slideCount=$slider.children().length

setInterval(function(){
  $slider.animate({
    marginLeft:"-=1000px"
  },400,function(){
    count++
    if(count===slideCount){
      count=1
      $(this).css("margin-left","0px")
    }
  })
},2000)


// slider ends

var teamsList = [
    {
      id: "1",
      name: "Royal Challenger Bangluru",
      sname:"RCB",
      preview:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",

      PlayerCount:"Number of Players : 10",
        
        isTeam: true,
     
        TopBatter: "Top Batter : Virat-kohli",
        TopBowler: "Top Bowler : Harshal Patel",
        titleWon:"Title Won-5"
    },
    {
      id: "2",
      name: "Chennai Super Kings",
      sname:"CSK",
      preview:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
  
  
      PlayerCount:"Number of Players : 10",
        
        isTeam: true,
     
        TopBatter: "Top Batter : Robin Uthappa",
        TopBowler: "Top Bowler : Ravinder Jadeja",
        titleWon:"Title Won-5"
    },
    {
      id: "3",
      name: "Mumbai Indians",
      sname:"MI",
      preview:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
   
      PlayerCount:"Number of Players : 10",
        
        isTeam: true,
     
        TopBatter: "Top Batter :Ishan Kishan",
        TopBowler: "Top Bowler : Jasprit Bumrah",
        titleWon:"Title Won-5"
    },
    {
      id: "4",
      name: "Kolkata Knight Riders",
      sname:"KKR",
      preview:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
 
    PlayerCount:"Number of Players : 10",
        
    isTeam: true,
  
    TopBatter: "Top Batter :Andre Russel",
    TopBowler: "Top Bowler : Varun Chakravarthy",
    titleWon:"Title Won-5"
    },
    {
      id: "5",
      name: "SunRisers Hydrabad",
      sname:"SRH",
      preview:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
   
   
    PlayerCount:"Number of Players : 10",
        
    isTeam: true,
  
    TopBatter: "Top Batter : Kane Williamsan",
    TopBowler: "Top Bowler : Umran Malik",
    titleWon:"Title Won-5"
    },
    {
      id: "6",
      name: "Rajasthan Royals",
      sname:"RR",
      preview:
        "https://i.pinimg.com/originals/ce/b7/04/ceb7040289e35b9a2358cf18bb6a9315.png",
  
  
    PlayerCount:"Number of Players : 10",
        
    isTeam: true,
  
    TopBatter: "Top Batter : Jos Buttler",
    TopBowler: "Top Bowler : Trent Boult",
    titleWon:"Title Won-5"
    },
    {
      id: "7",
      name: "Lucknow Super Giants",
      sname:"LSG",
      preview:
        "https://static.toiimg.com/thumb/msid-89248103,imgsize-29332,width-400,resizemode-4/89248103.jpg",
  
    PlayerCount:"Number of Players : 10",
        
    isTeam: true,
  
    TopBatter: "Top Batter : KL Rahul",
    TopBowler: "Top Bowler : Ravi Bishnoi",
    titleWon:"Title Won-5"
    },
    {
      id: "8",
      name: "Gujrat Titans",
      sname:"GT",
      preview:
        "https://gumlet.assettype.com/thequint/2022-02/00692fea-8374-4227-8cc6-c6383903e5cb/FMCjbb3aIAUXqbB.jpg",
    
  
    PlayerCount:"Number of Players : 10",
        
    isTeam: true,
  
    TopBatter: "Top Batter : Shubhman Gill",
    TopBowler: "Top Bowler : Rashid Khan",
    titleWon:"Title Won-5"
    },
    {
      id: "9",
      name: "Dehli Capitals",
      sname:"DC",
      preview:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png",
  
  
    PlayerCount:"Number of Players : 10",
        
    isTeam: true,
  
    TopBatter: "Top Batter : David Warner",
    TopBowler: "Top Bowler : Shardul Thakur",
    titleWon:"Title Won-5"
    },
    {
      id: "10",
      name: "Kings XI Punjab",
      sname:"KIP",
      preview:
        "https://cdn.wionews.com/sites/default/files/inline-images/KingsPunjab.jpg",
   
  
    PlayerCount:"Number of Players : 10",
        
    isTeam: true,
  
    TopBatter: "Top Batter : Shikhar Dhawan",
    TopBowler: "Top Bowler : Rahul Chahar",
    titleWon:"Title Won-5"
    },
  ];


for(i=0;i<teamsList.length;i++){
   cards(teamsList[i].name,teamsList[i].preview,teamsList[i].PlayerCount,teamsList[i].TopBatter,teamsList[i].TopBowler,teamsList[i].titleWon,teamsList[i].sname)

    }

function cards(){


   


var a = document.getElementById("card-wrapper")


a.innerHTML+=`<div class="team-card" id="${i+1}" onclick="mclick(${[i]})">

<img src=${teamsList[i].preview} alt="" class="img">
<h2 class="name">${teamsList[i].name}</h2>
<h6 class="Player-count">${teamsList[i].PlayerCount}</h6>
 <h2 class="Top-Batter">${teamsList[i].TopBatter}</h2> 
 <h2 class="Top-Bowler">${teamsList[i].TopBowler}</h2> 
 <h2 class="title-won">${teamsList[i].titleWon}</h2> 
 
</div>`

}

      
  
  
    









function mclick(w) {

    location.assign("http://127.0.0.1:5502/teams.html?"+w)
    
   
    
    }




    var ad = document.getElementById("addplayers")
    console.log(ad)


    ad.addEventListener("click", function(){  
      location.assign("http://127.0.0.1:5502/teams.html?"+w)

    });

