import Clock from './modules/Clock.js';
import Switcher from './modules/ImageSwitcher.js'
import Storage from './modules/Storage.js';
import Weather from './modules/Weather.js';


const timeOutputElement = document.querySelector('#time');
const dateOutputElement = document.querySelector('#date');
const bgImageElement = document.querySelector('#bg-image');
const imageSwitcherBtn = document.querySelector('#switcher-btn');
const greetPrefixElement = document.querySelector('#greeting-prefix');
const userNameElement = document.querySelector('#name');
const taskElement = document.querySelector('#task');
const cityElement = document.querySelector('#city');
const cityTempElement = document.querySelector('#city-temp');
const cityHumElement = document.querySelector('#city-hum');
const citySpeedElement = document.querySelector('#city-speed');
const weatherUpdateBtn = document.querySelector('#weather-btn');
const weatherIconElement = document.querySelector('#weather-icon');

document.body.addEventListener('hourChange', (ev) => {
  switcher.setImage(ev.detail.hours);
  weather.update();
});

document.body.addEventListener('cityChange', (ev) => {
  weather.update(ev.detail.city);
});

const clock = new Clock(timeOutputElement, dateOutputElement);
clock.init();

const switcher = new Switcher(bgImageElement, imageSwitcherBtn, greetPrefixElement);
switcher.init();

const storage = new Storage(userNameElement, taskElement, cityElement);
storage.init();

const weather = new Weather(cityElement, cityTempElement, cityHumElement, citySpeedElement, weatherUpdateBtn, weatherIconElement);
weather.init()