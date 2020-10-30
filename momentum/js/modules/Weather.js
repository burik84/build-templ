export default class {
    constructor(cityEl, cityTempEl, cityHumEl, citySpeedEl, updateBtn, weatherIconEl) {
      this.cityElement = cityEl;
      this.cityTempElement = cityTempEl;
      this.cityHumElement = cityHumEl;
      this.citySpeedElement = citySpeedEl;
      this.updateBtn = updateBtn;
      this.weatherIconElement = weatherIconEl;
      this.weatherRootElement = document.querySelector('.weather');
    }

    init() {
      this.cityName = this.cityElement.textContent;
      this.updateBtn.addEventListener('click', () => {
        this.update();
      });
    }

    async getWeatherData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=fa4575ebd77db5b176bcec047383253d&&units=Metric&lang=ru`);
      if (response.ok && response.headers.get('Content-Type') === 'application/json; charset=utf-8') {
        const json = await response.json();
        this.stopAnimation();
        this.showData(json);
      } else {
        this.stopAnimation();
        this.displayErrorModal();
      }
    }

    showData(json) {
      const weatherIco = new Image();
      weatherIco.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
      weatherIco.setAttribute('alt', `${json.weather[0].description}`);
      weatherIco.setAttribute('class', 'weather__icon');

      this.cityTempElement.textContent = json.main.temp;
      this.cityHumElement.textContent = json.main.humidity;
      this.citySpeedElement.textContent = json.wind.speed;
      if (this.updateBtn.previousSibling === null) {
        this.updateBtn.insertAdjacentElement('beforebegin', weatherIco);
      } else {
        let prevIcon = this.updateBtn.previousSibling;
        prevIcon.replaceWith(weatherIco);
      }

    }

    showSpinner() {
      this.cityTempElement.textContent = '';
      this.cityHumElement.textContent = '';
      this.citySpeedElement.textContent = '';
      this.cityTempElement.classList.add('loading');
      this.cityHumElement.classList.add('loading');
      this.citySpeedElement.classList.add('loading');
    }

    update(city) {
      if (city) {
        this.cityName = city;
      }
      this.showSpinner();
      this.getWeatherData();
    }

    displayErrorModal() {
      const html = `<div class="modal">
      <div class="modal__content">
        <button class="modal__close-btn" type="button">Закрыть</button>
        <p class="modal__msg">Ошибка получения данных</p>
      </div>
    </div>`;
      this.weatherRootElement.insertAdjacentHTML('beforeend', html);

      document.querySelector('.modal__close-btn').addEventListener('click', (ev) => {
        console.log('Close clicked', ev.target);
        this.cityTempElement.textContent = '?';
        this.cityHumElement.textContent = '?';
        this.citySpeedElement.textContent = '?';
        this.weatherRootElement.lastChild.remove();
      });
    }

    stopAnimation() {
      this.cityTempElement.classList.remove('loading');
      this.cityHumElement.classList.remove('loading');
      this.citySpeedElement.classList.remove('loading');
    }
  }