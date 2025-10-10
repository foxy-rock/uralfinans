const videoContainer = document.getElementById('video-container');
  const video = document.getElementById('myVideo');
  const playButton = document.getElementById('playButton');

  // При клике на кнопку - запуск видео и скрытие кнопки
  playButton.addEventListener('click', () => {
    video.play();
  });

  // Когда видео начинает играть — скрывать кнопку
  video.addEventListener('play', () => {
    videoContainer.classList.add('playing');
  });

  // Когда видео останавливается или заканчивается — показывать кнопку
  video.addEventListener('pause', () => {
    videoContainer.classList.remove('playing');
  });
  video.addEventListener('ended', () => {
    videoContainer.classList.remove('playing');
  });

const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      // Удаляем активный класс у всех табов и контента
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Добавляем активный класс выбранному табу и его содержимому
      tab.classList.add('active');
      document.querySelector(`.tab-content[data-content="${target}"]`).classList.add('active');
    });
  });