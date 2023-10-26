<script setup lang="ts">
import { INavigation } from '../../../app/api/interfaces/navigation';
import { DEFAULT_NAVIGATION } from '../../../app/constants/navigation';

interface IProps {
  urls: INavigation[]
}

const props = withDefaults(defineProps<IProps>(), {
    urls: () => DEFAULT_NAVIGATION
});
</script>

<template>
  <div class="main-header">
    <div class="main-header__content">
      <router-link to="/">
        <img
          src="../../../public/logo.svg"
          alt="Лого"
          class="main-header__logo"
        >
      </router-link>
      <nav>
        <ul class="main-header__links">
          <li
            class="main-header__item"
            v-for="link in props.urls"
            :key="link.id"
          >
            <router-link
              :to="link.to"
              class="main-header__link"
            >
              <img
                :src="link.logo"
                alt="Поиск"
              >
              <span class="main-header__text">
                {{ link.text }}
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-header {
  background: #000000;

  &__content {
    margin: auto;
    padding: 37px 30px;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    font-size: 18px;
    color: #FFFFFF;
  }

  &__links {
    list-style-type: none;
    display: flex;
    gap: 38px;
  }

  &__link {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media all and (max-width: 756px) {
    &__content {
      padding: 17px 20px;
    }

    &__logo {
      width: 84px;
    }
    &__text {
      display: none;
    }
  }
}
</style>
