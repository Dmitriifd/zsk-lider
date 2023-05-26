// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

Array.prototype.forEach.call(
  document.querySelectorAll('.file-upload__button'),
  function (button) {
    const hiddenInput = button.parentElement.querySelector(
      '.file-upload__input'
    );
    const label = button.parentElement.querySelector('.file-upload__label');
    const defaultLabelText = '';

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener('click', function () {
      hiddenInput.click();
    });

    hiddenInput.addEventListener('change', function () {
      const filenameList = Array.prototype.map.call(
        hiddenInput.files,
        function (file) {
          return file.name;
        }
      );

      label.textContent = filenameList.join(', ') || defaultLabelText;
      label.title = label.textContent;
    });
  }
);
