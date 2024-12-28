/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0969ff';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: [
      '#11181C',
      '#11181C80',
      '#11181C60',
    ],
    background: '#fff',
    tint: tintColorLight,
    tintText: '#ECEDEE',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    recordButtonBack: '#fff',
    recordButtonCenter: '#f22625ee',
    border: '#ffffff99'
  },
  dark: {
    text: [
      '#ECEDEE',
      '#ECEDEE99',
      '#ECEDEE80',
    ],
    background: '#0A0A0B',
    tint: tintColorDark,
    tintText: '#11181C',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    recordButtonBack: '#fff',
    recordButtonCenter: '#f22625ee',
    border: '#ffffff40'
  },
};
