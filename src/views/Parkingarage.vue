<template>
  <div class="parkingarage">
    <h1>這是一個停車場</h1>
    <Car :settings="carSettings"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Car from "@/components/Car.vue";

export default {
  name: "Parkingarage",
  components: {
    Car
  },
  data() {
    return {
        carSettings: {
            frontOverhang: 18,
            rearOverhang: 20,
            carBody: {
                width: 40,
                height: 95,
                color: "#cccccc",
            },
            wheel:{
                width: 4,
                height: 10,
                color: "#000000"
            }
        }
    };
  }
};
</script>
