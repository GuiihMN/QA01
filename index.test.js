const test = require('tape')
const index = require('./index')

test('t1', (t) => {
    t.assert(index.aplicarDesconto(10,5) === 5,
    "Descontou corretamente")
    t.end()
})

test('t2', (t) => {
    t.assert(index.aplicarDesconto(5,10.5) === -5.5,
    "Descontou corretamente")
    t.end()
})

test('t3', (t) => {
    t.assert(index.aplicarDesconto(8,2) === 6,
    "Descontou corretamente")
    t.end()
})

test('t4', (t) => {
    t.assert(index.aplicarDesconto(9,8) === 1,
    "Descontou corretamente")
    t.end()
})

test('t5', (t) => {
    t.assert(index.aplicarDesconto(15,15) === 0,
    "Descontou corretamente")
    t.end()
})
