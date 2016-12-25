const test = require('tape')
const ifElse = require('./')

test('ifElse', t => {
  const answer = ifElse(pred,tFn,fFn)(10)
  t.deepEquals('true 10', answer)
  t.end()
})

function pred(x){
  return x === 10
}

function fFn(x){
  return `false ${x}`
}

function tFn(x){
  return `true ${x}`
}
