<script setup lang="ts">
import { SampleClass } from "../lib";

defineProps<{ sample: SampleClass }>();
</script>

<template>
  <p><strong>publicProperty Value:</strong> {{ sample.publicProperty }}</p>
  <p><strong>protectedProperty Value:</strong> {{ (sample as any).protectedProperty }}</p>
</template>
