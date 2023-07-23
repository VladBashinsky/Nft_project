document.addEventListener('DOMContentLoaded' , () => {
  const timer = new Date('August 5 2023 00:00:00');


  const daysval = document.querySelector('.time-count-days' );
  const hoursval = document.querySelector('.time-count-hours');
  const minutesval = document.querySelector('.time-count-minutes');
  const secondsval = document.querySelector('.time-count-seconds');

  const timecound = () => {
    let now = new Date();
    let leftuntil = timer - now;
    let days = Math.floor ( leftuntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor (leftuntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor (leftuntil / 1000 / 60 ) % 60;
    let seconds = Math.floor (leftuntil / 1000) % 60;


    daysval.textContent = days;
    hoursval.textContent = hours;
    minutesval.textContent = minutes;
    secondsval.textContent = seconds;


// NEW DATE


  const timers = new Date('August 5 2023 00:00:00');


  const seconddaysval = document.querySelector('.time_count_days');
  const secondhoursval = document.querySelector('.time_count_hours');
  const secondminutesval = document.querySelector('.time_count_minutes');
  const secondsecondsval = document.querySelector('.time_count_seconds');

  const timestart = () => {
    let nows = new Date();
    let leftuntill = timers - nows;
    let days = Math.floor ( leftuntill / 1000 / 60 / 60 / 24);
    let hours = Math.floor (leftuntill / 1000 / 60 / 60) % 24;
    let minutes = Math.floor (leftuntill / 1000 / 60 ) % 60;
    let seconds = Math.floor (leftuntill / 1000) % 60;


    seconddaysval.textContent = days;
    secondhoursval.textContent = hours;
    secondminutesval.textContent = minutes;
    secondsecondsval.textContent = seconds;


    // NEW DATE

  };

  
  const Timers = new Date('August 5 2023 00:00:00');
    
  const ThirtDaysVal = document.querySelector('.ime__count__days');
  const ThirtHoursVal = document.querySelector('.time__count__hours');
  const ThirtMinutesVal = document.querySelector('.time__count__minutes');
  const ThirtSecondsVal = document.querySelector('.time__count__seconds');

  const TimeStart = () => {
    let Now = new Date();
    let Leftuntil = Timers - Now;
    let days = Math.floor ( Leftuntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor (Leftuntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor (Leftuntil / 1000 / 60 ) % 60;
    let seconds = Math.floor (Leftuntil / 1000) % 60;

    ThirtDaysVal.textContent = days;
    ThirtHoursVal.textContent = hours;
    ThirtMinutesVal.textContent = minutes;
    ThirtSecondsVal.textContent = seconds;
  
    
  };
  
  timestart();
  };
  
  setInterval(timecound, 1000);
});




AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 1, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation

});




let click = document.querySelector('.conect');
const modal = document.querySelector('.modal');

click.addEventListener('click', function() {
  document.querySelector('.modal').classList.add('modal_open');
  document.querySelector('body').classList.add('no-scroll');
  document.querySelector('.modal_box').classList.add('modal_box_open');

}); 

modal.addEventListener('click', function(){
  document.querySelector('.modal').classList.remove('modal_open');
  document.querySelector('body').classList.remove('no-scroll');
})

const burger_menu = document.querySelector('.burger_btn');

click.addEventListener('click', function () {
  document.querySelector('.list').classList.toggle('.list_active');
})