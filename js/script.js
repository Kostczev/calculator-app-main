const themeSwitch = document.querySelector('.calc__theme-switch');
const themeSwitchButton = document.querySelector('.calc__theme-button');
const bodyClassList = document.querySelector('body').classList;
const themeRollingDistance = themeSwitch.clientWidth - themeSwitchButton.clientWidth - 8;


let curentTheme = 1;

themeSwitchButton.addEventListener('click', e => {
   switch (curentTheme) {
      case 1:
         themeSwitchButton.style.transform = `translateX(${themeRollingDistance / 2}px)`;
         curentTheme = 2;

         bodyClassList.remove('first-theme');
         bodyClassList.add('second-theme');
         break;

      case 2:
         themeSwitchButton.style.transform = `translateX(${themeRollingDistance}px)`;
         curentTheme = 3;

         bodyClassList.remove('second-theme');
         bodyClassList.add('third-theme');
         break;
      case 3:
         themeSwitchButton.style.transform = `translateX(0px)`;
         curentTheme = 1;

         bodyClassList.add('first-theme');
         bodyClassList.remove('third-theme');
         break;
   }
})
