<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__item">
          <img src="../assets/logo.png" alt="logo" class="header__logo__img">
        <div class="header__item__wrapper">
          <div class="header__name">
            <p class="header__name__company">{{ name }}</p>
            <p class="header__name__role">{{ role }}</p>
          </div>
          <div @click="toggleMenu"  class="header__item__icon">
            <icon-base styles="feather-chevron-down" title="chevron-down" width="24" height="24"></icon-base>
          </div>
        </div>
        <transition name="menu">
          <ul class="header__link" v-if="isActive">
            <li class="header__link__list" v-for="{ icon, name} in menu" :key="name">
              <icon-base :title="icon" height="30" width="30"></icon-base>
              <div class="header__link__list__wrapper">
<!--                <router-link :to="path">{{ name }}</router-link>-->
                <span>{{ name }}</span>
              </div>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase";

export default {
  /*
  * Компонент TheHeader
  * Содержит логотип, название компании модальное окно
  * */
  name: "TheHeader",
  data() {
    return {
       /*
       * Переменная name: Имя компании
       * */
      name: 'kmtt',
      /*
      * Переменная role: роль пользователя
      * */
      role: 'admin',
      /*
      * Переменная isActive
      * Флаг для открытия и закрытия popup
      * */
      isActive: false,
      /*
      * Массив menu
      * onfig для меню popup
      * */
      menu: [
        {icon: 'settings', name: 'Основные настройки', path: '#'},
        {icon: 'menu', name: 'Настроить меню', path: '#'},
        {icon: 'alert-triangle', name: 'Сообщить о проблеме', path: '#'},
      ]
    }
  },
  methods: {
    /*
    * Метод toggleMenu
    * изменяет флаг isActive
    * */
    toggleMenu() {
      this.isActive = !this.isActive
    }
  },
  components: {
    IconBase
  }
}
</script>

<style scoped lang="scss">
svg {
  color: rgb(144, 145, 152);
}

.feather-chevron-down {
  margin-right: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.header {
  border: 1px solid rgb(88, 92, 98);

  &__item {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-gap: 5px;
    align-items: center;

    padding: 18px 0;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__icon {
      display: flex;
      align-items: center;
    }

  }

  &__name {
    display: grid;
    grid-template-columns: .1fr .1fr;
    grid-gap: 5px;
    margin-right: 15px;
    font-weight: 500;
    font-size: 20px;

    &__company {
      text-transform: uppercase;
      color: #fff;
    }

    &__role {
      color: #fff;
    }
  }

  &__logo {
    margin-left: 30px;

    &__img {
      border-radius: 10px;
    }

    &__arrow {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  &__link {
    position: absolute;
    top: 84px;
    left: 20px;
    width: calc(8vw + 160px);
    max-width: 250px;
    border: 1px solid rgb(88, 92, 98);
    border-radius: 10px;
    background-color: #17191c;
    overflow: hidden;
    font-size: calc(.1vw + 14px);

    &__list {
      display: grid;
      grid-template-columns: .2fr 1fr;
      grid-gap: 5px;
      padding: 15px 15px;
      cursor: pointer;
      &:hover {
        background-color: rgb(34,36,40);
      }

      &__wrapper {
        display: flex;
        justify-content: flex-start;

        span {
          color: rgb(144, 145, 152);
        }
      }

    }
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s;
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
}

</style>
