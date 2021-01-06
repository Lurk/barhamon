import { memoize } from "../utils";

test('memoized function should run only once with same argument', () => {
  const sum = jest.fn((x: number[]) => x.reduce((acc, v) => acc + v, 0));
  const f = memoize(sum)
  const data = [1, 2];
  f(data);
  f(data);
  expect(sum.mock.calls.length).toBe(1);
});

test('memoized function should run every time we pass different args', () => {
  const sum = jest.fn((x: number[]) => x.reduce((acc, v) => acc + v, 0));
  const f = memoize(sum)
  f([1, 2]);
  f([1, 2]);
  expect(sum.mock.calls.length).toBe(2);
});
