/**Ознакомься с документацией библиотеки Vimeo плеера.
1. Добавь библиотеку как зависимость проекта через npm.
2. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
3. Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
4. Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
5. При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
6. Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду. */

//Инициализация плеера
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

//Отслеживание события timeupdate и сщхранение в локальном хранилище

const takeTime = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
  //   console.log(resultTime);
};

player.on('timeupdate', throttle(takeTime, 1000));

//Перезагрузка страницы

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    seconds = localStorage.getItem('videoplayer-current-time');
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        alert('The time was less than 0 or greater than the video’s duration!');
        break;

      default:
        alert('Some other error occurred!');
        break;
    }
  });
