//animation welcome

const presentationTitle = document.querySelector(".presentation-title");

document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(() => {
// alert("si")
           presentationTitle.style.opacity ="0";
           presentationTitle.style.backgroundColor ="none";

        }, 1500);

      

        
       
         
        

       

        window.addEventListener('scroll', () => {
            const nav = document.querySelector("nav");
            const navLinks = document.querySelectorAll("nav a");
            const navRect = nav.getBoundingClientRect();
            const scrollTop = window.scrollY;
            const scrollBottom = window.innerHeight + scrollTop >= document.body.scrollHeight;
          

            if (navRect.top <= 1) {
              nav.style.backgroundColor = "white";
              navLinks.forEach(navLink => {
                navLink.style.color = "black";
                navLink.style.textShadow = "none";
              });
            } else {
              nav.style.backgroundColor = "transparent"; 
              navLinks.forEach(navLink => {
                navLink.style.color = "white";
                navLink.style.textShadow = "black 4px 3px";
              });
            }
          
            
            if (scrollBottom) {
              nav.style.backgroundColor = "black";
              navLinks.forEach(navLink => {
                navLink.style.color = "white";
                navLink.style.textShadow = "none";
              });
            }
          });
          
});




