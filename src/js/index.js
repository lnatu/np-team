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

Dropdown.prototype.toggleDropdown = function() {
  var dropdownToggle = this.dropdownToggle;
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

Dropdown.prototype.initEvents = function() {
  this.toggleDropdown();
};

var dropdown = new Dropdown();
dropdown.initEvents();

var Modal = function() {
  this.toggle = document.querySelector('button[data-toggle]');
  this.close = document.querySelectorAll('button[data-dismiss]');
  this.modal = document.querySelector('.modal');
};

Modal.prototype.toggleModal = function() {
  this.toggle.addEventListener('click', function(e) {
    e.preventDefault();
    var toggleTarget = this.dataset.target;
    var modalTartget = document.querySelector(toggleTarget);
    modalTartget.style.display = 'block';
    modalTartget.classList.add('show');
  });
};

Modal.prototype.closeModal = function() {
  for (var i = 0; i < this.close.length; i++) {
    this.close[i].addEventListener('click', function(e) {
      e.preventDefault();
      var dismiss = this.dataset.dismiss;
      var modal = document.querySelector('.' + dismiss);
      modal.style.display = 'none';
      modal.classList.remove('show');
    });
  }
};

Modal.prototype.initEvents = function() {
  this.toggleModal();
  this.closeModal();
};

var modal = new Modal();
modal.initEvents();
