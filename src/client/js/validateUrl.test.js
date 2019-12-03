import { validateUrl } from './validateUrl'

test('validate url', () => {
  expect(validateUrl('https://www.google.com')).toBe(true);
  expect(validateUrl('http://127.0.0.1')).toBe(true);
  expect(validateUrl('abcabc')).toBe(false);
});