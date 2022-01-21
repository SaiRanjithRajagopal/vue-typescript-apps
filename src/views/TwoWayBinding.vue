<template>
  <div>
    <div>
      <h1>This is an two way binding parent</h1>
      <p>{{ showModels }}</p>
      <Button label="open" @click="showModelHandler" />
      <TwoWayBindComponent
        v-show="showModels"
        @close="showModels = !showModels"
      />
    </div>
    <hr />
    <div>
      <p>{{ showModels_MethodEg }}</p>
      <Button label="open" @click="showModelHandler_MethodEg" />
      <TwoWayBindComponent2
        v-show="showModels_MethodEg"
        @close="showModelHandler_ChildHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TwoWayBindComponent from "@/components/DataBinding/TwoWayBindingComponent.vue";
import TwoWayBindComponent2 from "@/components/DataBinding/TwoWayBinding1.vue";

@Options({
  components: {
    TwoWayBindComponent,
    TwoWayBindComponent2,
  },
})
export default class TwoWayBind extends Vue {
  showModels: boolean | null = false;
  showModels_MethodEg: boolean | null = false;

  showModelHandler(): void {
    this.showModels = !this.showModels;
  }

  showModelHandler_MethodEg = (): void => {
    this.showModels_MethodEg = !this.showModels_MethodEg;
  };

  showModelHandler_ChildHandler = (name: string): void => {
    console.log(name);
    this.showModels_MethodEg = !this.showModels_MethodEg;
  };
}
</script>