<template>
  <p>counter - {{ main.counter }}</p>
  <Button label="Increase" @click="increaseCounter()" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useMainStore } from "@/Store/CounterStore";

export default class Pinia extends Vue {
  counter: number | 0 = 0;
  main = useMainStore();

  increaseCounter(): void {
    this.main.PiniaIncrementCounter();
    console.log("Trigerred" + this.main.counter);
    this.counter = this.main.counter;
  }
}
</script>
