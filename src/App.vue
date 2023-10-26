<template>
  <div>

    <MainHeader :urls="navUrls[route.name]" />
    <router-view
      v-bind="dynamicProps[route.name]"
      @set-like="setLike"
    />
  </div>
</template>

<style lang="scss">

</style>
<script setup lang="ts">
import MainHeader from '@/components/layout/MainHeader.vue';
import { getImages } from '../app/api/modules/images';
import { computed, reactive } from 'vue';
import { IImages } from '../app/api/interfaces/images';
import { useRoute } from 'vue-router';
import { DEFAULT_NAVIGATION, NAVIGATION_KEYS } from '../app/constants/navigation';

const route = useRoute();

const navUrls = {
    [NAVIGATION_KEYS.home]: [DEFAULT_NAVIGATION[1]],
    [NAVIGATION_KEYS.image]: DEFAULT_NAVIGATION,
    [NAVIGATION_KEYS.favorites]: DEFAULT_NAVIGATION,
};

const mainReactive = reactive({
    images: [] as IImages[],
    likes: [] as IImages[],
});

const dynamicProps = computed(() => {
    return {
        [NAVIGATION_KEYS.home]: {
            images: mainReactive.images
        },
        [NAVIGATION_KEYS.image]: {
            images: mainReactive.images,
            likes: mainReactive.likes
        },
        [NAVIGATION_KEYS.favorites]: {
            images: mainReactive.images,
            likes: mainReactive.likes
        },
    };
});

/**
 * Добавляю в избранное
 * @param item
 */
const setLike = (item: IImages) => {
    mainReactive.likes.push(item);
};

(async () => {
    mainReactive.images = await getImages();
})();
</script>
