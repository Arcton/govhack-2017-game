import View from 'ampersand-view';
import ViewSwitcher from 'ampersand-view-switcher';
import mapSvg from '../../assets/map.svg';
import RegionDetailsView from './region-details';

export default View.extend({
  template() {
    return `
    <div class="map-container">
      <div class="modal-container"></div>
      <div class="map">
        ${mapSvg}
      </div>
    <div>`;
  },

  props: {
    selectedCity: 'state',
  },

  initialize(opts) {
    this.regions = opts.regions;
  },

  render() {
    this.renderWithTemplate(this);

    Object.keys(this.regions).forEach((key) => {
      const city = this.regions[key];
      const clickRegion = this.el.querySelector(`#${key}`);
      clickRegion.addEventListener('click', () => {
        const view = new RegionDetailsView({
          model: city,
        });

        this.viewSwitcher.set(view);
      });
    });

    this.viewSwitcher = new ViewSwitcher(this.el.querySelector('.modal-container'));
  },
});
