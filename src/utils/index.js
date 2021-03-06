export const debounce = (handle, delay) => {
  var timer = null;
  return function () {
    var _self = this,
        _args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      handle.apply(_self, _args)
    }, delay)
  }
}