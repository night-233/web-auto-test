// const math = require('./math');
import math from './math';
const {add, mnus, multi, testPromise} = math;

console.log('sfa', mnus);
test('测试 3 + 7', () => {
  expect(add(3,7)).toBe(10)
})

test('测试 3 - 3', () => {
  expect(mnus(3,3)).toBe(0)
})
test('测试 3 * 3', () => {
  expect(multi(3,3)).toBe(9)
})

it('should be test hello ciel', async () => {
  expect.assertions(1); // 确保至少有一个断言被调用，否则测试失败
  // return testPromise('ciel').then((data) => {
  //   expect(data).toBe('hello ciel')
  // })
  const data = await testPromise('ciel');
  expect(data).toBe('hello ciel')
})

test('test null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeTruthy();
  expect(n).toBeFalsy();
})

//单元测试， 集成测试；