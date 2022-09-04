window.addEventListener('DOMContentLoaded', () => {
const humburger = document.querySelector('.hambureger'),
      menu = document.querySelector('.menu'),
      closeElem= document.querySelector('.menu__close'),
      social = document.querySelectorAll('[data-modal]'),
      counters=document.querySelectorAll('.tehnologic__procent'),
      lines=document.querySelectorAll('.tehnologic__block div');
    
//divider
      counters.forEach((item , i) =>{
          lines[i].style.width = item.innerHTML;
      });

//humburger
humburger.addEventListener('click', ()=>{
    menu.classList.add('active');
    humburger.classList.add('active');
  
});
closeElem.addEventListener('click', ()=>{
    menu.classList.remove('active');
    humburger.classList.remove('active');
});
//svg
document.querySelectorAll('img.img-svg').forEach(img => {
    var imgId = img.id;
    var imgClass = img.className;
    var imgURL = img.src;
    var imgFill = img.getAttribute('data-fill');
    
    fetch(imgURL).then(r => r.text()).then(text => {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(text, "text/xml");
        var svg = xmlDoc.getElementsByTagName('svg')[0];
        
        if (typeof imgId !== 'undefined') {
            svg.setAttribute('id', imgId);
        }
        
        if (typeof imgClass !== 'undefined') {
            svg.setAttribute('class', imgClass);
        }        
        
        if (typeof imgFill !== 'undefined') {
            svg.setAttribute('fill', imgFill);
        }
        
        img.parentNode.replaceChild(svg, img);
        
    }).catch(console.error);
    
});
//link social
window.addEventListener('scroll',() =>{
let scrollpos = window.scrollY;
const scrollChange = 400;
social.forEach(e =>{
    if (scrollpos >= scrollChange){
        e.classList.add("active");
    }else{
            e.classList.remove("active");
        }
    
});
});
});