<template>
  <div>
    <p>Two Way Binding 2</p>
    <div>
      <Button label="close" @click="$emit('close')" />
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class TwoWayBinding extends Vue {}
</script>