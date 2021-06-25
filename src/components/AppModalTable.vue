<template>
  <div class="modal">
    <form class="modal__form" @submit.prevent="$emit('submitHandler', name,mail)">
      <div class="modal__form__col">
        <span class="modal__form__label-id">ID</span>
        <span class="modal__form__num-id">{{ idRandom }}</span>
      </div>
      <app-input
          title="user"
          :value.sync="name"
      ></app-input>
      <app-input
          title="at-sign"
          :value.sync="mail"
      ></app-input>
      <div class="modal__form__btn">
        <app-btn text="Добавить" type="submit"></app-btn>
      </div>
    </form>
  </div>
</template>

<script>
import AppBtn from "./AppBtn";
import IconBase from "./IconBase";
import AppInput from "./AppInput";

export default {
  /*
  * Компонент AppModalTable
  * предназначен для компонента AppTable
  * сщдержитт в себе компоненты AppInput, AppBtn
  *передает значение инпутов родительскому компоненту при клике на кнопку
  * */
  name: "AppModalTable",
  emits: ['submitHandler'],
  /*
  * Принимает один props
  * генерируемый методом в компоненте AppUserManagement
  * name: idRandom
  * @param
  * */
  props: {

    idRandom: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      /*
      * @param name: { type: String } получает значение из инпута
      * */
      name: '',
      /*
      * @param mail: { type: String } получает значение из инпута
      * */
      mail: '',
      /*
      * @param config: { type: Array } содержит обьекты конфигурации компонента AppInput
      * */
      config: [
        {type: 'input', value: this.name, icons: 'user'},
        {type: 'input', value: this.mail, icons: 'at-sign'}
      ]
    }
  },
  components: {
    AppBtn,
    IconBase,
    AppInput
  }
}
</script>

<style scoped lang="scss">

.modal {
  border: 1px solid rgb(47, 48, 53);
  border-radius: 10px;
  background-color: #17191c;
  z-index: 300;
  position: absolute;
  top: 25%;
  left: 25%;

  &__form {
    margin: 30px 30px;

    &__btn {
      display: flex;
      justify-content: center;
    }

    &__col {
      position: relative;
      padding: 10px;
    }

    &__num-id {
      color: rgb(54, 128, 236);
    }
  }
}

</style>
