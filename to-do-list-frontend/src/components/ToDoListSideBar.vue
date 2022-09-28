<template>
  <div class="flex flex-col py-5 px-2 bg-gray-500 to-do-list-side-bar">
    <div v-for="({ id, name }, i) in toDoLists" class="flex">
      <RouterLink class="w-1/2 capitalize" :key="id" :to="`/to-do-list/${id}`">
        <li> {{ name }} </li>
      </RouterLink>

      <img v-if="i" src="../assets/delete-icon.svg" alt="delete-icon" class="mx-2" @click="removeList(id)">
    </div>

    <div class="mt-5">
      <input class="border-2 border-green-400 border-radius focus:" v-model="newList" placeholder="add new list" type="text" @keyup.enter="store.addList">
      <button :class="[{ ['opacity-50']: !newList }, 'ml-2 bg-green-700 text-white px-2 py-1 text-sm border-radius' ]" @click="store.addList">add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useRoute, useRouter } from "vue-router";

  import { useToDoListStore } from "@/stores/toDoList";

  const route = useRoute();
  const router = useRouter();

  const store = useToDoListStore();
  const { toDoLists, newList } = storeToRefs(store);

  const removeList = async (id: number) => {
    await store.removeList(id);

    if (+route.params.listId === id) {
      router.push({
        path: `/to-do-list/1`
      });
    }
  };

</script>

<style scoped>
  input[type=text]:focus {
    outline-color: rgba(19, 108, 19, 0.74);
  }
</style>