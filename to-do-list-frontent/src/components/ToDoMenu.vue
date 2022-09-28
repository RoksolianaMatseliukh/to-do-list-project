<template>
  <div>
    <input class="py-0.5 border-2 border-blue-400 border-radius" v-model="newTask" placeholder="add new task" type="text">
    <button v-if="!isEdited" :class="[{ ['opacity-30']: !newTask }, 'ml-2 bg-blue-500 text-white px-2 py-1 text-sm border-radius']" @click="addTask">add</button>
    <button v-if="isEdited" :class="[{ ['opacity-30']: !newTask }, 'ml-2 bg-blue-500 text-white px-2 py-1 text-sm border-radius']" @click="editTask">edit</button>
  </div>
</template>

<script setup lang="ts">
  import { watch } from "vue";
  import { useRoute } from 'vue-router';
  import { storeToRefs } from 'pinia';

  import { useToDoStore } from '@/stores/toDo';

  const route = useRoute();

  const store = useToDoStore();
  const { newTask, isEdited } = storeToRefs(store);
  const { addTask, editTask } = store;

  watch(
    () => route.params.listId,
    () => {
      isEdited.value = false;
      newTask.value = '';
  });
</script>
