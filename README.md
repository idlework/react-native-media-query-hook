# react-native-media-query-hook

A simplified version of media queries in the browser. Currently supports minWidth, maxWidth, minHeight, maxHeight, and orientation to detect landscape or portrait modus. The hook is typescript first.

## Installation

_npm_

```shell
$ npm i react-native-media-query-hook
```

_yarn_

```shell
$ yarn add react-native-media-query-hook
```

## How to use

_import_

```typescript
import useMediaQuery from 'react-native-media-query-hook';
```

_basic_

```typescript
// The outcome results in a boolean statement.
const isSmallScreen = useMediaQuery({
  maxWidth: 480,
});
```

_more sophisticated queries_

```typescript
// Detect different screen sizes
const isSmallScreen = useMediaQuery({
  maxWidth: 480,
});
const isMediumScreen = useMediaQuery({
  minWidth: 481,
  maxWidth: 1024,
});
const islargeScreen = useMediaQuery({
  minWidth: 1025,
});

// Detect portrait / landscape mode
const isPortrait = useMediaQuery({
  orientation: 'portrait',
});
const isLandscape = useMediaQuery({
  orientation: 'landscape',
});

// Put it all together
const isMediumPortraitScreen = useMediaQuery({
  minWidth: 481,
  maxWidth: 1024,
  minHeight: 481,
  maxHeight: 1200,
  orientation: 'portrait',
});
```

## Contributing

[Issues reports](https://github.com/idlework/react-native-media-query-hook/issues) are more than welcome. The best way to report a problem is to add a reproduction of the error with a code example.

[Pull requests](https://github.com/idlework/react-native-media-query-hook/pulls) are also very welcome. This way we can extend the library quicker with everybody's needs. If you have ideas about the interface, lets discuss it in an [issue ticket](https://github.com/idlework/react-native-media-query-hook/issues).

## License

react-native-media-query-hook is [MIT licensed](./LICENSE).
