# Lodash: The Basics
Ben Ellingson

https://github.com/bellingson/lodash-examples

Most common lodash util categories (informal):
- collection
- array
- lang
- object

## Customize builds
- `npm i -g lodash-cli`
- `lodash category=collection,array -o ./dist/lodash.js`
- `lodash include=each,filter,map -o ./dist/lodash.js`

### Include in Typescript:
`declare var _: any;` //hint to jslint