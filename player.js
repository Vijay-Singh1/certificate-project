// var productData = {
//     id: "1",
//     name: "Men Navy Blue Solid Sweatshirt",
//     preview:
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
//     photos: [
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
//     ],
//     description:
//       "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
//     size: [1, 1, 0, 1, 0],
//     isAccessory: false,
//     brand: "United Colors of Benetton",
//     price: 2599,
//   };
var href=location.href
var m=href.charAt(href.length-1)
var k=m.toString()
console.log(k)





$.get(`detailplayer.json`, function abc(response) {
    const obj = response;

  teamscard(obj[k])


})




function teamscard(res){
   
    for(i=0;i<=res.length-1;i++){

console.log(res)
    



  var main = document.getElementById("main-wrapper");

  main.innerHTML=`<div class="img"><img src=${res[i].preview}></div>
  <div class="detail">
      <h1 class="name">${res[i].name}</h1>
      <h3 class="from">${res[i].from}</h3>
      <h3 class="playing">${res[i].playingStatus}</h3>
      <h3 class="price">${res[i].price}</h3>
      <h3 class="desc">${res[i].description}</h3>
  </div>`
  
  

}}