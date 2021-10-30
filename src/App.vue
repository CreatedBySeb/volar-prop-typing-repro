<template>
  <SampleComponent :sample="sampleInstance" />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import SampleComponent from "./components/SampleComponent.vue";
  import { sampleInstance } from "./lib";

  export default defineComponent({
    components: {
      SampleComponent,
    },

    data() {
      return { sampleInstance };
    },
  });
</script>
