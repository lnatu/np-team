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

var Tab = function() {
  this.tabLink = document.querySelectorAll('.tab-link');
  this.tabPane = document.querySelectorAll('.tab-pane');
  this.tabLinkParent = '';
  this.tabContentParent = '';
};

Tab.prototype.hideTabPane = function(parent) {
  var tabPane = document.querySelectorAll('#' + parent + ' .tab-pane');
  for (var i = 0; i < tabPane.length; i++) {
    tabPane[i].classList.remove('show');
    tabPane[i].classList.remove('active');
  }
};

Tab.prototype.deactiveLink = function(parent) {
  var tabLink = document.querySelectorAll('#' + parent + ' .tab-link');
  for (var i = 0; i < tabLink.length; i++) {
    tabLink[i].classList.remove('active');
  }
};

Tab.prototype.openTab = function() {
  var tabLink = this.tabLink;
  var _this = this;
  for (var i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener('click', function(e) {
      e.preventDefault();
      _this.tabLinkParent = this.parentElement.parentElement.id;
      _this.tabContentParent = this.parentElement.parentElement.nextElementSibling.id;
      _this.deactiveLink(_this.tabLinkParent);
      _this.hideTabPane(_this.tabContentParent);
      this.classList.add('active');
      var tabTarget = this.dataset.tab;
      var tabToShow = document.querySelector(tabTarget);
      tabToShow.classList.add('show');
      tabToShow.classList.add('active');
    });
  }
};

Tab.prototype.initEvents = function() {
  this.openTab();
};

var tab = new Tab();
tab.initEvents();
