# Angular 2 Tooling

Book: Angular 2 Development with Typescript
https://github.com/farata/angular2typescript
- discount code: faindz

## Type Definitions
- Files: `*.d.ts` stored in `typings` dir
- definitelytyped.org - largetest collection
- How to manage types? Type Definition Manager
- `tsconfig.json`
    - configure root directory for typings
- tsd deprecated
- `typings install <lib> --save`
- with `--ambient` flag will check other repos for type defs
### ES6 support
`typings install es6-shim --ambient --save`

## Unit Testing
### Jasmine
- `npm install jasmine-core -D`
- `typings install jasmine --ambient --save-dev`

### Protractor
- end-to-end testing
