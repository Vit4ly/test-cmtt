<template>
  <div class="search">
    <h3>Список пользователей</h3>
    <div class="search-component">
      <app-input
          title="search"
          type="search"
          palceholder="Поиск"
          :value.sync="search"
      ></app-input>
    </div>
  </div>
</template>

<script>
import AppInput from "./AppInput";
export default {
  /*
  * Компонет AppSearch
  * Предназначен для копонента appTable
  * содержит компонент AppInput
  * передает обновленное значение search родителю
  * */
  name: "AppSearch",
  props: ['search'],
  components: {
    AppInput
  }
}
</script>

<style scoped lang="scss">
.search {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
</style>
