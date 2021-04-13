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

    <x-row>
      <x-col :span="6" style="background-color: red">111</x-col>
      <x-col :span="6" :offset="6" style="background-color: green">222</x-col>
      <x-col :span="6" style="background-color: blue">333</x-col>
    </x-row>

    <x-row :gutter="20">
      <x-col :span="8" style="background-color: red">111</x-col>
      <x-col :span="8" style="background-color: green">222</x-col>
      <x-col :span="8" style="background-color: blue">333</x-col>
    </x-row>
    <x-row :gutter="20" :justify="'around'">
      <x-col :span="2" style="background-color: red">111</x-col>
      <x-col :span="2" style="background-color: green">222</x-col>
      <x-col :span="2" style="background-color: blue">333</x-col>
    </x-row>
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
