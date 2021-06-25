<template>
  <ul class="pop-up">
    <li
        @click="$emit('removeUser',  removeId)"
        class="pop-up__list">
      <span>Удалить {{ removeName }}</span>
    </li>
    <li class="pop-up__list">
      <span>Редактировать</span>
    </li>
    <li class="pop-up__list">
      <span>Забанить</span>
    </li>
  </ul>
</template>

<script>
import IconBase from "./IconBase";

export default {

  /*
  * Компонент AppPopUp
  * Используется в компоненте AppTable для ячейки actions
  * */
  name: "AppPopUp",
  /*
  * emits
  * передает родителю событие removeUsers с index user для удаления
  * */
  emits: ['removeUsers'],

  /*
  * props
  * принимает два параметра
  * @param removeId: idex пользователя
  * @param removeName: имя пользователя передается как параметр для кнопки удалить
  * */
  props: {
    removeId: {
      required: true
    },
    removeName: {
      type: String,
      required: true
    }
  },
  components: {
    IconBase
  }
}
</script>

<style scoped lang="scss">
.pop-up {
  position: absolute;
  top: 80%;
  right: 60%;
  width: calc(10vw + 50px);
  border: 1px solid rgba(88, 92, 98, .3);
  border-radius: 5px;
  background-color: #17191c;
  overflow: hidden;
  z-index: 1000;

  &__list {
    padding: 10px 20px;
    font-size: calc(.1vw + 14px);
      &:hover {
        background-color: rgb(34, 36, 40);
      }
  }
}
</style>
