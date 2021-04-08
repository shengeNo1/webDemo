
import { h } from './lib/h'

var vnode = h('div#divId.red', {}, [h('p',{},'2S后改变')])

var newVnode = h('div#divId.red', {}, [h('p', {},'已改变')])

console.log(newVnode)
console.log(vnode)
