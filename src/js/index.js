var dopdownElements = {
  dropdown: '.dropdown',
  dropdownToggle: '.dropdown-toggle',
  dropdownMenu: '.dropdown-menu'
};

var Dropdown = function() {
  this.dropdown = document.querySelector(dopdownElements.dropdown);
  this.dropdownToggle = document.querySelectorAll(
    dopdownElements.dropdownToggle
  );
  this.dropdownMenu = document.querySelectorAll(dopdownElements.dropdownMenu);
};

Dropdown.prototype.initEvents = function() {
  var _this = this;
  var dropdownToggle = _this.dropdownToggle;
  for (var i = 0; i < dropdownToggle.length; i++) {
    dropdownToggle[i].addEventListener('click', function(e) {
      e.preventDefault();
      var dropdownMenu = this.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
      }
    });
  }
};

var dropdown = new Dropdown();
dropdown.initEvents();
