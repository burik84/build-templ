export default class {
    constructor(userNameEl, taskEl, cityEl) {
      this.userNameElement = userNameEl;
      this.taskElement = taskEl;
      this.cityElement = cityEl;
      this.defaultValues = {
        name: '[имя]',
        task: '[описание]',
        city: 'Москва',
      }
    }

    init() {
      let storedData = JSON.parse(localStorage.getItem('momentum'));
      this.userNameElement.textContent = storedData?.name || this.defaultValues.name;
      if (this.userNameElement.textContent === this.defaultValues.name) {
        this.userNameElement.classList.add('placeholder');
      }
      this.taskElement.textContent = storedData?.task || this.defaultValues.task;
      if (this.taskElement.textContent === this.defaultValues.task) {
        this.taskElement.classList.add('placeholder');
      }
      this.cityElement.textContent = storedData?.city || this.defaultValues.city;

      document.body.addEventListener('focusin', (ev) => {
        if (ev.target === this.userNameElement || ev.target === this.taskElement || ev.target === this.cityElement) {
          ev.target.textContent = '';
          ev.target.classList.remove('placeholder');
        }
      }, true);

      document.body.addEventListener('focusout', (ev) => {
        if (!ev.target.textContent.trim()) {
          ev.target.textContent = this.defaultValues[ev.target.id];
          if (ev.target !== this.cityElement) {
            ev.target.classList.add('placeholder');
          }
          if (storedData !== null && storedData.hasOwnProperty(ev.target.id)) {
            delete storedData[ev.target.id];
            if (Object.keys(storedData).length) {
              localStorage.setItem('momentum', JSON.stringify(storedData));
            } else {
              localStorage.removeItem('momentum');
            }
          }
        } else {
          if (storedData === null) {
            storedData = {
              [ev.target.id]: ev.target.textContent
            };
          } else {
            storedData[ev.target.id] = ev.target.textContent;
          }
          localStorage.setItem('momentum', JSON.stringify(storedData));
        }
        if (ev.target === this.cityElement) {
          this.generateEvent('cityChange', {city: ev.target.textContent});

        }
      }, true);

      document.body.addEventListener('keypress', (ev) => {
        switch (ev.target) {
          case this.userNameElement:
            if (this.userNameElement.textContent.length >= 20) {
              ev.preventDefault();
            }
            break;
          case this.cityElement:
            if (this.cityElement.textContent.length >= 20) {
              ev.preventDefault();
            }
            break;
          case this.taskElement:
            if (this.taskElement.textContent.length >= 128) {
              ev.preventDefault();
            }
            break;
        }
      });

      document.body.addEventListener('keydown', (ev) => {
        if (ev.code === 'Enter' && Object.keys(this.defaultValues).includes(ev.target.id)) {
          ev.target.blur();
        }
      });
    }

    generateEvent(name, params) {
      const event = new CustomEvent(name, {
        bubbles: true,
        detail: params,
      });
      this.cityElement.dispatchEvent(event);
    }
  }