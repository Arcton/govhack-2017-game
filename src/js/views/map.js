import View from 'ampersand-view';
import mapSvg from '../../assets/map.svg';

export default View.extend({
  template() {
    return `<div class="map">
      ${mapSvg}
    </div>`;
  },

  initialize(opts) {
    this.regions = opts.regions;
  },

  render() {
    this.renderWithTemplate(this);

    Object.keys(this.regions).forEach((key) => {
      const city = this.regions[key];
      let clickRegion = this.el.querySelector(`#${key}`);
      clickRegion.addEventListener('click', () => {
        console.log(`clicked ${key}`);
      });
    });
  },
});
