document.addEventListener('DOMContentLoaded', function() {
   
    var age = document.getElementById('age');
    for(let i = 5; i <100; i++){
        let option = document.createElement('option');
        option.setAttribute('value',i);
        option.innerText = i;
        age.appendChild(option);
    }

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
   
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        dotsEach: 1,
 
        autoplayTimeout:1500,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                center: true,
            },
            800:{
                items:2,
                margin:10,
                mergeFit:true
            },
            1140:{
                items:3
            }
        }
    });
    
  });