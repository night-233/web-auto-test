 function add(a, b) {
  return a + b;
}
 function mnus(a, b) {
  return a - b;
}
 function multi(a, b) {
  return a * b;
}

function testPromise(name) {
  return new Promise((resolve, reject) => {
    resolve(`hello ${name}`)
  })
}
export default {
  add,
  mnus,
  multi,
  testPromise,
}
// try {
//   module.exports = {
//     add,
//     mnus,
//     multi,
//   }
// } catch(e) {
//   console.log(e)
// }