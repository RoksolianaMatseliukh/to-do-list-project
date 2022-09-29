<script setup lang="ts">
import ToDoListSideBar from '../components/ToDoListSideBar.vue';
import ToDoMenu from '../components/ToDoMenu.vue';
import SelectMenu from '../components/SelectMenu.vue';
import ToDoTasks from '../components/ToDoTasks.vue';
</script>

<template>
  <div class="flex">
    <ToDoListSideBar class="w-1/3"/>

    <div class="py-5 px-2" >
      <div class="flex gap-x-7 mb-5">
        <ToDoMenu />
        <SelectMenu />
      </div>

      <ToDoTasks />
    </div>
  </div>
</template>
