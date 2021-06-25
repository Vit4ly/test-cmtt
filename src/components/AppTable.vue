<template>
  <div class="table">
    <div class="table__thead table__tbox">
      <div
          v-for="{ icon, name, className } in tableHead" :key="name"
          class="table__thead__tr table__tr"
          :class="`table__${className}`">
        <icon-base :title="icon" width="24" height="24"></icon-base>
        <span>{{ name }}</span>
      </div>
    </div>
    <template v-if="userlist.length">
      <div
          v-for="({id, name, mail, status, actions}, idx ) in userlist"
          :key="id"
          class="table__tbody table__tbox"
      >
        <div class="table__id table__tr ">
          <span class="table__id__style">{{ id }}</span>
        </div>
        <div class="table__name table__tr">{{ name }}</div>
        <div class="table__mail table__tr">{{ mail }}</div>
        <div class="table__status table__tr">
          <div class="table__icon-status">
            <app-icon-status :status="status"></app-icon-status>
          </div>

          {{ status ? 'Активен' : 'Не активен' }}
        </div>
        <div class="table__actions table__tr">
          <div
              @click="userDataChangePopUp(idx,name)"
              class="table__actions__icon">
            <icon-base
                :title="actions"
                width="24"
                height="24">
            </icon-base>
            <transition name="menu">
              <app-pop-up
                  v-if="userlist[idx].open"
                  :remove-id="userId"
                  :remove-name="removeName"
                  @removeUser="removeUser"
              ></app-pop-up>
            </transition>
          </div>
        </div>
      </div>
    </template>


  </div>
</template>

<script>
import IconBase from "../components/IconBase";
import AppIconStatus from "../components/AppIconStatus";
import AppPopUp from "./AppPopUp";

export default {
  /*
  * Компонент AppTable
  * Таблица содержит готовую шапку
  * Body генерируется исходя из переданных параметров
  * содержит компоненты IconBase,AppIconStatus,AppPopUp
  * */
  name: "AppTable",
  /*
  * Props
  * Принимает один параметр
  * @param esers: { type: Array }
  * содержит список пользователей получаемый из AppModalTable
  * */
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      /*
      * переменная userId получает индекс пользователя
      * по умолчанию  null
      * */
      userId: null,
      /*
      * переменная removeName получает значения имени для удаления пользователя и отображения на ссылке в AppPopUp
      * */
      removeName: '',
      /*
      * переменная userList
      * получает значение передоваемого props
      * user
      * */
      userlist: this.users,
      /*
      * переменная tableHead
      * config для шапки таблицы
      * */
      tableHead: [
        {icon: 'list', name: 'ID', className: 'id'},
        {icon: 'user', name: 'Имя', className: 'name'},
        {icon: 'at-sign', name: 'Email', className: 'mail'},
        {icon: 'info', name: 'Статус', className: 'status'},
        {icon: 'disc', name: 'Действия', className: 'actions'},
      ],
    }
  },
  methods: {
    /*
    * func userDataChangePopUp(idx, name)
    * Изменяет
    * флаг open в обьекте userList
    * должно передавать событи родителю об изменении флага Open
    * принимает два параметра
    * @param idx: индекс пользователя присваивается переменной userId
    * @param name: присваивается переменной name
    *
    * */
    userDataChangePopUp(idx, name) {
      if (this.userlist.length) {
        this.userlist[idx].open = !this.userlist[idx].open
        this.userId = idx
        this.removeName = name
        // this.$emit('chengedFlag', idx, this.userlist[idx].open)
      }

    },
    /*
    * func removeUser(idx)
    * принимает индек пользователя для удаления из массива userList
    * передает родителю значение об удаленно пользователе
    *
    * */
    removeUser(idx) {
      this.userId = idx
      this.userlist.splice(idx, 1)
      this.userlist[idx].open = false
      this.$emit('removeUsers', this.userId)
    },
  },

  components: {
    IconBase,
    AppIconStatus,
    AppPopUp,
  }
}
</script>

<style scoped lang="scss">
.table {
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  &__title {
    display: inline;
  }

  &__tbox {
    display: grid;
    grid-template-columns: .5fr 1fr 1fr 1fr 1fr;
    position: relative;
  }

  &__tr {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid rgb(47, 48, 53);
    padding: 10px 10px;
    font-size: calc(.1vw + 14px);
    min-width: 100px;
  }

  &__id {
    min-width: 80px;

    &__style {
      color: rgb(54, 128, 236);
    }

  }

  &__name {
    //min-width: 150px;
  }

  &__mail {
    //min-width: 250px;
  }

  &__status {
    //min-width: 150px;

  }

  &__icon-status {
    padding-right: 10px;
  }

  &__actions {
    //min-width: 120px;
    position: relative;

    &__icon {
      padding: 0;
      margin: 0;
      cursor: pointer;
    }
  }

  &__thead {
    margin: 0;
    padding: 0;
    font-size: calc(.2vw + 14px);

    &__tr {
      span {
        padding-left: 10px;
      }
    }
  }

  &__tbody {
    margin: 0;
    padding: 0;
    font-size: calc(.2vw + 16px);

    &__tr {

    }
  }


}
</style>
