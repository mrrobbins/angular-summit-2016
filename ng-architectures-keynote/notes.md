# Angular Architectures
Best Practices Structure, Style

Peter Pavlovich
Principal Arch, EnerNOC

## Styles
John Papa
https://github.com/johnpapa/angular-styleguide

- Don't use words in filenames that can be intuited from other context (e.g. dir hierarchy)
- LIFT: LOCATE, IDENTIFY, FLAT, TRY DRY

### Files
- `<feature>.<type>.<ext>`
- single responsibility
- limit 400 lines/file, 75 lines/function

## Migration
- Use `Controller as cntrlName` syntax to get a namespace
    - e.g. `cntrlName.varName` instead of just `varName`
- Use ng-<prefix> directives instead of {{}}
- Angular 2 team's migration tool
- `ng-init` deprecated in ng2

## Services
- Use liberally - http, shared state, logic
### types:
1. Service - returns `this`
2. Factory - returns object
3. Provider - returns object, configurable

- Write classes, not just functions/IFFs
- use built-in `$` prefix services:

## Manage Dependencies
- Bower, JSPM
- slug repository for built packages to go back in time

## Architypes
- Yo