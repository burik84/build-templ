export default class {
    constructor(imgEl, switchBtnEl, greetPrefixEl) {
      this.imageElement = imgEl;
      this.switcherBtnElement = switchBtnEl;
      this.greetPrefixElement = greetPrefixEl;
      this.greetPrefixes = {
        night: 'Доброй&nbsp;ночи, ',
        morning: 'Доброе&nbsp;утро, ',
        day: 'Добрый&nbsp;день, ',
        evening: 'Добрый&nbsp;вечер, '
      }
    }

    init() {
      const idx = [];
      while (idx.length < 24) {
        const randomNumber = Math.floor(Math.random() * (21 - 1) + 1);
        if (!idx.slice(idx.length - idx.length % 6).includes(randomNumber)) {
          idx.push(randomNumber);
        }
      }
      this.imageIndices = idx;

      this.imageElement.addEventListener('load', () => {
        this.appearanceAnimation();
      });
      this.imageElement.addEventListener('animationend', (ev) => {
        if (ev.animationName === 'disappearance') {
          this.imageElement.classList.remove('hour-picture__image_displayed');
          this.imageElement.classList.remove('hour-picture__image_anim_disappear');
          this.imageElement.setAttribute('src', this.getPathToImage());
        } else if (ev.animationName === 'appearance') {
          this.imageElement.classList.add('hour-picture__image_displayed');
          this.imageElement.classList.remove('hour-picture__image_anim_appear');
          this.switcherBtnElement.removeAttribute('disabled');
        }
      });
      this.switcherBtnElement.addEventListener('click', (ev) => {
        this.switcherBtnElement.setAttribute('disabled', 'disabled');
        this.setImage(++this.hour)
      });
    }

    setImage(hour) {
      this.hour = hour >= this.imageIndices.length ? 0 : hour;
      this.greetPrefixElement.innerHTML = this.greetPrefixes[this.getPeriodOfDay()];
      if (this.imageElement.getAttribute('src') === null) {
        this.imageElement.setAttribute('src', this.getPathToImage());
      } else {
        this.imageElement.classList.add('hour-picture__image_anim_disappear');
      }
    }

    appearanceAnimation() {
      this.imageElement.classList.add('hour-picture__image_anim_appear');
    }

    getPeriodOfDay() {
      if (this.hour < 6) {
        return 'night';
      } else if (this.hour < 12) {
        return 'morning';
      } else if (this.hour < 18) {
        return 'day';
      } else if (this.hour < 24) {
        return 'evening';
      }
    }

    getPathToImage() {
      return `assets/images/${this.getPeriodOfDay()}/${String(this.imageIndices[this.hour]).padStart(2, '0')}.jpg`;
    }
  }