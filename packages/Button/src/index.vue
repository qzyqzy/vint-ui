<template>
  <button class="vint-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "vint-button",
};
</script>
<script lang="ts" setup>
defineEmits(["click"]);
</script>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.vint-button {
  color: #fff;
  background-color: #2288ff;
}
</style>
