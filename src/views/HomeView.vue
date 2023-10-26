<script lang="ts" setup>
import HomeSearch from '@/components/blocks/HomeSearch.vue';
import ImagesBlock from '@/components/blocks/ImagesBlock.vue';
import { computed, reactive } from 'vue';
import { IImages } from '../../app/api/interfaces/images';

interface IProps {
  images: [] | IImages[];
}

const props = withDefaults(defineProps<IProps>(), {
    images: () => [],
});

const homeData = reactive({
    search: '',
});

/**
 * Поиск фотографий по описанию
 */
const searchedArray = computed(() => {
    if (homeData.search) {
        return props.images.filter((item) => {
            return item.alt_description.includes(homeData.search);
        });
    }
    return props.images;
});
</script>

<template>
  <div class="home">
    <HomeSearch v-model="homeData.search" />
    <ImagesBlock
      class="home__content"
      :images="searchedArray"
    />
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__content {
    padding: 20px;
    max-width: 1400px;
    margin: 114px auto;
  }
}
</style>
