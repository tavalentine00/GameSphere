import { extendTheme, ThemeCofig } from '@chakra-ui/react';

const config: ThemeCofig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({ config });

export default theme;
