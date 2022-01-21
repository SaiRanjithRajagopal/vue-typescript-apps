<template>
  <div class="home">
    <h1>Watchers Component</h1>
    <div class="grid">
      <div>
        <p>{{ counter != 0 ? counter : "" }}</p>
        <Button label="Increase" @click="increaseHandler()" />
        <Button label="decrease" @click="decreaseHandler()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"; // @ is an alias to /src

@Options({
  components: {},
  watch: {
    counter: {
      handler(newValue, oldValue) {
        if (newValue > oldValue && newValue === 16) {
          alert(
            "Listening to a high volumne for a long time may damage your hearing"
          );
        }
      },
    },
  },
})
export default class Watchers extends Vue {
  counter: number | 0 = 0;

  increaseHandler(): void {
    this.counter = this.counter + 1;
  }

  decreaseHandler = (): void => {
    this.counter = this.counter - 1;
  };
}
</script>
