<template>
  <div>
    <p>Two Way binding 2</p>
    <div>
      <div class="col-6">
        <span class="p-float-label">
          <label for="name">Name</label>
          <InputText id="name" placeholder="Name" v-model="name" />
        </span>
      </div>
      <Button label="close" @click="closeModal" />
    </div>
  </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class TwoWayBinding1 extends Vue {
  name: string | null = "";

  closeModal = (): void => {
    this.$emit("close", this.name ? this.name : "Empty string Ranjith");
  };
}
</script>