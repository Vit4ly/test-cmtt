<template>
  <div class="nav">
    <div class="nav__wrapper">
      <div class="nav__col">
        <h3 class="nav__col__title">Статистика</h3>
        <ul class="nav__col__item nav__statistics">
          <li class="nav__col__item__list" v-for="{name} in navStat" :key="name">
            <!--            <router-link :to="path">{{ name }}</router-link>-->
            <span>{{ name }}</span>
          </li>
        </ul>
      </div>

      <div class="nav__col">
        <h3 class="nav__col__title">Списки данных</h3>
        <ul class="nav__col__item nav__link-data">
          <li class="nav__col__item__list" v-for="{name} in navLinkData" :key="name">
            <!--            <router-link :to="path">{{ name }}</router-link>-->
            <span>{{ name }}</span>
          </li>
        </ul>
      </div>
    </div>


    <div class="nav__col">
      <div class="nav__col__item nav__library">
        <div class="nav__library__modal">
          <app-lib-modal
              v-if="isOpenLib"
              @added="addedComponent"
          ></app-lib-modal>
        </div>
        <icon-base title="layers" width="30" height="30"></icon-base>
        <p @click="toggleLib">Библиотека компонентов</p>
      </div>
    </div>


  </div>
</template>

<script>
import IconBase from "./IconBase";
import AppLibModal from "./AppLibModal";
/*
* Компоненет NavBar
* содержит ссылки на страницы
* */
export default {
  name: "NavBar",
  data() {
    return {
      /*
      * Переменная isOpenLib
      * флаг для popup ссылки Библиотека компонентов
      * */
      isOpenLib: false,
      /*
      * Массив navStat
      * содержит config для блока статистика
      * */
      navStat: [
        {name: 'Публикации', path: '#'},
        {name: 'Мсенджер', path: '#'},
        {name: 'Подписка на еженедельную рассылку', path: '#'},
      ],
      /*
      * Массив navLinkData
      * содержит config для блока списки данных
      * */
      navLinkData: [
        {name: 'Доступные города', path: '#'},
        {name: 'Заблокированные пользователи', path: '#'},
        {name: 'Черный список ссылок', path: '#'},
        {name: 'Управление пользователями', path: '/user-management'},
      ]
    }
  },
  methods: {
    /*
    * Метод toggleLib
    * изменяет флаг isOpenLib
    * для открытия и закрытия меню библиотеки компонентов
    * */
    toggleLib() {
      this.isOpenLib = !this.isOpenLib
    },
    /*
    * Метод addedComponent
    * передает компоненту AppUserManagement добавляемый обьект конфигурации компонента
    * */
    addedComponent(filler) {
      this.$emit('added', filler)
    }
  },
  components: {
    IconBase,
    AppLibModal
  }
}
</script>

<style scoped lang="scss">
.nav {
  padding: 30px 0 0;
  border: 1px solid rgb(88, 92, 98);
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;

  &__wrapper {
    flex: 1 1 auto;
  }

  &__col {
    padding: 20px 0;

    &__title {
      letter-spacing: .1rem;
      font-weight: 600;
      padding-bottom: 20px;
      text-transform: uppercase;
      color: rgb(88, 92, 98);
      margin-left: 30px;
    }

    &__item {

      &__list {
        flex: 1 1 auto;
        padding: 10px 20px 10px 30px;
        width: 100%;
        cursor: pointer;

        &:hover {
          background-color: rgb(34, 36, 40);
        }

        //a {
        //  font-size: 18px;
        //  font-weight: 400;
        //  color: rgb(144, 145, 152);
        //}
        span {
          font-size: 18px;
          font-weight: 400;
          color: rgb(144, 145, 152);
        }
      }
    }
  }

  &__statistics {
    li:last-of-type {
      margin-top: 30px;
    }
  }

  &__link-data {

  }

  &__library {
    display: flex;
    align-items: center;
    padding-left: 30px;
    cursor: pointer;
    position: relative;

    &__modal {
      position: absolute;
      bottom: 10%;
      left: 10%;
    }

    p {
      margin-left: 15px;
    }
  }
}

</style>
