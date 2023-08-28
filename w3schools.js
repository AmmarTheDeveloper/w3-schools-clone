const menu_bar = document.querySelector('.menu-bar'),
      side_bar = document.querySelector('.sidebar'),
      home = document.querySelector('.home');
menu_bar.onclick =()=>{
    side_bar.classList.toggle('active');
}
window.onscroll = ()=>{
    side_bar.classList.remove('active');
}