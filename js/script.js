let images = ["img/Pasta1.png", "img/Pasta2.jpg", "img/Pasta3.jpg"];
let titles = ["картинка 1", "картинка 2", "картинка 3", "картинка 4" ]
const slider1 = document.querySelector(".slider1__content");
const title1 = document.querySelector(".slider1__title");

let i = 0;
setInterval(()=>{
    i++;
    if (i == images.length) i = 0;    
    slider1.style.backgroundImage = "url("+ images[i] +")";
    
}, 10000);
// core version + navigation, pagination modules:


  




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  
    // Navigation arrows
   // navigation: {
    //  nextEl: '.swiper-button-next',
    //  prevEl: '.swiper-button-prev',
    //},
  direction:'horizontal',
    // And if we need scrollbar
   // scrollbar: {
    //  el: '.swiper-scrollbar',
    //},
  });
  ///////////////////////////////2
  const slider4=document.getElementById("slider4");
  const btnPrev=document.getElementById("slider4__btn--prev");
  const btnNext=document.getElementById("slider4__btn--next");
  let w=860;
  let current=0;
  let count=slider4.querySelectorAll(".slider4__item").length;
  console.log(count);
  function sliderPos(width,cur){
      let pos=w*current;
  
      slider4.style.transform=("translate(" + pos + "px)");
  };
  
  sliderPos(w,current);
  
  btnPrev.addEventListener ("click",() =>{
      if(current-3>=-count){
          current--;
      }
  current++;
  sliderPos(w,current);
  });
  
  btnNext.addEventListener ("click",() =>{
      if(current-1<=-count){
          current++
      }
      current--;
      sliderPos(w,current);
      });
  
      setInterval(()=>{if(current-3<=-count){
          current++;
      }
      current--;
      sliderPos(w,current);
  
      },5000);
      /////////////////////////////////////
const btnOpen1=document.getElementById("card-btnidinfo1");
const btnOpen2=document.getElementById("card-btnidinfo2");
const btnOpen3=document.getElementById("card-btnidinfo3");
const btnOpen4=document.getElementById("card-btnidinfo4");
const modal=document.getElementById("modal");
const btnClose=document.getElementById("modal_close");


console.log(1)


btnOpen1.addEventListener("click",()=>{
    modal.classList.add("show");
    setTimeout(()=>{
        modal.classList.remove("show");
    },(12000))
});
btnClose.addEventListener("click",()=>{
    modal.classList.remove("show");
});
btnOpen2.addEventListener("click",()=>{
  modal.classList.add("show");
  setTimeout(()=>{
      modal.classList.remove("show");
  },(12000))
});
btnClose.addEventListener("click",()=>{
  modal.classList.remove("show");
});
btnOpen3.addEventListener("click",()=>{
  modal.classList.add("show");
  setTimeout(()=>{
      modal.classList.remove("show");
  },(12000))
});
btnClose.addEventListener("click",()=>{
  modal.classList.remove("show");
});
btnOpen4.addEventListener("click",()=>{
  modal.classList.add("show");
  setTimeout(()=>{
      modal.classList.remove("show");
  },(12000))
});
btnClose.addEventListener("click",()=>{
  modal.classList.remove("show");
});
////////////////////////////////////
const btnOpen5=document.getElementById("card-btnidbuy1");
const btnOpen6=document.getElementById("card-btnidbuy2");
const btnOpen7=document.getElementById("card-btnidbuy3");
const btnOpen8=document.getElementById("card-btnidbuy4");
const modal1=document.getElementById("modal1");
const btnClose1=document.getElementById("modal_close1");
btnOpen5.addEventListener("click",()=>{
  modal1.classList.add("show");
  setTimeout(()=>{
      modal1.classList.remove("show");
  },(12000))
});
btnClose1.addEventListener("click",()=>{
  modal1.classList.remove("show");
});
btnOpen6.addEventListener("click",()=>{
  modal1.classList.add("show");
  setTimeout(()=>{
      modal1.classList.remove("show");
  },(12000))
});
btnClose1.addEventListener("click",()=>{
  modal1.classList.remove("show");
});
btnOpen7.addEventListener("click",()=>{
  modal1.classList.add("show");
  setTimeout(()=>{
      modal1.classList.remove("show");
  },(12000))
});
btnClose1.addEventListener("click",()=>{
  modal1.classList.remove("show");
});
btnOpen8.addEventListener("click",()=>{
  modal1.classList.add("show");
  setTimeout(()=>{
      modal1.classList.remove("show");
  },(12000))
});
btnClose1.addEventListener("click",()=>{
  modal1.classList.remove("show");
});
