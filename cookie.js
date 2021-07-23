// cookieBanner.onclick

const cookieContainer = document.getElementById("cookieContainer");
const agreeBtn = document.getElementById("agreeBtn");

// EventListenersAdding.inclick
             
agreeBtn.addEventListener('click', ()=>{
               
  cookieContainer.classList.remove("active");
               
});
            
// TimeoutSettings.
              
setTimeout(()=>{
              
  cookieContainer.classList.add("active");
              
}, 6000);
