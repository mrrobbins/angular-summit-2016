Angular 2 Workshop - Monday 2016-05-16

## setup
install cli.angular.io

## Exercises
j.mp/as-workshop redirect to github

## Generate new componentes
- ng generate route <route>
- ng g r home
+home directory created - plus tells ng which components are routes 

## Imports
 - Aliased imports to modules under node_modules

## lazy loading component
- systemjs

## Routing
- `LocationStrategy.HASH` - switch between HASH based and HTML5 navigation


## Decorators 
- @Component function applied to thing below it

## Inject providers
- no more worry on minified code

## addtl projects
- angular / zone.js - hooks for all browser events
-- no more forced digesting

## angular-cli.json config
- defaults.prefix - default is `app`
-- a shared team component `foo` would have selector `app-foo`

Angular Augury Chrome ext - view directives used
https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=en

Componets ARE A Directive WITH A Template
Transclusion
