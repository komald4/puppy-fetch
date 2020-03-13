console.log("%c🐶PUPPIES ARE AMAZING!!!🐶", "color: turquoise; font-size: 20px; font-family: Monaco;")

fetch('http://localhost:3000/puppies/4')
.then(resp=>resp.json()) 
.then(json=>puppies(json))


function puppies(json){
    console.log( `My dog is a ${json.breed} named ${json.name}. They are ${json.age} 
    months old 
    and they are pretty ${json.personality}.`)
}


fetch("http://localhost:3000/puppies/2", {
  method: "patch",
  headers: {
    'Content-Type': 'application/json',
    'accepts': 'application/json'
  },
  body: JSON.stringify({breed: "golden retriever"})
})
.then(resp=>resp.json()) 
.then(json=>puppies(json))
  // your code here
