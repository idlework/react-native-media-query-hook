import { useMediaQuery } from './index';

jest.mock('react-native', () => ({
  useWindowDimensions: () => ({
    width: 1198,
    height: 768,
  }),
}));

// TODO: extends test with:
// several screen sizes
// orientation landscape and portrait
describe('test useMediaQuery function', () => {
  it('should return isSmallScreen true', () => {
    expect(
      useMediaQuery({
        maxHeight: 800,
      }),
    ).toBe(true);
  });
  it('should return orientation landscape', () => {
    expect(
      useMediaQuery({
        orientation: 'landscape',
      }),
    ).toBe(true);
  });
});
