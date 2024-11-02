(function() {
  var responsiveMenu,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  responsiveMenu = (function() {
    function responsiveMenu(nav, _at_opt) {
      var menu, menuToggle, slideToggler, sub, subMenu, subMenuToggle, _base, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
      this.opt = _at_opt;
      this.breaking = __bind(this.breaking, this);
      this.createToggle = __bind(this.createToggle, this);
      (_base = this.opt).breaking || (_base.breaking = '640px');
      this.opt.maxBreaking = parseInt(this.opt.maxBreaking) || 1040;
      menu = nav.querySelector('.menu');
      if (!slideToggler) {
        slideToggler = (function() {
          function slideToggler(_at_el) {
            this.el = _at_el;
            this.toggle = __bind(this.toggle, this);
            if (!this.el) {
              return;
            }
          }

          slideToggler.prototype.toggle = function() {
            this.el.classList.toggle('open');
            return this.el.style.cssText = "display: " + (this.el.classList.contains('open') ? 'block' : 'none');
          };

          return slideToggler;

        })();
      }
      _ref = menu.querySelectorAll('ul');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sub = _ref[_i];
        sub.toggler = new slideToggler(sub);
      }
      menuToggle = this.createToggle(nav, 'menu-toggle', 'Menu');
      menuToggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('nav-open');
        return menuToggle.menu.classList.toggle('open', document.documentElement.classList.contains('nav-open'));
      });
      _ref1 = menu.querySelectorAll('ul');
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        subMenu = _ref1[_j];
        subMenu.parentNode.classList.add('has-children');
        subMenuToggle = this.createToggle(subMenu, 'sub-menu-toggle', '+');
        subMenuToggle.addEventListener('click', function() {
          var open, _k, _len2, _ref2, _results;
          this.menu.toggler.toggle();
          _ref2 = this.parentNode.parentNode.querySelectorAll('ul.open');
          _results = [];
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            open = _ref2[_k];
            if (open !== this.menu) {
              _results.push(open.toggler.toggle());
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        });
      }
      _ref2 = menu.querySelectorAll('.has-children[class*=current] > ul');
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        sub = _ref2[_k];
        sub.classList.add('open');
      }
      document.addEventListener('DOMContentLoaded', this.breaking);
      window.addEventListener('resize', this.breaking);
      setTimeout(this.breaking, 3000);
    }

    responsiveMenu.prototype.createToggle = function(menu, klass, label) {
      var toggle;
      toggle = menu.parentNode.querySelector("." + klass) || document.createElement("button");
      toggle.classList.add(klass);
      toggle.appendChild(document.createTextNode(label));
      toggle.menu = menu.nodeName === 'UL' ? menu : menu.querySelector('.menu');
      return menu.parentNode.insertBefore(toggle, menu.nextSibling);
    };

    responsiveMenu.prototype.breaking = function() {
      var div, el, isMobile, windowWidth, _i, _len, _ref;
      document.body.classList.remove('menu-mobile');
      document.body.classList.add('menu-desktop');
      div = document.createElement('div');
      div.style.cssText = "position: absolute; width: " + this.opt.breaking;
      document.body.appendChild(div);
      this.menuBreak = div.clientWidth || 0;
      document.body.removeChild(div);
      _ref = document.querySelectorAll("" + this.opt.breaking);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        this.menuBreak += this.getWidth(el);
      }
      isMobile = (windowWidth = document.body.clientWidth) <= Math.min(this.menuBreak, this.opt.maxBreaking);
      document.body.classList.toggle('menu-mobile', isMobile);
      document.body.classList.toggle('menu-desktop', !isMobile);
      if (!isMobile) {
        return document.documentElement.classList.remove('nav-open');
      }
    };

    responsiveMenu.prototype.getWidth = function(el) {
      var clone, width;
      if (el.clientWidth > 0) {
        return el.clientWidth;
      }
      clone = el.cloneNode(true);
      clone.style.cssText = 'position: absolute; visibility: hidden; display: block;';
      el.parentNode.appendChild(clone);
      width = clone.clientWidth;
      el.parentNode.removeChild(clone);
      return width;
    };

    return responsiveMenu;

  })();

  new responsiveMenu(document.querySelector('#nav'), {
    breaking: '.logo, .tagline, .menu'
  });

}).call(this);