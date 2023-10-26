<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

interface IProps {
  images: IImages[],
  likes: IImages[]
}

const props = withDefaults(defineProps<IProps>(), {
    images: () => [],
    likes: () => []
});

const emit = defineEmits(['setLike']);

import { IImages } from '../../app/api/interfaces/images';
import ImageUser from '@/components/blocks/ImageUser.vue';

const imageRef = ref(null);

/**
 * Поиск активной картинки
 */
const activeImage = (() => {
    if (!props.images.length) {
        return null;
    }
    return props.images.filter((item: IImages) => item.id == route.params.id)[0];
})();


/**
 * Проверка на существует ли картинка в избранных
 */
const isActive = computed(() => {
    return !activeImage || props.likes.includes(activeImage);
});


/**
 * Добавление в избранное
 */
const likeImage = () => {
    if (isActive.value) {
        return;
    }

    emit('setLike', activeImage);
};

/**
 * Получение картинки
 */
const regular = computed(() => {
    return activeImage?.urls?.regular || null;
});

/**
 * Получение ссылки на скачивание
 */
const downloadLink = computed(() => {
    return activeImage?.urls?.small_s3 || '';
});
</script>

<template>
  <div class="image-view">
    <img
      ref="imageRef"
      class="image-view__background"
      :src="regular"
    >
    <div
      class="image-view__content"
      v-if="activeImage"
    >
      <ImageUser
        :user="activeImage.user"
        :download="downloadLink"
        :is-like="isActive"
        class="image-view__user"
        @like="likeImage"
      />
      <img
        class="image-view__main-image"
        :src="regular"
      >
    </div>
    <div
      v-if="!activeImage"
      class="image-view__not-found"
    >
      <h1>Такой картинки не найдено</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-view {
  position: relative;

  &__background {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    max-height: 750px;
    filter: grayscale(1);
    opacity: 0.7;
  }

  &__content {
    padding: 20px;
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }

  &__user {
    position: relative;
    z-index: 2;
  }

  &__main-image {
    margin-top: 40px;
    border-radius: 8px;
    max-height: 750px;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  &__not-found {
    text-align: center;
    margin: 120px auto;
  }

  @media all and (max-width: 500px) {
    &__background {
      display: none;
    }
  }
}
</style>
