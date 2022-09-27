<template>
  <Listbox as="div" v-model="selectedTasks" class="flex gap-x-3 items-center">
    <ListboxLabel class="block text-sm font-medium text-gray-700 uppercase text-right">filter your tasks:</ListboxLabel>
    <div class="relative" style="width: 250px">
      <ListboxButton class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <img :src="selectedTasks.icon" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
          <span class="ml-3 block truncate">{{ selectedTasks.name }} tasks </span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="taskSelector in tasksSelector" :key="taskSelector.id" :value="taskSelector" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <img :src="taskSelector.icon" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ taskSelector.name }} tasks</span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import { useRoute, useRouter } from 'vue-router';

  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';

  const route = useRoute();
  const router = useRouter();

  const tasksSelector = [
    { id: 1, name: 'in progress', icon: '/src/assets/unselected-checkbox.svg' },
    { id: 2, name: 'done', icon: '/src/assets/selected-checkbox.svg' },
    { id: 3, name: 'all', icon: '/src/assets/all.svg' },
  ];
  const selectedTasks = ref(tasksSelector[2]);

  watch(
    () => route.params.listId,
    () => {
      selectedTasks.value = tasksSelector[2];
    });

  watch(
    () => route.query.selected,
    () => {
      if (!route.query.selected) {
        selectedTasks.value = tasksSelector[2];

        router.push({
          path: `/to-do-list/${route.params.listId}`,
          query: { selected: 'all' }
        });
      }
    });

  watch(
    () => selectedTasks.value,
    () => {
      const { name } = selectedTasks.value;

      router.push({
        path: `/to-do-list/${route.params.listId}`,
        query: { selected: name }
      });
    });
</script>
