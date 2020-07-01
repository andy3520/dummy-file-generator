<template>
  <div class="max-w-md h-full mx-auto py-6">
    <div
      v-for="(value, key, index) in fileConfig"
      :key="key"
      class="flex items-center justify-between"
      :class="index > 0 ? 'mt-4' : ''"
    >
      <label
        class="text-sm font-medium leading-5 text-gray-700 mr-6 capitalize"
      >
        {{ key }}
      </label>

      <div class="mt-1 w-4/5 relative rounded-md shadow-sm">
        <input
          v-if="key !== 'unit'"
          class="form-input w-full sm:text-sm sm:leading-5"
          :type="getType(key)"
          :placeholder="key"
          v-model="fileConfig[key]"
        />
        <select
          v-else
          class="form-select mt-1 block w-full"
          v-model="fileConfig[key]"
        >
          <option v-for="unit in unitOpts" :key="unit"> {{ unit }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
const unitOpts = ["B", "KB", "MB", "GB", "TB"];
export default {
  name: "Home",
  data() {
    return {
      fileConfig: {
        name: "dummy-file",
        extension: "txt",
        size: 10,
        unit: "KB"
      },
      unitOpts
    };
  },
  methods: {
    getType(key) {
      if (key === "size") {
        return "number";
      }

      return "text";
    }
  }
};
</script>
