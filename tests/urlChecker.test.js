import { checkForURL } from '../src/client/js/urlChecker';

test('valid url', () => {
  expect(checkForURL('https://news.zing.vn')).toBeTruthy();
});