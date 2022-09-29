import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import type { Task } from "../types";
import { API_URL } from "../utils/config";

export const useToDoStore = defineStore('toDo', () => {
  const route = useRoute();

  const toDo = ref<Task[]>([]);

  const newTask = ref('');
  const isEdited = ref(false);
  const taskIdToEdit = ref();

  onMounted(async () => {
    const { data } = await axios.get(`${API_URL}/toDoTasks`);
    toDo.value = data;
  });

  const getFilteredTasks = computed(() => {
    const listId = +route.params.listId;
    const name = route.query.selected;

    const tasksByListId = toDo.value.filter(task => task.listId === listId);

    if (!name || name === 'all') {
      return tasksByListId;
    }

    if (name === 'in progress') {
      return tasksByListId.filter(task => !task.isDone);
    }

    return tasksByListId.filter(task => task.isDone);
  });

  const addTask = async () => {
    try {
      if (!newTask.value.trim()) {
        return;
      }

      const listId = +route.params.listId;

      const { data } = await axios.post(`${API_URL}/toDoTasks`, { name: newTask.value, listId });
      toDo.value.push(data);

      newTask.value = '';
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  const editTask = async () => {
    try {
      if (!newTask.value.trim()) {
        return;
      }

      const { data: { id, name } } = await axios.put(`${API_URL}/toDoTasks/${taskIdToEdit.value}`, { name: newTask.value });

      const index = toDo.value.findIndex(task => task.id === id);
      toDo.value[index].name = name;

      isEdited.value = !isEdited.value;
      newTask.value = '';
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  const taskDoneToggle = async (taskId: number) => {
    const { data } = await axios.patch(`${API_URL}/toDoTasks/${taskId}`);

    const index = toDo.value.findIndex(task => task.id === data.id);
    toDo.value[index].isDone = data.isDone;
  };

  const removeTask = async (taskId: number) => {
    const { data: { id } } = await axios.delete(`${API_URL}/toDoTasks/${taskId}`);
    toDo.value = toDo.value.filter(task => task.id !== id);
  };

  return {
    newTask,
    isEdited,
    taskIdToEdit,
    getFilteredTasks,
    addTask,
    editTask,
    taskDoneToggle,
    removeTask
  };
});
