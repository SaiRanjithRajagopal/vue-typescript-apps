<template>
  <div class="home">
    <h1>Parent Component</h1>
    <div class="grid">
      <div class="col-6">
        <span class="p-float-label">
          <label for="first-Name">First Name</label>
          <InputText
            id="first-Name"
            type="text"
            placeholder="First Name"
            v-model="firstName"
          />
        </span>
      </div>
      <div class="col-6">
        <span class="p-float-label">
          <label for="last-Name">Last Name</label>
          <InputText
            id="last-Name"
            type="text"
            placeholder="Last Name"
            v-model="lastName"
          />
        </span>
      </div>
      <div class="col-6">
        <span class="p-float-label">
          <label for="first-Name">Mobile Number</label>
          <InputNumber
            v-model.number="mobileNumber"
            id="mobile-Number"
            placeholder="Mobile Number"
          />
        </span>
      </div>
      <div class="col-6">
        <span class="p-float-label">
          <label for="pan-Number">Pan Number</label>
          <InputNumber
            v-model.number="panNumber"
            id="pan-Number"
            placeholder="Pan Number"
          />
        </span>
      </div>
    </div>
    <Button label="Submit" @click="parentSubmitHandler" />
    <hr />
    <PropsChildComponent
      :firstName="firstName"
      :lastName="lastName"
      :mobileNumber="mobileNumber"
      :panNumber="panNumber"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PropsChildComponent from "@/components/Props/Props_ChildComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    PropsChildComponent,
  },
  provide: {
    userName: "ranji",
  },
})
export default class PassingProps extends Vue {
  firstName: string | null = "";
  lastName: string | null = "";
  mobileNumber: number | null = null;
  panNumber: number | null = null;

  parentSubmitHandler = (): void => {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.mobileNumber);
    console.log(this.panNumber);
    console.log("Parent Submit Handler Clicked");
  };
}
</script>
