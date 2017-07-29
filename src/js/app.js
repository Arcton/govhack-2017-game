import MainView from './views/main';
import Main from './main';
import styles from '../scss/app.scss';

const main = Main;

const mainView = new MainView(main);

mainView.render();
document.querySelector('[data-hook=main-outlet]').appendChild(mainView.el);
