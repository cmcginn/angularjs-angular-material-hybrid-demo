# AngularJS/Angular Material Hybrid Demo

This was started on [StackBlitz](https://stackblitz.com/edit/angularjs-material-ngupgradelite-demo),
based on a demo by [George Kalpakas](https://github.com/gkalpak), but using ngUpgrade can be done
in a way that is either compatible with StackBlitz or the Angular CLI, not both. This repo uses the
Angular CLI along with the `downgradeModule()`.

Find out more in the [Upgrading for Performance Guide](https://angular.io/guide/upgrade-performance).

## AngularJS Material Migration Guide

We recently published a [comprehensive guide](https://material.angularjs.org/latest/migration)
for upgrading AngularJS Material apps to Angular. It includes guidance for migrating to
Angular Material, the Angular Component Dev Kit (CDK), and the Angular Flex Layout library.
Additionally, we provide guidance on using pure CSS Grid and Flexbox for layout, migration of
theming features, services, typography, and more.

Learn more in the [AngularJS Material Migration Guide](https://material.angularjs.org/latest/migration). 

## Caveats found so far

- Different `selector` formatting and conversions between AngularJS and Angular. It depends on which
    is referring to the component, not which the component is build for.
  - AngularJS referring to any component: `appComponent`
  - Angular referring to any component: `app-component`
- ngUpgrade projects that work on StackBlitz, don’t work in the CLI and vice versa.
- Need to provide at least one `entryComponents` for CLI support (not mentioned in
  [guide](https://angular.io/guide/upgrade-performance#bootstrapping-with-downgrademodule)).
- Need to disable Terser via `"optimization": false` in production configuration or it will mangle
  AngularJS Provider names.

## Minification-friendly AngularJS Code

- Enable `strictDi` to help you catch issues early:
  - `angular.bootstrap(rootElement, [angularjsModule.name], {strictDi: true});`
- For injections into `.run()`, `.config()`, etc. use standard dependency annotation:
  - `.run(['$templateCache', '$templateRequest', ($templateCache, $templateRequest) => {`
- For TypeScript classes use `$inject`:
  - `static $inject = ['$scope'];`

### AngularJS Components w/ templateUrl

- `templateUrl` in AngularJS components does not work out of the box.
  - Possible to manually load the `$templateCache` in `.run()`.
  - Must tell the CLI to deploy the templates via `assets:` in [`angular.json`](angular.json)
    and a glob of `*.html` files.
  - Any components that use `templateUrl` should not be displayed on page load as loading the
    `$templateCache` is asynchronous.

## TODO

- [ ] Look into loading `$templateCache` at build time, maybe using Gulp.
- [ ] Look into working around Terser mangling, using [dependency annotation](https://docs.angularjs.org/guide/di#dependency-annotation).
- [ ] Add more AngularJS Material components.
- [ ] Add more Angular Material components.
- [ ] Add more CDK components.
- [ ] Add some AngularJS Material services.
- [ ] Add some Angular Material services.
- [ ] Add some CDK services.
