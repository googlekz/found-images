<script setup lang="ts">
import { ref } from 'vue';

const searchInput = ref(null);

interface IProps {
  modelValue: string;
}

const props = withDefaults(defineProps<IProps>(), {});
const emit = defineEmits(['update:modelValue']);

/**
 * Отправка emit для изменение v-model
 * @param e
 */
const changeModel = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value);
};

/**
 * Установка фокуса в инпут при клике на иконку
 */
const setFocus = () => {
    searchInput.value ? searchInput.value.focus() : null;
};
</script>

<template>
  <div class="main-search">
    <div class="main-search__wrap-input">
      <input
        ref="searchInput"
        class="main-search__input"
        :value="props.modelValue"
        @input="changeModel"
        placeholder="Поиск"
      >
      <img
        class="main-search__icon"
        src="../../assets/images/icons/loupe.svg"
        alt="Лупа"
        @click="setFocus"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-search {
  background-image: url("../../assets/images/backgrounds/search.png"),
  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: multiply;
  background-size: cover;
  padding: 92px;
  border-bottom: 16px solid #C4C4C4;
  position: relative;
  z-index: 1;

  &__icon {
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translate(0, -50%);
  }

  &__wrap-input {
    width: 100%;
    max-width: 850px;
    display: block;
    margin: auto;
    position: relative;
  }

  &__input {
    width: 100%;
    padding: 39px 50px 39px 39px;
    height: 70px;
    position: relative;
    font-size: 28px;

    &::placeholder {
      font-weight: 300;
      font-size: 28px;
      height: 28px;
      line-height: 28px;
      color: black;
      opacity: 1;
    }
  }

  @media all and (max-width: 756px) {
    padding: 92px 20px;
    border-bottom: none;
    &__input {
      padding: 6px 6px 6px 25px;
    }
  }
}
</style>
