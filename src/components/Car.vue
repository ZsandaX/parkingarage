<template>
  <svg :width="width" :height="height">
    <g id="body">
      <CarBody
        :x="offsetX"
        :y="offsetY"
        :settings="settings.carBody"
      />
    </g>
    <g id="wheel">
      <Wheel
        v-for="(position, key) of wheelPositon"
        :x="position.x"
        :y="position.y"
        :settings="settings.wheel"
        :key="key"
      />
    </g>
  </svg>
</template>
<script>
import CarBody from "@/components/Car/CarBody";
import Wheel from "@/components/Car/Wheel";

export default {
  name: "Car",
  components: {
    CarBody,
    Wheel
  },
  props: ["settings"],
  computed: {
    width() {
      return (
        this.settings.carBody.width +
        this.settings.wheel.height -
        this.settings.wheel.width
      );
    },
    height() {
      return this.settings.carBody.height;
    },
    offsetX() {
      return (this.width - this.settings.carBody.width) / 2;
    },
    offsetY() {
      return (this.height - this.settings.carBody.height) / 2;
    },
    wheelPositon() {
      return [
        {
          x: this.offsetX,
          y:
            this.offsetY +
            this.settings.frontOverhang -
            this.settings.wheel.height / 2
        },
        {
          x:
            this.offsetX +
            this.settings.carBody.width -
            this.settings.wheel.width,
          y:
            this.offsetY +
            this.settings.frontOverhang -
            this.settings.wheel.height / 2
        },
        {
          x: this.offsetX,
          y:
            this.offsetY +
            this.settings.carBody.height -
            this.settings.rearOverhang -
            this.settings.wheel.height / 2
        },
        {
          x:
            this.offsetX +
            this.settings.carBody.width -
            this.settings.wheel.width,
          y:
            this.offsetY +
            this.settings.carBody.height -
            this.settings.rearOverhang -
            this.settings.wheel.height / 2
        }
      ];
    }
  }
};
</script>

