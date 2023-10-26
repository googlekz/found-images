<script setup lang="ts">
import { IImages } from '../../../app/api/interfaces/images';

interface IProps {
  images: [] | IImages[];
}

const props = withDefaults(defineProps<IProps>(), {
    images: () => [],
});
</script>

<template>
  <div class="home-block">
    <router-link
      v-for="item in props.images"
      :key="item.id"
      :to="`/image/${item.id}`"
    >
      <img
        class="home-block__image"
        :src="item.urls.regular"
        :alt="item.alt_description"
      >
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.home-block {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 27px 30px;
  max-width: 1400px;
  &__image {
    cursor: pointer;
    width: 100%;
    max-height: 440px;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    &:hover {
      background: rgba(0,0,0,0.5);
    }
  }

  @media all and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
</style>
