<template>
  <div>
    <div>
      <h1>Child Component</h1>
      <h1>FirstName - {{ firstName }}</h1>
      <h1>LastName - {{ lastName }}</h1>
      <h1>MobileNumber - {{ mobileNumber }}</h1>
      <h1>PanNumber - {{ panNumber }}</h1>
      <h1>GetProfile - {{ profile() }}</h1>
      <h1>Provide Inject - {{ userName }}</h1>
      <h2>Getter Setter - {{ firstNames }}</h2>
      <Button
        label="Submit"
        @click="execute(firstName, lastName, mobileNumber, panNumber)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    firstName: { type: String, required: true, default: null },
    lastName: { type: String },
    mobileNumber: { type: Number },
    panNumber: { type: Number },
  },
  inject: ["userName"],
})
export default class Props_ChildComponent extends Vue {
  private userName!: string;
  private firstName!: string;

  get firstNames(): string {
    return " Sairam " + this.firstName;
  }

  profile?(): string {
    return this.userName + " Sairam " + this.firstName;
  }

  beforeCreate?(): void {
    console.log("beforeCreate");
  }

  beforeMount?(): void {
    console.log("beforeMount");
  }

  mounted?(): void {
    console.log("mounted");
  }

  beforeUnmount?(): void {
    console.log("beforeUnmount");
  }

  unmounted?(): void {
    console.log("unmounted");
  }

  beforeUpdate?(): void {
    console.log("beforeUpdate");
  }

  updated?(): void {
    console.log("updated");
  }

  activated?(): void {
    console.log("activated");
  }

  render?(): void {
    console.log("render");
  }

  execute = (
    firstName: string,
    lastName: string,
    mobileNumber: number,
    panNumber: number
  ): void => {
    console.log(firstName);
    console.log(lastName);
    console.log(mobileNumber);
    console.log(panNumber);
    console.log("Child Submit Handler Clicked - Sairam");
  };
}
</script>

<style scoped>
</style>
