let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let html = document.querySelector('html');
let menuBtn = document.getElementById('menu-btn')
let closeBtn = document.getElementById('close-btn')
let mobileMenu = document.getElementById('mobile-menu')
sun.onclick= function(){
  html.classList.toggle('dark')
  sun.classList.add('hide');
  moon.classList.remove('hide');

}
moon.onclick= function(){
  html.classList.toggle('dark')
  moon.classList.add('hide');
  sun.classList.remove('hide');
}
menuBtn.onclick= function(){
  mobileMenu.classList.toggle('hidden');
  menuBtn.classList.add('hide');
  closeBtn.classList.remove('hide');
}
closeBtn.onclick= function(){
  mobileMenu.classList.toggle('hidden');
  closeBtn.classList.add('hide');
  menuBtn.classList.remove('hide');
}