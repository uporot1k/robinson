<template>
  <canvas id="pixi" ref="canvas" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useAppender } from './composition/useAppender';

import * as PIXI from 'pixi.js';

export default defineComponent({
  name: 'App',
  setup: () => {
    const canvas = ref<HTMLCanvasElement | undefined>();
    let container = null;
    let app: PIXI.Application | null = null;

    onMounted(() => {
      app = new PIXI.Application({ width: 500, height: 500, view: canvas.value, resizeTo: window });
      app.renderer.backgroundColor = 0xffffff;

      const boardSprite = useAppender({ app, imageSrc: '/board.jpeg' })
    });

    return {
      canvas,
    }
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>