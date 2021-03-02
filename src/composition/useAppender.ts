import * as PIXI from 'pixi.js';

interface useAppenderInterface {
  app: PIXI.Application,
  imageSrc: string,
};

export function useAppender({ app, imageSrc } : useAppenderInterface ) : PIXI.Sprite {
  const texture = PIXI.Texture.from(imageSrc);
  const sprite: PIXI.Sprite = new PIXI.Sprite(texture);
  app.stage.addChild(sprite);

  return sprite;
}