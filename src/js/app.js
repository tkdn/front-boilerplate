import $ from 'jquery'

function hoge () {
  return true
}

hoge()

class Hoge {
  constructor (opt) {
    const defaults = {
      param1: null,
      param2: true
    }
    this.config = Object.assign({}, defaults, opt)
  }
  getOptions () {
    return this.config
  }
}

const instanceOfHoge = new Hoge({
  param1: 'param1'
})

console.log(instanceOfHoge.getOptions())
console.log($().jquery)
