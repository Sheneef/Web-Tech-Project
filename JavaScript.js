
// Carousel 

document.addEventListener("DOMContentLoaded", function() {
   const carousel = document.querySelector(".carousel");   
    const container = carousel.querySelector(".carousel-container");
    const slides = carousel.querySelectorAll(".slide");
    const prevBtn = carousel.querySelector(".prev-btn");
    const nextBtn = carousel.querySelector(".next-btn");
    let currentIndex = 0;
    const intervalTime = 3000; 
    let slideInterval;
  
    function showSlide(index) {
      container.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    }
  
    prevBtn.addEventListener("click", function() {
      prevSlide();
      clearInterval(slideInterval); 
    });
  
    nextBtn.addEventListener("click", function() {
      nextSlide();
      clearInterval(slideInterval); 
    });
  
    // Automatic Slide Change
    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    startSlideInterval(); 
  
    // Pause on hover
    carousel.addEventListener("mouseenter", function() {
      clearInterval(slideInterval); 
    });
  
    carousel.addEventListener("mouseleave", function() {
      startSlideInterval(); 
    });
  });
  
  



//Redirect on the home page when click the images and heading 

function jujutsukai () {
    window.location.href = "animepage/Jujutsu Kaisen.html";
}

function sevendeadly () {
    window.location.href= "animepage/SevenDeadlySin.html";

}

function tokoyo () {
    window.location.href= "animepage/Tokoyo Revengers.html";
}

function  seventimes () {
    window.location.href="animepage/7thTimeLoop.html";
}

function narutoship () {
    window.location.href="animepage/Naruto.html";
}

            // Popular Section window open  

function solo() {
    window.location.href = "animepage/sololeveling.html";
}

function AOT() {
    window.location.href= "animepage/attackOT.html";

}

function onepiece() {
    window.location.href= "animepage/onepiece.html";
}

function adaiaries() {
    window.location.href="animepage/adairies.html";
}

function demonslay() {
    window.location.href="animepage/demonslayer.html";
}

function bluelock() {
    let url = "animepage/bluelock.html"; 
    window.open(url, "_blank");
}


function chainsaw() {
    window.location.href="animepage/chainsawman.html";
}

function spyx() {
    window.location.href="animepage/SpyxFamily.html";
}

function myhero() {
    window.location.href="animepage/MyHeroAcademia.html";
}

function   kengan() {
    window.location.href="animepage/KenganAshura.html";

}


//Popular and Recommendation button on the home page
function Popular(){
    window.location.href = "animeranking.html";
} 
function recommend() {
    
    window.location.href = "recommendation.html";
}

function review() {
    window.location.href = "review.html";
}

 //Review Section on Home page 


 function aotreview() {
    window.location.href = "reviews/aotreview.html";
}

function kiminireview() {
    window.location.href = "reviews/kiminidoke.html";
}

function myheroreview() {
    window.location.href = "reviews/myHerocoming.html";
}

function Kaisenreview() {
    window.location.href ="reviews/jujutsureview.html";
}

function soloReview() {
    window.location.href ="reviews/Soloreview.html";
}


/*
Chang Images on Hover for the home page section 

*/

    const imgSololevel = document.getElementById("solol");
    const imgAttack = document.getElementById('aot2');
    const imgOnePiece = document.getElementById('onep');
    const imgAdairies = document.getElementById('adairy');
    const imgDemonSlay = document.getElementById('demslay');
            //Recommendation section on the homepage 
    const imgChainSaw = document.getElementById('chainman');
    const imgSpy = document.getElementById('spyfam');
    const imgMyHero = document.getElementById('myheroacadem');
    const imgKengan = document.getElementById('kengan');
    const imgBlu = document.getElementById('bluel');


    //Popular section Change images 

imgSololevel.addEventListener('mouseover',function(){
    imgSololevel.src ="img/sololeveling2.jpg" })   
imgSololevel.addEventListener('mouseout', function(){
    imgSololevel.src ="img/sololeveling.jpg"       
});


imgAttack.addEventListener('mouseover',function(){
    imgAttack.src = "img/aot.jpg"
});
imgAttack.addEventListener('mouseout', function(){
    imgAttack.src ="img/Attack on titan.jpg"

});
                    
imgOnePiece.addEventListener('mouseout', function(){
    imgOnePiece.src = "img/One piece.jpg"     
});

imgOnePiece.addEventListener('mouseover',function (){
    imgOnePiece.src ="img/onepiece2.jpg"              
});

imgAdairies.addEventListener('mouseover',function(){
    imgAdairies.src = "img/adiaries.jpg"                    
});
imgAdairies.addEventListener('mouseout', function(){
    imgAdairies.src = "img/The Apothecary Diaries.jpg"                   
});


imgDemonSlay.addEventListener('mouseover',function(){
    imgDemonSlay.src = "img/demonslay2.jpg"                        
});                     
imgDemonSlay.addEventListener('mouseout', function(){
    imgDemonSlay.src = "img/Demon Slayer.jpg"                        
});


    //Recommendation Section section Change images
    imgBlu.addEventListener('mouseover',function(){
    imgBlu.src = "img/bluelock2.jpg";
});
    imgBlu.addEventListener('mouseout', function(){
    imgBlu.src = "img/bluelock.jpeg"; 
});


imgChainSaw.addEventListener('mouseover',function(){
imgChainSaw.src = "img/chainsaw2.jpg"         
});
imgChainSaw.addEventListener('mouseout', function(){
imgChainSaw.src = "img/Chainsaw man.jpg"
});

imgSpy.addEventListener('mouseover',function(){
imgSpy.src = "img/spyx2.jpg"        
});
imgSpy.addEventListener('mouseout', function(){
imgSpy.src = "img/spy-x-family.jpg"
})

imgMyHero.addEventListener('mouseover',function(){
imgMyHero.src = "img/My hero academia.jpg"        
});
imgMyHero.addEventListener('mouseout', function(){
imgMyHero.src = "img/myhero.jpg"        
});


imgKengan.addEventListener('mouseover',function(){
imgKengan.src = "img/kenganA2.jpg"            
});
imgKengan.addEventListener('mouseout', function(){
imgKengan.src = "img/Kengan Ashura.jpg"            
});          


