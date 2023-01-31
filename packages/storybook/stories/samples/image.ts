import * as Utils from './utils';

export const picsumUrl = (width: number, height: number): string => `https://picsum.photos/${width}/${height}`;

export const ramdonImage = (width: number = 1000, height: number = 800, delta: number = 200): string =>
  picsumUrl(Utils.random(width, width + delta), Utils.random(height, height + delta));

export const randomAvata = () => {}