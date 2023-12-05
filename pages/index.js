const comment = document.querySelectorAll('.steps__icon-comment');
const icon = document.querySelectorAll('.steps__icon');

const sliderImage = document.querySelectorAll('.slider__image');

const sliderImageTitle = document.querySelectorAll('.slider__image-title');

const sliderLeft = document.querySelector('.slider__arrow');
const sliderRight = document.querySelector('.slider__arrow-right');

const indicator = document.querySelectorAll('.slider__ellipse');

const storiesImage = document.querySelectorAll('.stories__image');

const storiesComment = document.querySelectorAll('.stories__comment_first');

let counter = 0;// текущая позиция
let desktop = 0;

//
const storiesCommentMobile = () => {

    storiesComment[0].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a...';
    storiesComment[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a...';
    storiesComment[2].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a...';
    storiesComment[3].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a...';
    
}

const storiesCommentDesktop = () => {

    storiesComment[0].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
    storiesComment[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
    storiesComment[2].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
    storiesComment[3].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

}

const storiesMobile = () => {
  storiesImage[0].src = './images/lakeMobile.png';
  storiesImage[1].src = './images/roadMobile.png';
  storiesImage[2].src = './images/mountainMobile.png';
  storiesImage[3].src = './images/minivanMobile.png';
}

const storiesDesktop = () => {
  storiesImage[0].src = './images/mountainLake.png';
  storiesImage[1].src = './images/road.png';
  storiesImage[2].src = './images/snowMountains.png';
  storiesImage[3].src = './images/yellowMinivan.png';
}

//Начальные установки
if (window.screen.availWidth < 768) {

  indicator[0].className = 'slider__ellipse slider__ellipse_backcolor';
  sliderImage[1].className = 'slider__image slider__image_display-none';
  sliderImage[2].className = 'slider__image slider__image_display-none';

  storiesMobile();
  storiesCommentMobile();
}
else {
  counter = 1;
  desktop = 1;
  indicator[1].className = 'slider__ellipse slider__ellipse_backcolor';
  sliderImage[0].className = 'slider__image';
  sliderImage[1].className = 'slider__image';
  sliderImage[2].className = 'slider__image';

  storiesDesktop();
  storiesCommentDesktop();
}


const switches = (counter) => {
  switch (counter) {
    case 0:
      indicator[0].className += ' slider__ellipse_backcolor';
      indicator[1].className = 'slider__ellipse';
      indicator[2].className = 'slider__ellipse';
      break;
    case 1:
      indicator[1].className += ' slider__ellipse_backcolor';
      indicator[0].className = 'slider__ellipse';
      indicator[2].className = 'slider__ellipse';
      break;
    case 2:
      indicator[2].className += ' slider__ellipse_backcolor';
      indicator[1].className = 'slider__ellipse';
      indicator[0].className = 'slider__ellipse';
      break;
  }
}

const slider = (counter) => {
  sliderImage[counter].className = 'slider__image';
}

const sliderDesktop = (counter) => {
  switch (counter) {
    case 0:
      sliderImage[0].src = './images/chinaBay.png';
      sliderImageTitle[0].textContent = 'Japan';
      sliderImage[1].src = './images/reefs.png';
      sliderImageTitle[1].textContent = 'Spain';
      sliderImage[2].src = './images/bridge.png';
      sliderImageTitle[2].textContent = 'USA';
      break;
    case 1:
      sliderImage[0].src = './images/reefs.png';
      sliderImageTitle[0].textContent = 'Spain';
      sliderImage[1].src = './images/chinaBay.png';
      sliderImageTitle[1].textContent = 'Japan';
      sliderImage[2].src = './images/bridge.png';
      sliderImageTitle[2].textContent = 'USA';
      break;
    case 2:
      sliderImage[0].src = './images/chinaBay.png';
      sliderImageTitle[1].textContent = 'Japan';
      sliderImage[1].src = './images/bridge.png';
      sliderImageTitle[1].textContent = 'USA';
      sliderImage[2].src = './images/reefs.png';
      sliderImageTitle[2].textContent = 'Spain';
      break;
  }
}

//Слушатели стрелки на экране
sliderLeft.addEventListener('click', () => {
  sliderImage[counter].className += ' slider__image_display-none';
  counter -= 1;
  if (counter <= -1) counter = 2;
  slider(counter);
  switches(counter);
})



sliderRight.addEventListener('click', () => {
  sliderImage[counter].className += ' slider__image_display-none';
  counter += 1;
  if (counter >= 3) counter = 0;
  slider(counter);
  switches(counter);
}
)

//Слушатели стрелки на клавиатуре
document.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowLeft') {
    counter -= 1;
    if (counter <= -1) counter = 2;
    sliderDesktop(counter);
    switches(counter);
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowRight') {
    counter += 1;
    if (counter >= 3) counter = 0;
    sliderDesktop(counter);
    switches(counter);
  }
})

window.addEventListener(`resize`, event => {

  if (window.screen.availWidth < 768) {

    if (desktop == 1) {
      sliderImage[1].className = 'slider__image slider__image_display-none';
      sliderImage[2].className = 'slider__image slider__image_display-none';
    }
 
    desktop = 0;

    sliderImage[0].src = './images/reef-mobile.png';
    sliderImage[1].src = './images/china-mobile.png';
    sliderImage[2].src = './images/bridge-mobile.png';

    storiesMobile();
    storiesCommentMobile();

    //Оформление подписей под иконками
    comment[0].className += ' steps__icon-comment-left';
    comment[2].className += ' steps__icon-comment-right';
    icon[0].className += ' steps__icon-left';
    icon[2].className += ' steps__icon-right';

    icon[1].classList.add('steps__icon-comment_width');
    icon[1].classList.add('steps__icon-comment_margin-0-auto');

  }
  else {

    desktop = 1;

    if (desktop == 1) {
      sliderImage[0].className = 'slider__image';
      sliderImage[1].className = 'slider__image';
      sliderImage[2].className = 'slider__image';
    }

    sliderImage[0].src = './images/reefs.png';
    sliderImage[1].src = './images/chinaBay.png';
    sliderImage[2].src = './images/bridge.png';
    counter = 1;
    comment[0].className = 'steps__icon-comment';
    comment[2].className = 'steps__icon-comment';
    icon[0].className = 'steps__icon';
    icon[2].className = 'steps__icon';
    icon[1].classList.remove('steps__icon-comment_width');

    sliderImage[1].className = 'slider__image';
    sliderImage[2].className = 'slider__image';

    storiesDesktop();
    storiesCommentDesktop();
  }
}, false);




