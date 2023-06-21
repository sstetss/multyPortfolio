let btnHome = document.getElementById('nav-item1')
let btnAbout = document.getElementById('nav-item2')
let btnPortfolio = document.getElementById('nav-item3')
let btnAdds = document.getElementById('nav-item4')
let btnContact = document.getElementById('nav-item5')
let btnMainContact = document.getElementById('main-contact')


// adds

let btnWeather = document.getElementById('choose-weather')
let btnToDo = document.getElementById('choose-todo')
let btnConvert = document.getElementById('choose-convert')
let btnPlayer = document.getElementById('choose-player')


// sections
let sectionHome = document.getElementById('section-main-page')
let sectionAbout = document.getElementById('section-about-page')
let sectionPortfolio = document.getElementById('section-portfolio-page')
let sectionAdds = document.getElementById('choose-add') 
let sectionContact = document.getElementById('section-contact-page')


// ads sections

let sectionPlayer = document.getElementById('section-adds-page')
let sectionWeather = document.getElementById('section-weather-page')
let sectionConvert = document.getElementById('section-convert-page')
let sectionToDo = document.getElementById('section-todo-page')

console.log(sectionAdds);

window.onload = ()=>{sectionHome.classList.add("active-main")}

// home
btnMainContact.addEventListener('click',()=>{
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionAdds.classList.remove("choose-active")

   sectionHome.classList.remove("active-main")

   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'none'


   sectionContact.classList.add("active")
})

btnHome.addEventListener('click', ()=>{

   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionContact.classList.remove("active")
   sectionAdds.classList.remove("choose-active")

   sectionHome.classList.add("active-main")

   // let url = "pages/main-page/main.html"
   // axios.get(url)
   // .then(function (response){
   //    console.log(response.data);
   //    sectionHome.innerHTML = response.data
   // })
   // .catch(function (error) {
   //    // handle error
   //    console.log(error);
   // })

})
// about
btnAbout.addEventListener('click', ()=>{
   console.log(2);
   sectionPortfolio.classList.remove("active")
   sectionContact.classList.remove("active")
   sectionAdds.classList.remove("choose-active")

   sectionHome.classList.remove("active-main")
   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'none'

   sectionAbout.classList.add("active")
})
// adds
btnAdds.addEventListener('click', ()=>{
   console.log(3);
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionContact.classList.remove("active")

   sectionHome.classList.remove("active-main")
   sectionPlayer.classList.remove('.chose-item')
   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'none'

   sectionAdds.classList.add("choose-active")

})

// portfolio
btnPortfolio.addEventListener('click', ()=>{
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionAdds.classList.remove("choose-active")
   sectionContact.classList.remove("active")
   sectionHome.classList.remove("active-main")
   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'none'
   sectionPortfolio.classList.add("active")
   console.log(2);

})
// contact
btnContact.addEventListener('click', ()=>{
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionAdds.classList.remove("choose-active")

   sectionHome.classList.remove("active-main")

   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'none'


   sectionContact.classList.add("active")
   console.log(5);
})

// ads btn
btnConvert.addEventListener('click', ()=>{
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionContact.classList.remove("active")
   sectionAdds.classList.remove("choose-active")
   sectionHome.classList.remove("active-main")
   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'contents'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'none'


   
})

btnWeather.addEventListener('click', ()=>{
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionContact.classList.remove("active")
   sectionAdds.classList.remove("choose-active")
   sectionHome.classList.remove("active-main")
   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'flex'
   
})

btnToDo.addEventListener('click', ()=>{
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionContact.classList.remove("active")
   sectionAdds.classList.remove("choose-active")
   sectionHome.classList.remove("active-main")

   console.log(1);
   sectionToDo.style.display = 'flex'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'none'
   sectionWeather.style.display = 'none'

   
})

btnPlayer.addEventListener('click', ()=>{
   sectionAbout.classList.remove("active")
   sectionPortfolio.classList.remove("active")
   sectionContact.classList.remove("active")
   sectionAdds.classList.remove("choose-active")
   sectionHome.classList.remove("active-main")
   sectionToDo.style.display = 'none'
   sectionConvert.style.display = 'none'
   sectionPlayer.style.display = 'block'
   sectionWeather.style.display = 'none'

  
})