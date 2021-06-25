<template>
  <div class="management">
    <p class="management__title-head">Списки данных</p>
    <h1 class="management__title">Управления пользователями</h1>
    <h3 v-if="!lib.length">Добавьте компонент</h3>
    <div v-if="usersList.length" class="management__item">
      <template v-if="lib.length">
        <component
            v-for="{ name, type, filler, styles } in lib"
            :key="name"
            :type="type"
            :palceholder="filler"
            :text="filler"
            :title="type"
            :users="usersList"
            :style="styles"
            @newEvent="modalToggle"
            :is="`app-${name}`">
        </component>
      </template>

    </div>
    <div v-if="lib.filter(el => el['name'] === 'table').length && !usersList.length" class="management__info">
      <p>Список пользователей пуст</p>

      <app-btn
          text="Добавить пользователя"
          @newEvent="modalToggle"
      >
      </app-btn>
    </div>
<!--  модальное окно для добавления пользователя   -->
    <app-modal-table
        v-if="modalActive"
        :idRandom="id"
        @submitHandler="addUser"
    ></app-modal-table>
  </div>
</template>

<script>
import IconBase from "../components/IconBase";
import AppBtn from "../components/AppBtn";
import AppModalTable from "../components/AppModalTable";
import AppTable from "../components/AppTable";
import AppInput from "../components/AppInput";
import AppSearch from "../components/AppSearch";

export default {
  name: "AppUserManagement",
  props: {
    /*
    * Props lib
    * type: Array
    * Содержит добавленные компоненты полеченные из App
    * */
    lib: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      /*
      * modalActive
      * type: Boolean
      * флаг для модального окна
      * */
      modalActive: false,
      /*
      * id
      * default = null
      * присваевается значения func randomId
      * для дальнейшего присваения пользователю при добавлении в таблицу.
      * */
      id: null,
      /*
      * name
      * переменная получает данные из инпута
      * модального окна, для добавления пользователя в таблицу.
      * */
      name: '',
      /*
      * mail
      * переменная получает данные из инпута
      * модального окна, для добавления пользователя в таблицу.
      * */
      mail: '',
      /*
      * search
      * переменная получает данные из инпута компонента AppSearch
      * для фильтрации в таблице
      * (метод не реализован)
      * */
      search: '',
      /*
      * usersList
      * type: Array,
      * Содержит обьект пользователя
      * с данными полченными из AppModal
      * */
      usersList: []
    }
  },

  methods: {
    /*
    * func randomId
    * При каждом вызове модального окна присваивает переменной id рандомное число
    * */
    randomId() {
      this.id = Math.floor(Math.random() * (10000 - 1))
    },
    /*
    * func modalToggle
    * присваивает заначение переменной modalActive
    * */
    modalToggle() {
      this.randomId()
      this.modalActive = !this.modalActive
    },
    /*
    * func addUser
    * принимает два параметра
    * @param: name (type: String)
    * @param: mail (type: String)
    * добавляет нового юзера в массив  usersList
    * Присваевает значение false переменной modalActive
    * */
    addUser(name, mail) {
      this.usersList.push({
        id: this.id,
        name: name,
        mail: mail,
        status: true,
        actions: 'more-horizontal',
        open: false
      })
      this.modalActive = false
    },
    /*
    * func removeUsers
    * Принимает один параметр
    * @param idx
    * Удаляет пользователя с индексом idx из массива usersList
    *
    * */
    removeUsers(idx) {
      this.usersList.splice(idx, 1)
    },
  },
  components: {
    IconBase,
    AppBtn,
    AppModalTable,
    AppTable,
    AppInput,
    AppSearch
  }
}
</script>

<style scoped lang="scss">
.management {
  &__title-head {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__title {
    font-size: 20px;
    letter-spacing: .1rem;
    color: rgb(187, 188, 193);
    margin-bottom: 60px;
  }

  &__info {
    text-align: center;
  }

  &__item {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
