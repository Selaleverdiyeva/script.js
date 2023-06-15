const latestRightSide = document.querySelector(".latest-right-side")


window.addEventListener('DOMContentLoaded',melumatlariGetir)

async function melumatlariGetir(){
    const unvan = "melumatlar.json"
    try{
        const servereAtilanIstek = await fetch(unvan)
        const gelenCavabJSON = await servereAtilanIstek.json()
        console.log(servereAtilanIstek);
       for(let i=0; i<gelenCavabJSON.lenght; i++){
        latestRightSide.innerHTML += `<div class="blog">
        <span class="metadata">${gelenCavabJSON[i].xeberin_paylasildigi_tarix}</span>
        <h3>${gelenCavabJSON[i].xeberin_basligi}</h3>
    <a href="">Read the article</a>
    </div>`
      
   }
    }
   catch (error) {
    console.log(error);
   }
}



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });