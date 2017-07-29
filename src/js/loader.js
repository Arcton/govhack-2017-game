
const key = 'NewSeizeLand';

function saveState(state) {
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
  window.localStorage[key] = null;
  document.location = document.location;
}

export { saveState, loadState, resetState };
