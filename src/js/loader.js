
const key = 'NewSeizeLand';

let resetting = false;

function saveState(state) {
  if (resetting) return;
  window.localStorage[key] = JSON.stringify(state);
}

function loadState(callback) {
  let state;
  if (window.localStorage[key] != null) {
    state = JSON.parse(window.localStorage[key]);
  }

  return callback(state);
}

function resetState() {
  resetting = true;
  window.localStorage[key] = null;
  document.location = document.location;
}

export { saveState, loadState, resetState };
