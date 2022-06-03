
(async() => {
  let images = Object.values(document.getElementsByTagName('img'));

  try {
    let response = await fetch('https://random-word-api.herokuapp.com/all');
    let altText = await response.json() 
    for (let i = 0; i < images.length ; i++) {
      images[i].setAttribute('alt', altText[i])
     }
  } catch(err)
  {
   console.log(err, 'There is an error fetching the API')
  }
  
})()
