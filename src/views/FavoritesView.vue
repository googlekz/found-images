<script setup lang="ts">
import { IImages } from '../../app/api/interfaces/images';
import ImagesBlock from '@/components/blocks/ImagesBlock.vue';

interface IProps {
  likes: IImages[]
}

const props = withDefaults(defineProps<IProps>(), {
    likes: () => []
});
</script>

<template>
  <div class="favorites">
    <h1 class="favorites__title">
      Избранное
    </h1>
    <ImagesBlock
      class="favorites__content"
      :images="props.likes"
    />
  </div>
</template>

<style scoped lang="scss">
.favorites {
  max-width: 1400px;
  margin: 94px auto;
  &__title {
    text-align: center;
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 101px;
  }
  &__content {
    padding: 20px;
  }
  @media all and (max-width: 765px) {
    margin: 40px auto 56px;
    &__title {
      font-size: 36px;
      margin-bottom: 36px;
    }
  }
}
</style>
