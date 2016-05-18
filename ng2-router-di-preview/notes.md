# Angular 2: Router and DI Preview
Peter Pavlovich

## Component Router
- Available for 2.x and 1.5
Other framework routers:
- ngRoute 1.x
- uiRouter
- Ember.js router
- Durandal's router
- Passport

- UI Router not suitable for ng2 - not component focused

### Features
- History manipulation
- Configuration by convention - auto routing if components are conventionally named
- Automatic document title updates
- dynamic loading - lazy loading
    - can use separate bundles for a given app
- embedded apps
    - child componets can define their own routes
#### Screen Activation
- child components can discovery navigation events from parent and potentially cancel/modify
- nav lifecycle hooks:
    - canDeactivate | deactivate | canActivate | activate
    - returns boolean|nav command|promise(boolean|nav command)
    - promise fixes issue where nav happens before data is ready
    
Component Router demo: http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm?p=preview

## Dependency Injection
