import MainView from './views/main';
import Main from './main';
import styles from '../scss/app.scss';

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/icons', true, /\.svg$/));


const main = Main;

const mainView = new MainView(main);

mainView.render();
document.querySelector('[data-hook=main-outlet]').appendChild(mainView.el);
