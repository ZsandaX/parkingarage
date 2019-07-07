<template>
  <rect
    :x="x"
    :y="y"
    rx="10"
    ry="10"
    :width="settings.width"
    :height="settings.height"
    :fill="settings.color"
  />
</template>
<script>
export default {
  name: "CarBody",
  props: ["x", "y", "settings"]
};
</script>
