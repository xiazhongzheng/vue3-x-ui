<template>
  <div>
    <x-button
      type="success"
      disabled
      round
      icon="x-icon-search"
      @click="buttonClick"
      >搜索</x-button
    >
    <x-button
      type="warning"
      round
      icon="x-icon-search"
      :loading="buttonLoading"
      @click="buttonClick"
      >搜索</x-button
    >
    <x-button
      type="primary"
      round
      icon="x-icon-search"
      @click="buttonClick"
    ></x-button>
    <x-icon name="loading"></x-icon>

    <x-button-group>
      <x-button type="primary" icon="x-icon-arrow-left-bold">上一页</x-button>
      <x-button type="primary"
        >下一页<i class="x-icon-arrow-right x-icon--right"></i
      ></x-button>
    </x-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
const useButton = () => {
  const buttonClick = () => {
    console.log(11);
  };
  const buttonLoading = ref(true);
  setTimeout(() => {
    buttonLoading.value = false;
  }, 2000);
  return {
    buttonClick,
    buttonLoading,
  };
};
export default defineComponent({
  setup() {
    return {
      ...useButton(),
    };
  },
});
</script>
