<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <use :href="uri"></use>
  </svg>
</template>

<script>
import sprite from "../assets/images/icons.svg";

export default {
  /*
  * Компонент IconBase
  * Содержит SVG
  * генерирует изображение из файла icons.svg со спрайтами
  * */
  name: "IconBase",
  /*
  * Принимает три параметра props
  * @param title: имя спрайта
  * @param width: ширина спрайта
  * @param height: высота спрайта
  * */
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
  },
  computed: {
    /*
    * Содержит computed свойство uri для нормализации параметра title
    *  в ссылку
    * */
    uri() {
      return `${sprite}#${this.title}`;
    },
  },
};
</script>

<style lang="scss" scoped>
use {
  fill: currentColor;
}
</style>
