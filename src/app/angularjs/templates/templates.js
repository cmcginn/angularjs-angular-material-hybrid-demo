angular.module('templates', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put(
      '/tabs.component.html',
      '<div class="layout-margin"><div id="tabsContainer"><md-tabs><md-tab><md-tab-label>Buttons</md-tab-label><md-tab-body><section layout="row" layout-align="start center" layout-wrap layout-margin><md-button>Button</md-button><md-button md-no-ink class="md-primary">Primary (md-noink)</md-button><md-button ng-disabled="true" class="md-primary">Disabled</md-button><md-button class="md-warn">Warn</md-button></section><md-divider></md-divider><section layout="row" layout-align="start center" layout-wrap layout-margin><md-button class="md-raised">Button</md-button><md-button class="md-raised md-primary">Primary</md-button><md-button ng-disabled="true" class="md-raised md-primary">Disabled</md-button><md-button class="md-raised md-warn">Warn</md-button></section></md-tab-body></md-tab><md-tab><md-tab-label>tab two</md-tab-label><md-tab-body>tab two content</md-tab-body></md-tab><md-tab><md-tab-label>tab three</md-tab-label><md-tab-body>tab three content</md-tab-body></md-tab></md-tabs></div></div>'
    );
  },
]);
