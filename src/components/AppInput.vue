<template>
  <div class="input-wrapper" :class="styles">
    <icon-base class="label" :title="title" :width="width" :height="height"></icon-base>
    <input
        :type="type"
        class="input"
        :placeholder="palceholder"
        :value="value"
        @input="change"
    >
  </div>

</template>

<script>
import IconBase from "./IconBase";

export default {
  /*
  * Компонент input с возможностью добавления иконки в теле инпута
  * */
  name: "AppInput",
  /*
  * Компонент передает обновленый параметр value родителю
  * */
  emits: ['update:value'],
  /*
  * Может принимать семь параметров
  * @param title: предназначенн для передачи имени иконки компоненту IconBase
  * @param value: параметр получает обновленное значения из инпута
  * @param width: предназначенн для передачи в компонент IconBase
  * @param height: предназначенн для передачи в компонент IconBase
  * @param palceholder: параметр устанавливает значение placeholder для инпут
  * @param type: параметр устанавливает значение type для инпут
  * @param styles: возможно передать дополнительные стили для компонента с классом wrapper
  * */
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    palceholder: {
      type: String,
    },
    type: {
      type: String,
      default: 'text'
    },
    styles: {
      type: String
    }
  },
  methods: {
    /*
    * func change
    * принимает event
    * передает обновленное значение props value родителю
    * */
    change(event) {
      this.$emit('update:value', event.target.value)
    }
  },
  components: {
    IconBase
  }
}
</script>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
  padding: 10px;
}

.label {
  position: absolute;
  left: 7%;
  bottom: 35%;

}
</style>
