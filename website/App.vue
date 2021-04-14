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
    <x-checkbox
      v-model="checkVal"
      @change="handleChange"
      :disabled="true"
      :indeterminate="true"
      >aaa</x-checkbox
    >
    {{checkedList}}
    <x-checkbox-group v-model="checkedList" @change="handleChange">
      <x-checkbox
        v-for="city in checkList"
        :key="city"
        :label="city"
      ></x-checkbox>
    </x-checkbox-group>
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

const useCheckbox = () => {
  const checkVal = ref(true);
  // const checkVal = ref([true]);

  const checkedList = ref(["北京", "南京"]);
  const checkList = ref(["北京", "上海", "南京"]);

  const handleChange = (value) => {
    console.log(value);
  };
  return {
    checkVal,
    handleChange,
    checkList,
    checkedList,
  };
};
export default defineComponent({
  setup() {
    return {
      ...useButton(),
      ...useCheckbox(),
    };
  },
});
</script>
