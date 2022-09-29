<template>
  <div v-for="({ id, name, isDone }, i) in getFilteredTasks" :key="id" class="flex items-center gap-x-2">
    <input class="w-5 h-5" type="checkbox" :value="isDone" :checked="isDone" @change="store.taskDoneToggle(id)" />

    <span :class="[{ ['line-through']: isDone }, 'w-1/3']"> {{i + 1}}. {{name}} </span>

    <img src="../../assets/icons/edit.svg" alt="edit-icon" class="w-8 mx-2" @click="showEditInput(id, name)">
    <img src="../../assets/icons/delete.svg" alt="delete-icon" class="mx-2" @click="store.removeTask(id)">
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useToDoStore } from "../stores/toDo";

const store = useToDoStore();
const { newTask, isEdited, taskIdToEdit, getFilteredTasks } = storeToRefs(store);

const showEditInput = async (id: number, name: string) => {
  isEdited.value = !isEdited.value;
  newTask.value = isEdited.value ? name : '';
  taskIdToEdit.value = id;
};
</script>
