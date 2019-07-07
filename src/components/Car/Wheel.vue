<template>
  <rect
    :x="x"
    :y="y"
    rx="1"
    ry="1"
    :width="settings.width"
    :height="settings.height"
    :fill="settings.color"
  />
</template>
<script>
export default {
  name: "Wheel",
  props: ["x", "y", "settings"]
};
</script>
