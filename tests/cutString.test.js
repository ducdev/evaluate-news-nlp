import { cutString } from '../src/client/js/textControl';

test('cutString test', () => {
  expect(cutString('professional', 500).length).toBe(12);
});