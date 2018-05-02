let templates = ['content', 'navbar', 'footer', 'placeholder'];

var template_rules = '';
template_rules += 
  `<template id="navbar">
      <div class="nav-item nav-banner">
        <div class="nav-item nav-logo">YourNameHere</div>
        <div class="nav-item nav-burger inactive toggle"><i class="fas fa-bars"></i></div>
      </div>
      <div class="nav-item nav-menu">
        <div class="nav-item nav-button">Home</div>
        <div class="nav-item nav-button">Mobile</div>
        <div class="nav-item nav-button">Blog</div>
        <div class="nav-item nav-button">Contact</div>
      </div>
  </template>`;
template_rules += 
  `<template id='footer'>
      <div class="footer-item toggle placeholder-toggle"><i class="far fa-square"></i></div>
      <div class="footer-item toggle burger-toggle"><i class="far fa-square"></i></div>
      <div class="footer-item toggle"><i class="far fa-square"></i></div>
      <div class="footer-item"><i class="fab fa-github-square fa-fw"></i></div>
      <div class="footer-item"><i class="fab fa-linkedin"></i></div>
      <div class="footer-item"><i class="fas fa-leaf fa-fw"></i></div>
      <div class="footer-item">© 2018 - krtan All rights reserved</div>
  </template>`;
template_rules +=
  `<template id="content">
    <div id="home"><div class="overlay"><div class="placeholder active"></div></div></div>
    <div id="mobile"><div class="overlay"><div class="placeholder active"></div></div></div>
    <div id="blog"><div class="overlay">c</div></div>
    <div id="contact"><div class="overlay">d</div></div>
  </template>`





template_rules +=
  `<template id="placeholder">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor. Vel pretium lectus quam id. Enim neque volutpat ac tincidunt vitae semper. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Aliquet lectus proin nibh nisl condimentum id venenatis a. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Enim diam vulputate ut pharetra. Blandit massa enim nec dui nunc. Vel pharetra vel turpis nunc eget lorem dolor. Euismod elementum nisi quis eleifend quam adipiscing vitae. Scelerisque viverra mauris in aliquam sem fringilla ut. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Consequat nisl vel pretium lectus.

    Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Gravida quis blandit turpis cursus. In fermentum posuere urna nec tincidunt praesent semper feugiat. Massa tempor nec feugiat nisl pretium fusce. Id leo in vitae turpis massa sed elementum. Tristique sollicitudin nibh sit amet commodo. Tristique senectus et netus et malesuada fames ac. Porttitor rhoncus dolor purus non. Tortor at risus viverra adipiscing at. A scelerisque purus semper eget duis at tellus at.

    Mauris ultrices eros in cursus turpis massa. Integer eget aliquet nibh praesent tristique magna sit amet. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Montes nascetur ridiculus mus mauris vitae. Id velit ut tortor pretium viverra suspendisse potenti nullam. In eu mi bibendum neque egestas congue quisque. Sit amet volutpat consequat mauris. Porttitor lacus luctus accumsan tortor. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Nunc non blandit massa enim nec. Pretium viverra suspendisse potenti nullam ac tortor. Faucibus in ornare quam viverra. Aliquet eget sit amet tellus cras. Nunc consequat interdum varius sit amet mattis vulputate. A diam maecenas sed enim ut sem viverra. Diam maecenas ultricies mi eget mauris pharetra. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Eu facilisis sed odio morbi quis commodo. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Interdum velit laoreet id donec ultrices tincidunt arcu non.

    Eget egestas purus viverra accumsan in nisl nisi. Et sollicitudin ac orci phasellus egestas tellus rutrum. Ultricies mi quis hendrerit dolor magna eget est. In iaculis nunc sed augue lacus viverra vitae congue. Faucibus purus in massa tempor. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Egestas quis ipsum suspendisse ultrices gravida dictum. Gravida neque convallis a cras semper. Pretium aenean pharetra magna ac placerat. Praesent tristique magna sit amet purus gravida. Volutpat sed cras ornare arcu dui. Ut eu sem integer vitae. Nisi quis eleifend quam adipiscing. Purus ut faucibus pulvinar elementum integer.

    Ut tristique et egestas quis ipsum suspendisse ultrices. Gravida neque convallis a cras. Arcu risus quis varius quam quisque. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet porttitor eget dolor morbi. Id semper risus in hendrerit gravida rutrum quisque. At tempor commodo ullamcorper a. Quam viverra orci sagittis eu volutpat odio. Felis donec et odio pellentesque diam volutpat. Risus ultricies tristique nulla aliquet enim tortor. Tincidunt tortor aliquam nulla facilisi cras.
  </template>`;




// Template injector
function injectTemplate() {
  for (i=0; i < templates.length; i++){
    template = templates[i];
    console.log(`Injecting ${template} template.`);
    let elem = document.getElementsByClassName(`${template}`);
    for (e=0; e < elem.length; e++){
      template_data = new DOMParser().parseFromString(template_rules, 'text/html').querySelector(`#${template}`);
      elem[e].innerHTML = template_data.innerHTML;
    }
  }
  console.log("Injected");
  bindEventListener();
} 
window.onload = function(){ injectTemplate() }


function setState(classname, state){
  let elem = document.getElementsByClassName(`${classname}`);
  for (i=0; i < elem.length; i++){
    tElem = elem[i].classList;
    if (state) {
      new_state = state;
    } else if ( tElem.contains('inactive') ){
      new_state = 'active';
    } else {
      new_state = 'inactive';
    }
    tElem.remove('inactive');
    tElem.remove('active');
    tElem.add(`${new_state}`);
  }
}
function toggleBurger(state){
  let elem = document.querySelector('.nav-burger').classList
  if (state) {
    new_state = state;
  } else if (elem.contains('active')){
    new_state = 'inactive';
  } else if (elem.contains('inactive')){
    new_state = 'active';
  } else {
    new_state = 'inactive';
  }
  if (new_state == 'active'){
    setState('nav-burger', new_state);
    document.querySelector('.nav-menu').classList.add('dropdown');
    document.querySelector('.navbar').style.flexFlow = 'column';
    document.querySelector('.nav-menu').style.flexFlow = 'column';
    document.querySelector('.nav-menu').style.marginLeft = '0';
    setState('nav-menu', 'inactive');
  } else if (new_state == 'inactive'){
    setState('nav-burger', new_state);
    setState('nav-menu', 'active');
    document.querySelector('.nav-menu').classList.remove('dropdown');
    document.querySelector('.navbar').style.flexFlow = 'row';
    document.querySelector('.nav-menu').style.flexFlow = 'row';
    document.querySelector('.nav-menu').style.marginLeft = 'auto';
  }
  return new_state
}

function bindEventListener() {
  console.log("Binding Event Listeners");
  let elem = document.getElementsByClassName('toggle')
  for (e=0; e < elem.length; e++){
    elem[e].addEventListener('click', (e) => {
      let tIcon = e.target.classList
      if ( e.target.parentElement.classList.contains('placeholder-toggle') ){
        tIcon.toggle('fa-square');
        tIcon.toggle('fa-check-square');
        setState('placeholder');
      } else if ( e.target.parentElement.classList.contains('burger-toggle') ){
        toggleBurger();
        tIcon.toggle('fa-square');
        tIcon.toggle('fa-check-square');
      } else if ( e.target.parentElement.classList.contains('nav-burger') ){
        setState('nav-menu');
        tIcon.toggle('fa-square');
      }
    });
  }
}
