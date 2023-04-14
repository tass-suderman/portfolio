<template>
  <b-list-group-item>
    <b-card>
      <b-card-header>
        <b-button><b-btn :href="githubURL">{{titleString}}</b-btn></b-button>
      </b-card-header>
      <b-card-body>
        <b-carousel>
          <b-carousel-slide :img-src="imagePath" :key="imagePath" v-for="imagePath in imagePaths"/>
        </b-carousel>
      </b-card-body>
      <b-card-footer>
        <b-card-text>{{description}}</b-card-text>
      </b-card-footer>
    </b-card>
  </b-list-group-item>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PortfolioItemCard extends Vue {
  @Prop() readonly titleString! : string

  @Prop() readonly githubURL! : string

  @Prop() readonly imagePaths! : string[]

  @Prop() readonly description! : string
}
</script>
