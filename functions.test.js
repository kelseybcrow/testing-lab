const { TestWatcher } = require('jest')
const myFunctions = require('./functions')

test('Return two test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('Greeting test', () => {
    expect(myFunctions.greeting('Kelsey')).toBe('Hello, Kelsey.')
})

test('Add test', () => {
    expect(myFunctions.add(5, 9)).toBe(14)
})
