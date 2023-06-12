const latestRightSide=document.getElementsByClassName("lates-right-side")[0]


window.addEventListener('DOMContentLoaded',melumatlariGetir)

async function melumatlariGetir(){
    const unvan="http://jsonplaceholder.typicode.com/posts"
    try{
        const servereAtilanIstek = await fetch(unvan)
        const gelenCavabJson = await servereAtilanIstek.json()
        console.log(servereAtilanIstek);
       for(Let i=0; i<100; i++){
        latestRightSide.innerHtml '<div class="blog">
        <span class="metadata">April 16, 2021, 6 mins</span>
        <h3>${gelenCavabJson[i].title}</h3>
    <a href="">${gelenCavabJson[1].id}</a>
    </div>'
      
   }
    }
}