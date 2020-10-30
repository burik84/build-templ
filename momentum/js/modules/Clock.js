export default class {
    constructor(timeEl, dateEl) {
      this.timeElement = timeEl;
      this.dateElement = dateEl;
      this.TICK_RATE = 1000;
      this.daysOfWeekMap = {
        0: 'Воскресенье',
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота'
      };
      this.monthsOfYearMap = {
        0: 'января',
        1: 'февраля',
        2: 'марта',
        3: 'апреля',
        4: 'мая',
        5: 'июня',
        6: 'июля',
        7: 'августа',
        8: 'сентября',
        9: 'октября',
        10: 'ноября',
        11: 'декабря'
      };
    }

    init() {
      let nextTimeToTick = Date.now();
      const self = this;
      function nextAnimationFrame() {
        const now = Date.now();
        if (nextTimeToTick <= now) {
          self.tick();
          nextTimeToTick = now + self.TICK_RATE;
        }
        requestAnimationFrame(nextAnimationFrame);
      }
      requestAnimationFrame(nextAnimationFrame);
    }

    tick() {
      const date = new Date;
      this.isoString = date.toISOString();
      this.month = date.getMonth();
      this.weekDay = date.getDay();
      this.day = date.getDate();

      const hours = date.getHours();
      if (this.hours === undefined || this.hours < hours || (this.hours === 23 && hours === 0)) {
        this.generateEvent('hourChange', {hours: hours});
      }
      this.hours = hours;

      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.updateDisplay();
    }

    updateDisplay() {
      this.timeElement.closest('time').setAttribute('datetime', this.isoString);
      this.timeElement.innerHTML = `
        ${String(this.hours).padStart(2, '0')}<span class="current-moment__delimiter">:</span>${String(this.minutes).padStart(2, '0')}<span class="current-moment__delimiter">:</span>${String(this.seconds).padStart(2, '0')}
      `;
      this.dateElement.textContent = `${this.daysOfWeekMap[this.weekDay]}, ${this.day} ${this.monthsOfYearMap[this.month]}`;
    }

    generateEvent(name, params) {
      const event = new CustomEvent(name, {
        bubbles: true,
        detail: params,
      });
      this.timeElement.dispatchEvent(event);
    }
  }