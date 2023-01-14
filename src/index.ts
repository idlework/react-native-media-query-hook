import { useWindowDimensions } from 'react-native';

const MIN_WIDTH = 'minWidth';
const MAX_WIDTH = 'maxWidth';
const MIN_HEIGHT = 'minHeight';
const MAX_HEIGHT = 'maxHeight';

const ORIENTATION = 'orientation';
const LANDSCAPE = 'landscape';
const PORTRAIT = 'portrait';

type QueryType =
  | typeof MIN_WIDTH
  | typeof MAX_WIDTH
  | typeof MIN_HEIGHT
  | typeof MAX_HEIGHT
  | typeof ORIENTATION;

type QueryValue = number | typeof LANDSCAPE | typeof PORTRAIT;

type Query = {
  [key in QueryType]?: QueryValue;
};

export const useMediaQuery = (query: Query): boolean => {
  const { width, height } = useWindowDimensions();
  return parseQuery(query, width, height);
};

const parseQuery = (query: Query, width: number, height: number) =>
  Object.keys(query)
    .map(key => matchQuery(key, query[key as keyof Query]!, width, height))
    .reduce((sum, next) => sum && next, true);

const matchQuery = (
  key: string,
  value: QueryValue,
  width: number,
  height: number,
) => {
  switch (key) {
    case MIN_WIDTH:
      return value <= width;
    case MAX_WIDTH:
      return value >= width;
    case MIN_HEIGHT:
      return value <= height;
    case MAX_HEIGHT:
      return value >= height;
    case ORIENTATION:
      return determineOrientation(value, width, height);
    default:
      console.warn(
        `Incorrect media query type. Use query types: ${MIN_WIDTH}, ${MAX_WIDTH}, ${MIN_HEIGHT}, ${MIN_HEIGHT}, or ${ORIENTATION}.`,
      );
      return false;
  }
};

const determineOrientation = (
  value: QueryValue,
  width: number,
  height: number,
) => {
  if (width > height) {
    return value === LANDSCAPE;
  }
  return value === PORTRAIT;
};
