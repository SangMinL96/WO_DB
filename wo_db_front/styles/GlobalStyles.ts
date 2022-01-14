import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  dl,ul,ol,menu,li {list-style:none}
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul,li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
textarea:focus, input:focus{
      outline: none;
    }
  .react-confirm-alert-overlay{
    opacity: 1;
    animation: none;
    background: none;
    background: rgba(24, 24, 24, 0.226);
    
  }
  .react-confirm-alert-blur{
    filter: none;
  }
  .react-confirm-alert{
    width: 300px;
    height:160px;
 

  }
  .react-confirm-alert-body{
    display: flex;
    width: 100%;
    height:100%;
    border-radius: 2px;
    padding:30px 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    flex-direction: column;
    justify-content: space-between;
    h1{
      font-size: 16px;
      font-weight: 500;
      color: #262626;
    }
  }
  .react-confirm-alert-button-group{
    width: 100%;
    justify-content: flex-end;
    button{
      margin-bottom: -10px;
      margin-right: -10px;
      background-color: rgba(255, 255, 255, 0);
      padding: 8px 15px;
      color:#fd4381;
      font-size: 14px;
      &:active{
        background-color: rgba(146, 146, 146, 0.122);
      }
    }
  }
  :root {
            --swiper-theme-color: #007aff;
          }
          .swiper {
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            list-style: none;
            padding: 0;
            z-index: 1;
          }
          .swiper-vertical > .swiper-wrapper {
            flex-direction: column;
          }
          .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            box-sizing: content-box;
          }
          .swiper-android .swiper-slide,
          .swiper-wrapper {
            transform: translate3d(0px, 0, 0);
          }
          .swiper-pointer-events {
            touch-action: pan-y;
          }
          .swiper-pointer-events.swiper-vertical {
            touch-action: pan-x;
          }
          .swiper-slide {
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;
            transition-property: transform;
          }
          .swiper-slide-invisible-blank {
            visibility: hidden;
          }
          .swiper-autoheight,
          .swiper-autoheight .swiper-slide {
            height: auto;
          }
          .swiper-autoheight .swiper-wrapper {
            align-items: flex-start;
            transition-property: transform, height;
          }
          .swiper-3d,
          .swiper-3d.swiper-css-mode .swiper-wrapper {
            perspective: 1200px;
          }
          .swiper-3d .swiper-cube-shadow,
          .swiper-3d .swiper-slide,
          .swiper-3d .swiper-slide-shadow,
          .swiper-3d .swiper-slide-shadow-bottom,
          .swiper-3d .swiper-slide-shadow-left,
          .swiper-3d .swiper-slide-shadow-right,
          .swiper-3d .swiper-slide-shadow-top,
          .swiper-3d .swiper-wrapper {
            transform-style: preserve-3d;
          }
          .swiper-3d .swiper-slide-shadow,
          .swiper-3d .swiper-slide-shadow-bottom,
          .swiper-3d .swiper-slide-shadow-left,
          .swiper-3d .swiper-slide-shadow-right,
          .swiper-3d .swiper-slide-shadow-top {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
          }
          .swiper-3d .swiper-slide-shadow {
            background: rgba(0, 0, 0, 0.15);
          }
          .swiper-3d .swiper-slide-shadow-left {
            background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
          }
          .swiper-3d .swiper-slide-shadow-right {
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
          }
          .swiper-3d .swiper-slide-shadow-top {
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
          }
          .swiper-3d .swiper-slide-shadow-bottom {
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
          }
          .swiper-css-mode > .swiper-wrapper {
            overflow: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
            display: none;
          }
          .swiper-css-mode > .swiper-wrapper > .swiper-slide {
            scroll-snap-align: start start;
          }
          .swiper-horizontal.swiper-css-mode > .swiper-wrapper {
            scroll-snap-type: x mandatory;
          }
          .swiper-vertical.swiper-css-mode > .swiper-wrapper {
            scroll-snap-type: y mandatory;
          }
          .swiper-centered > .swiper-wrapper::before {
            content: '';
            flex-shrink: 0;
            order: 9999;
          }
          .swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
            margin-inline-start: var(--swiper-centered-offset-before);
          }
          .swiper-centered.swiper-horizontal > .swiper-wrapper::before {
            height: 100%;
            min-height: 1px;
            width: var(--swiper-centered-offset-after);
          }
          .swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
            margin-block-start: var(--swiper-centered-offset-before);
          }
          .swiper-centered.swiper-vertical > .swiper-wrapper::before {
            width: 100%;
            min-width: 1px;
            height: var(--swiper-centered-offset-after);
          }
          .swiper-centered > .swiper-wrapper > .swiper-slide {
            scroll-snap-align: center center;
          }
          .swiper-virtual.swiper-css-mode .swiper-wrapper::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
          }
          .swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
            height: 1px;
            width: var(--swiper-virtual-size);
          }
          .swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
            width: 1px;
            height: var(--swiper-virtual-size);
          }
          :root {
            --swiper-navigation-size: 44px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            position: absolute;
            top: 50%;
            width: calc(var(--swiper-navigation-size) / 44 * 27);
            height: var(--swiper-navigation-size);
            margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
            z-index: 10;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--swiper-navigation-color, var(--swiper-theme-color));
          }
          .swiper-button-next.swiper-button-disabled,
          .swiper-button-prev.swiper-button-disabled {
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-family: swiper-icons;
            font-size: var(--swiper-navigation-size);
            text-transform: none !important;
            letter-spacing: 0;
            text-transform: none;
            font-variant: initial;
            line-height: 1;
          }
          .swiper-button-prev,
          .swiper-rtl .swiper-button-next {
            left: 10px;
            right: auto;
          }
          .swiper-button-prev:after,
          .swiper-rtl .swiper-button-next:after {
            content: 'prev';
          }
          .swiper-button-next,
          .swiper-rtl .swiper-button-prev {
            right: 10px;
            left: auto;
          }
          .swiper-button-next:after,
          .swiper-rtl .swiper-button-prev:after {
            content: 'next';
          }
          .swiper-button-lock {
            display: none;
          }
          .swiper-pagination {
            position: absolute;
            text-align: center;
            transition: 0.3s opacity;
            transform: translate3d(0, 0, 0);
            z-index: 10;
          }
          .swiper-pagination.swiper-pagination-hidden {
            opacity: 0;
          }
          .swiper-horizontal > .swiper-pagination-bullets,
          .swiper-pagination-bullets.swiper-pagination-horizontal,
          .swiper-pagination-custom,
          .swiper-pagination-fraction {
            bottom: 10px;
            left: 0;
            width: 100%;
          }
          .swiper-pagination-bullets-dynamic {
            overflow: hidden;
            font-size: 0;
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
            transform: scale(0.33);
            position: relative;
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
            transform: scale(1);
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
            transform: scale(1);
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
            transform: scale(0.66);
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
            transform: scale(0.33);
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
            transform: scale(0.66);
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
            transform: scale(0.33);
          }
          .swiper-pagination-bullet {
            width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
            height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
            display: inline-block;
            border-radius: 50%;
            background: var(--swiper-pagination-bullet-inactive-color, #000);
            opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
          }
          button.swiper-pagination-bullet {
            border: none;
            margin: 0;
            padding: 0;
            box-shadow: none;
            -webkit-appearance: none;
            appearance: none;
          }
          .swiper-pagination-clickable .swiper-pagination-bullet {
            cursor: pointer;
          }
          .swiper-pagination-bullet:only-child {
            display: none !important;
          }
          .swiper-pagination-bullet-active {
            opacity: var(--swiper-pagination-bullet-opacity, 1);
            background: var(--swiper-pagination-color, var(--swiper-theme-color));
          }
          .swiper-pagination-vertical.swiper-pagination-bullets,
          .swiper-vertical > .swiper-pagination-bullets {
            right: 10px;
            top: 50%;
            transform: translate3d(0px, -50%, 0);
          }
          .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,
          .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
            margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
            display: block;
          }
          .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
          .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
          }
          .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
          .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
            display: inline-block;
            transition: 0.2s transform, 0.2s top;
          }
          .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
          .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
            margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
          }
          .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
          .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
          }
          .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
          .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
            transition: 0.2s transform, 0.2s left;
          }
          .swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
            transition: 0.2s transform, 0.2s right;
          }
          .swiper-pagination-progressbar {
            background: rgba(0, 0, 0, 0.25);
            position: absolute;
          }
          .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            background: var(--swiper-pagination-color, var(--swiper-theme-color));
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transform: scale(0);
            transform-origin: left top;
          }
          .swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            transform-origin: right top;
          }
          .swiper-horizontal > .swiper-pagination-progressbar,
          .swiper-pagination-progressbar.swiper-pagination-horizontal,
          .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
          .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
            width: 100%;
            height: 4px;
            left: 0;
            top: 0;
          }
          .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
          .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,
          .swiper-pagination-progressbar.swiper-pagination-vertical,
          .swiper-vertical > .swiper-pagination-progressbar {
            width: 4px;
            height: 100%;
            left: 0;
            top: 0;
          }
          .swiper-pagination-lock {
            display: none;
          }
          .swiper-scrollbar {
            border-radius: 10px;
            position: relative;
            -ms-touch-action: none;
            touch-action: none;
            background: rgba(0, 0, 0, 0.1);
          }
          .swiper-horizontal > .swiper-scrollbar {
            position: absolute;
            left: 1%;
            bottom: 3px;
            z-index: 50;
            height: 5px;
            width: 98%;
          }
          .swiper-vertical > .swiper-scrollbar {
            position: absolute;
            right: 3px;
            top: 1%;
            z-index: 50;
            width: 5px;
            height: 98%;
          }
          .swiper-scrollbar-drag {
            height: 100%;
            width: 100%;
            position: relative;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            left: 0;
            top: 0;
          }
          .swiper-scrollbar-cursor-drag {
            cursor: move;
          }
          .swiper-scrollbar-lock {
            display: none;
          }
          .swiper-zoom-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .swiper-zoom-container > canvas,
          .swiper-zoom-container > img,
          .swiper-zoom-container > svg {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          .swiper-slide-zoomed {
            cursor: move;
          }
          .swiper-lazy-preloader {
            width: 42px;
            height: 42px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -21px;
            margin-top: -21px;
            z-index: 10;
            transform-origin: 50%;
            animation: swiper-preloader-spin 1s infinite linear;
            box-sizing: border-box;
            border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
            border-radius: 50%;
            border-top-color: transparent;
          }
          .swiper-lazy-preloader-white {
            --swiper-preloader-color: #fff;
          }
          .swiper-lazy-preloader-black {
            --swiper-preloader-color: #000;
          }
          @keyframes swiper-preloader-spin {
            100% {
              transform: rotate(360deg);
            }
          }
          .swiper .swiper-notification {
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
            opacity: 0;
            z-index: -1000;
          }
          .swiper-free-mode > .swiper-wrapper {
            transition-timing-function: ease-out;
            margin: 0 auto;
          }
          .swiper-grid > .swiper-wrapper {
            flex-wrap: wrap;
          }
          .swiper-grid-column > .swiper-wrapper {
            flex-wrap: wrap;
            flex-direction: column;
          }
          .swiper-fade.swiper-free-mode .swiper-slide {
            transition-timing-function: ease-out;
          }
          .swiper-fade .swiper-slide {
            pointer-events: none;
            transition-property: opacity;
          }
          .swiper-fade .swiper-slide .swiper-slide {
            pointer-events: none;
          }
          .swiper-fade .swiper-slide-active,
          .swiper-fade .swiper-slide-active .swiper-slide-active {
            pointer-events: auto;
          }
          .swiper-cube {
            overflow: visible;
          }
          .swiper-cube .swiper-slide {
            pointer-events: none;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            z-index: 1;
            visibility: hidden;
            transform-origin: 0 0;
            width: 100%;
            height: 100%;
          }
          .swiper-cube .swiper-slide .swiper-slide {
            pointer-events: none;
          }
          .swiper-cube.swiper-rtl .swiper-slide {
            transform-origin: 100% 0;
          }
          .swiper-cube .swiper-slide-active,
          .swiper-cube .swiper-slide-active .swiper-slide-active {
            pointer-events: auto;
          }
          .swiper-cube .swiper-slide-active,
          .swiper-cube .swiper-slide-next,
          .swiper-cube .swiper-slide-next + .swiper-slide,
          .swiper-cube .swiper-slide-prev {
            pointer-events: auto;
            visibility: visible;
          }
          .swiper-cube .swiper-slide-shadow-bottom,
          .swiper-cube .swiper-slide-shadow-left,
          .swiper-cube .swiper-slide-shadow-right,
          .swiper-cube .swiper-slide-shadow-top {
            z-index: 0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          .swiper-cube .swiper-cube-shadow {
            position: absolute;
            left: 0;
            bottom: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.6;
            z-index: 0;
          }
          .swiper-cube .swiper-cube-shadow:before {
            content: '';
            background: #000;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            filter: blur(50px);
          }
          .swiper-flip {
            overflow: visible;
          }
          .swiper-flip .swiper-slide {
            pointer-events: none;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            z-index: 1;
          }
          .swiper-flip .swiper-slide .swiper-slide {
            pointer-events: none;
          }
          .swiper-flip .swiper-slide-active,
          .swiper-flip .swiper-slide-active .swiper-slide-active {
            pointer-events: auto;
          }
          .swiper-flip .swiper-slide-shadow-bottom,
          .swiper-flip .swiper-slide-shadow-left,
          .swiper-flip .swiper-slide-shadow-right,
          .swiper-flip .swiper-slide-shadow-top {
            z-index: 0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          .swiper-creative .swiper-slide {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            overflow: hidden;
            transition-property: transform, opacity, height;
          }
          .swiper-cards {
            overflow: visible;
          }
          .swiper-cards .swiper-slide {
            transform-origin: center bottom;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            overflow: hidden;
          }
    .no-click {pointer-events: none;}

  
    #NAX_BLOCK{
      z-index:9999999 !important;
    }
    .pagination {
    display: flex;
    justify-content: center;
    margin-top: 70px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 40px;
    height: 40px;
  cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    display: none;
  }
  ul.pagination li:last-child {
    display: none;
  }
  ul.pagination li:nth-child(2) {
   display: flex;
   justify-content: center;
   align-items: center;
    margin-right: 10px;
    border: 1px solid #e2e2e2;
    img {
      width: 9px;
    }
  }
  ul.pagination li:nth-last-child(2) {
    display: flex;
   justify-content: center;
   align-items: center;
    margin-left: 10px;
    border: 1px solid #e2e2e2;
    img {
      transform: rotate(180deg);
      width: 9px;
    }
  }
  ul.pagination li:last-child {
    display: none;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #262626;
    font-size: 0.9rem;
  }
  ul.pagination li.active a {
    color: #262626;
    font-weight: bold;
    font-size: 1rem;
  }
  ul.pagination li.active {
    background-color: #f4f4f4;
  }
`;
export default GlobalStyles;
