<template>
  <p>counter - {{ counter }}</p>
  <Button label="Increase" @click="increaseCounter()" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useMainStore } from "@/Store/CounterStore";

export default class Pinia extends Vue {
  counter: number | 0 = 0;

  increaseCounter(): void {
    const main = useMainStore();
    main.PiniaIncrementCounter();
    console.log("Trigerred" + main.counter);
    this.counter = main.counter;
  }
}
</script>
