

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
