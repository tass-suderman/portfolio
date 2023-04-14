<template>
  <b-list-group-item>
    <b-card>
      <b-card-header>
        <b-button class="w-100 h1" :href="githubURL">{{titleString}}</b-button>
      </b-card-header>
      <b-card-body class="container-fluid">
        <div class="row h-25">
          <b-card-text v-if="!left" class="my-auto h-100 m-2 p-2 col-lg-5 col-md-7 col-sm-11">
            <p v-for="paragraph in description" :key="paragraph" class="h6 text-white">{{paragraph}}</p>
          </b-card-text>
          <b-carousel class="col-lg-6 col-md-4 col-sm-12" img-height="500px" img-width="400px">
            <b-carousel-slide class="w-100" :img-src="imagePath" img-height="500px" :key="imagePath" v-for="imagePath in imagePaths"/>
          </b-carousel>
          <b-card-text v-if="left" class="my-auto m-2 p-2 col-lg-5 col-md-7 col-sm-11">
            <p v-for="paragraph in description" :key="paragraph" class="h6 text-white">{{paragraph}}</p>
          </b-card-text>
        </div>
      </b-card-body>
      <b-card-footer>
        <p><b>Date Developed: </b>{{date}}</p>
        <p><b>Languages / Frameworks Used: </b>{{languages}}</p>
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

  @Prop() readonly description! : string[]

  @Prop() readonly left!: boolean

  @Prop() readonly date! : string

  @Prop() readonly languages! : string
}
</script>
