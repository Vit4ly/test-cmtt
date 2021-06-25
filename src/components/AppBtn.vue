<template>
  <div class="btn-wrapper">
    <button :type="type" class="btn" @click="$emit('newEvent')">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AppBtn",
  /*
  * Коипонент кнопка
  *  AppBtn передает родителю событие click
  * */
  emits: ['newEvent'],
  /*
  * Props
  * Компонент принимает два параметра properties
  * @param type: тип кнопки (submit, button)
  * @param text: текстовый наполнитель
  * */
  props: {
    type: String,
    text: String,
  }
}
</script>

