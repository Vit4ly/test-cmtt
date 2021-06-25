<template>
  <div id="app">
    <div class="app__header">
      <the-header></the-header>
      <nav-bar
          @added="addedComponent"
          :lib="componentLib"></nav-bar>
    </div>
    <div class="app__views">
      <app-user-management :lib="componentLib"></app-user-management>
    </div>
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader";
import NavBar from "./components/NavBar";
import AppUserManagement from "./views/AppUserManagement";

export default {
  name: 'App',
  data() {
    return {
      /*
      * checkComponent
      * Массив с именами компонентов добовляемые в func addedComponent
      * */
      checkComponent: [],
      /*
      * componentLib
      * Массив обьектов с параметрами для компонента
      * формат
      * {name: 'param', type: 'param', filler: 'param', styles: 'param'}
      * */
      componentLib: []
    }
  },
  methods: {

    /*
    * addedComponent
    * Получает данные из компонента NavBar
    *  Добавляет компонент в массив componentLib
    * и добавляет Object.name в массив checkComponent для дальнейшего предотвращения дублирования компонентов.
    * @param filler {Object}
    * */
    addedComponent(filler) {
      if (this.checkForcomponent(filler)) {
        this.checkComponent.push(filler['name'])
        this.componentLib.push(filler)
      }
    },
    /*
    * checkForcomponent проверяет содержит ли массив checkComponent имя компонента
    * */
    checkForcomponent(filler) {
      return !this.checkComponent.includes(filler['name'])
    },
  },
  components: {
    TheHeader,
    NavBar,
    AppUserManagement
  }
}
</script>
<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 40px;
}

.app {
  &__header {
    max-width: 300px;
  }

  &__views {
    position: relative;
    margin-top: 40px;
    padding-right: 30px;
  }
}

</style>






