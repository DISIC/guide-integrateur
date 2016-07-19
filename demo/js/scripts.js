/**Licence MIT https://github.com/oliverfarrell/accessible-tabs **/

var Tabs = (function () {

	var config = {
		selector: document.querySelectorAll('.tabs')
	};

	var _forEachElement = function (selector, fn) {

		var elements = selector;
		for (var i = 0; i < elements.length; i++)
			fn(elements[i], i);

	};

	var _addEventListener = function (el, eventName, handler) {

		if (el.addEventListener) {
			el.addEventListener(eventName, handler);
		} else {
			el.attachEvent('on' + eventName, function(){
				handler.call(el);
			});
		}

	};

	var nextElementSibling = function (el) {

		do { el = el.nextSibling; } while ( el && el.nodeType !== 1 );
		return el;

	};

	var previousElementSibling = function (el) {

		do { el = el.previousSibling; } while ( el && el.nodeType !== 1 );
		return el;

	};

	var _showTabPanel = function (tabGroup, tabId) {

		var tabs = tabGroup.querySelectorAll('[role="tab"]'),
				selectedTab = tabGroup.querySelector('[data-tab="' + tabId + '"'),
				tabPanel = tabGroup.querySelector('[data-panel="' + tabId + '"');

		// hide all other tab panels in the tab group
		_hideTabPanels(tabGroup, tabs);

		// change the `aria-` states of the tab and panel
		selectedTab.setAttribute('aria-selected', true);
		selectedTab.setAttribute('tabindex', '0');
		tabPanel.setAttribute('aria-hidden', false);

	};

	var _hideTabPanels = function (tabGroup, tabGroupTabs) {

		var tabsPanels = tabGroup.querySelectorAll('[role="tabpanel"]');

		// change the `aria-` states of the tabs
		_forEachElement(tabGroupTabs, function(el, i) {
			el.setAttribute('aria-selected', false);
			el.setAttribute('tabindex', '-1');
		});

		// change the `aria-` states of the panel
		_forEachElement(tabsPanels, function(el, i) {
			el.setAttribute('aria-hidden', true);
		});

	};

	var _makeAccessible = function (el) {

		var tabsList = el.querySelector('ul'),
				tabListItems = tabsList.querySelectorAll('li'),
				tabListLinks = tabsList.querySelectorAll('button'),
				tabPanels = el.querySelectorAll('article');

		// apply an `aria-role` to the `<ul>`
		tabsList.setAttribute('role', 'tablist');

		// apply an `aria-role` to the `<li>`
		_forEachElement(tabListItems, function(el, i) {
			el.setAttribute('role', 'presentation');
		});

		// apply `aria-` attributes to `<a>`
		_forEachElement(tabListLinks, function(el, i) {
			el.setAttribute('data-tab', i);
			el.setAttribute('role', 'tab');
			el.setAttribute('aria-controls', 'panel-' + i);

			// if it's the first tab it's already active
			if(i === 0)
				el.setAttribute('aria-selected', true);
			else
				el.setAttribute('aria-selected', false);
				
			if(i === 0)
				el.setAttribute('tabindex', '0');
			else
				el.setAttribute('tabindex', '-1');
		});

		// apply `aria-` attributes to `<div>`
		_forEachElement(tabPanels, function(el, i) {
			el.setAttribute('data-panel', i);
			el.setAttribute('role', 'tabpanel');
			el.setAttribute('aria-labeledby', 'tab-' + i);

			// if it's the first panel it's already active
			if(i === 0)
				el.setAttribute('aria-hidden', false);
			else
				el.setAttribute('aria-hidden', true);
		});

	};


	var init = function () {

		_forEachElement(config.selector, function(el, i) {

			_makeAccessible(el);

			var tab = el,
					tabsList = tab.querySelectorAll('[role="tab"]'),
					tabPanels = tab.querySelectorAll('[role="tabpanel"]');


			_forEachElement(tabsList, function(el, i) {
				_addEventListener(el, 'click', function(e) {
					_showTabPanel(tab, el.dataset.tab);
					e.preventDefault();
				});

				_addEventListener(el, 'focus', function() {
					_showTabPanel(tab, el.dataset.tab);
				});

				_addEventListener(el, 'keydown', function(e) {
					var active = document.activeElement;

					if(e.which === 37 || e.which === 38) {
						var prevTab = previousElementSibling(active.parentNode);

						if(prevTab) {
							prevTab.querySelector('button').focus();
						}
					} else if(e.which === 39 || e.which === 40) {
						var nextTab = nextElementSibling(active.parentNode);

						if(nextTab) {
							nextTab.querySelector('button').focus();
						}
					}

				});
			});


		});

	};


	return {
		init: init
	};


})();

