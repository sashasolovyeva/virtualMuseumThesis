var apiKey = '563492ad6f91700001000001c01b0a2f3e2c48cea0344df045f7f0aa';

function getPhotos(images) {
  let randomPic = Math.floor(Math.random() * 30);

  while(!images[randomPic]){
    randomPic = Math.floor(Math.random() * 30);
    console.log(randomPic)
  }

  apiPic = $('<img />', {src: images[randomPic].src.medium, class: 'apipic', id: 'apipic1',}).appendTo($('#apipics'));

  let randomPic2 = Math.floor(Math.random() * 30);

  while(!images[randomPic2] || randomPic2 == randomPic){
    randomPic2 = Math.floor(Math.random() * 30);
    console.log(randomPic2)
  }

  apiPic2 = $('<img />', {src: images[randomPic2].src.medium, class: 'apipic', id: 'apipic2',}).appendTo($('#apipics'));

}

fetch("https://api.pexels.com/v1/search?query=museum-exhibition?per_page=50",{
  headers: {
    Authorization: apiKey
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     $('button').click(function(event){
       getPhotos(data.photos);
     })
   })
