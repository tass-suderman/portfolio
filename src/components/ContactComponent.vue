<template>
  <div class="p-3 col-sm-12 col-md-6 col-lg-4, col-xl-3">
    <b-button class="w-100 p-3" :href="destinationURL"><b-icon :icon="iconComponent"/> {{titleString}}</b-button>
  </div>
</template>

<script lang="ts">
import {
  Prop, Component, Vue,
} from 'vue-property-decorator';

@Component({})
export default class ContactComponent extends Vue {
  @Prop() readonly titleString! : string

  @Prop() readonly destinationURL! : string

  @Prop() readonly iconComponent!: string
}
</script>
