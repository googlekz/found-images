<script setup lang="ts">
import { IUser } from '../../../app/api/interfaces/images';
import { computed } from 'vue';

interface IProps {
  user: IUser,
  download: string,
  isLike: boolean
}

const emit = defineEmits(['download', 'like']);
const props = withDefaults(defineProps<IProps>(), {});

const getImage = computed(() => {
    return props.isLike
        ? require('../../assets/images/icons/yellowHeart.svg')
        : require('../../assets/images/icons/like.svg');
});
</script>

<template>
  <div class="image-user">
    <div class="image-user__info">
      <img
        class="image-user__avatar"
        :src="props.user.profile_image.medium"
        :alt="props.user.username"
      >
      <div class="image-user__text">
        <p class="image-user__name">
          {{ props.user.name }}
        </p>
        <p class="image-user__username">
          @{{ props.user.username }}
        </p>
      </div>
    </div>
    <div class="image-user__navigation">
      <button
        class="image-user__button image-user__button_like"
        @click="emit('like')"
      >
        <img
          :src="getImage"
          alt="Избранное"
        >
      </button>
      <a
        :href="props.download"
        class="image-user__button image-user__button_download"
        @click="emit('download')"
      >
        <img
          src="../../assets/images/icons/download.svg"
          alt="Скачать"
        >
        <span class="image-user__button-text">Download</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-user {
  padding-top: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__text {
    display: grid;
  }
  &__name {
    font-size: 30px;
  }
  &__username {
    font-size: 20px;
  }
  &__name, &__username {
    color: white;
  }
  &__avatar {
    width: 55px;
    height: 55px;
    border-radius: 8px;
    border: 1px solid #FFFFFF;
  }
  &__navigation {
    display: flex;
    gap: 20px;
  }
  &__button {
    border-radius: 8px;
    height: 50px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 0 4px 0 #00000040;

    &_like {
      width: 50px;
      display: flex;
      align-items: center;
      background: white;
    }
    &_download {
      color: black;
      text-decoration: none;
      font-size: 20px;
      font-weight: 400;
      width: 200px;
      padding: 13px;
      background: #FFF200;
      gap: 16px;
    }
  }
  @media all and (max-width: 730px) {
    &__avatar{
      width: 48px;
      height: 48px;
    }
    &__name {
      font-size: 18px;
      color: black;
    }
    &__username {
      font-size: 12px;
      color: #BDBDBD;
    }
    &__button {
      width: 40px;
      height: 40px;
    }
    &__button-text {
      display: none;
    }
  }
}
</style>
