<template>
  <div class="p-3 col-sm-12 col-12 col-md-6 col-lg-4, col-xl-3">
    <b-button pill class="w-100 p-3" target="_blank" :href="destinationURL"><b-icon :icon="iconComponent"/> {{titleString}}</b-button>
  </div>
</template>

<script lang="ts">
import {
  Prop, Component, Vue,
} from 'vue-property-decorator';

/**
 * This component is simply a button with a title + icon with an external link
 * I noticed a little too much duplicated code so I made a separate component to hold it
 */
@Component({})
export default class ContactComponent extends Vue {
  @Prop() readonly titleString! : string

  @Prop() readonly destinationURL! : string

  @Prop() readonly iconComponent!: string
}
</script>
