<template>
  <div class="status__active status" v-if="status">
    <div class="status__icon">
      <icon-base title="check"></icon-base>
    </div>
  </div>
  <div v-else class="status__not-active status">
    <div class="status__icon">
      <icon-base title="x"></icon-base>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase";

export default {
  /*
  * Компонент статуса активности user
  * name: AppIconStatus
  * */
  name: "AppIconStatus",
  /*
  * Компонент принимает один обязательный параметр properties
  * @param Status: {type: Boolean} изменяет иконку статуса
  * */
  props: {
    status: Boolean,
    required: true
  },
  components: {
    IconBase
  }
}
</script>

<style scoped lang="scss">
.status {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  position: relative;
  color: #fff;

  &__active {
    background-color: rgb(37, 205, 53);
  }

  &__not-active {
    background-color: rgb(255, 0, 50);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 4%;
    top: 3%;
  }
}

</style>
