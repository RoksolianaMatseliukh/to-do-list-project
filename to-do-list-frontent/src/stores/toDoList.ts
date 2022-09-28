import { defineStore } from 'pinia';
import { onMounted, ref } from "vue";
import axios from "axios";

import type { List } from "@/types";
import { API_URL } from "@/configs";

export const useToDoListStore = defineStore('toDoList', () => {
  const toDoLists = ref<List[]>([]);

  const newList = ref('');

  onMounted(async () => {
    const { data } = await axios.get(`${API_URL}/toDoLists`);
    toDoLists.value = data;
  });

  const addList = async () => {
    try {
      if (!newList.value) {
        return;
      }

      const { data } = await axios.post(`${API_URL}/toDoLists`, { name: newList.value });
      toDoLists.value.push(data);

      newList.value = '';
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  const removeList = async (listId: number) => {
    const { data: { id } } = await axios.delete(`${API_URL}/toDoLists/${listId}`);
    toDoLists.value = toDoLists.value.filter(list => list.id !== id);
  };

  return {
    toDoLists,
    newList,
    addList,
    removeList
  };
});