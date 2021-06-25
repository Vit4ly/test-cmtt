<template>
  <ul class="lib">
    <li
        v-for="{ title, filler} in lib"
        :key="title"
        @click="addedcomponent(filler)"
        class="lib__list">
      <span>{{ title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  /*
  * Компонент модального окна для ссылки библиотека компонентов
  * содержание меню ссылки с компонентами
  * содержит config компонентов
  * */
  name: "AppLibModal",
  emits: ['added'],
  data() {
    return {
      lib: [
        {title: 'Добавить поиск', filler: {name: 'search', type: 'search', filler: 'Поиск', styles: 'search-block'}},
        {title: 'Добавить Таблицу',filler: {name: 'table', filler: "users" }},
        {title: 'Добавить Кнопку', filler: {name: 'btn',  type: "button", filler: 'Добавить Пользователя'}},
      ]
    }
  },
  methods: {
    /*
    * func addedcomponent
    * принимает один параметр filler
    * передает обьект с компонентом который нужно добавить родителю
    * */
    addedcomponent(filler) {
      this.$emit('added', filler)
    }
  }
}
</script>

<style scoped lang="scss">
.lib {
  position: absolute;
  bottom: 50px;
  left: 80%;
  width: calc(8vw + 160px);
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
