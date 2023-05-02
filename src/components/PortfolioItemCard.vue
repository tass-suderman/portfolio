<template>
  <b-list-group-item>
    <b-card>
      <!--      Button and title -->
      <b-card-header v-if="!aboutMe">
        <b-button class="w-100 p-4 m-0 h1" size="lg" :href="githubURL">{{titleString}}</b-button>
      </b-card-header>
      <b-card-body class="container-fluid">
        <div class="row h-25">
          <div class="w-100 row">
            <!-- Larger Screens if text is to be shown on the left side-->
            <b-card-text v-if="!left" class="bv-d-sm-down-none my-auto m-2 p-2 col-lg-5 col-md-6">
              <p v-for="paragraph in description" :key="paragraph" class="text-white">{{paragraph}}</p>
            </b-card-text>
            <!--         Carousel images  -->
            <b-carousel fade class="col-lg-6 col-md-5 col-sm-12" >
              <b-carousel-slide class="w-100 card border-primary" :img-src="imagePath" :key="imagePath" v-for="imagePath in imagePaths"/>
            </b-carousel>
            <!--          If text is to be shown on the left side it is shown here instead on mobile view-->
            <b-card-text v-if="!left" class="d-md-none d-sm-block m-2 p-2 col-sm-11">
              <!--            Right side text -->
              <p v-for="paragraph in description" :key="paragraph" class="text-white">{{paragraph}}</p>
            </b-card-text>
            <b-card-text v-if="left" class="my-auto m-2 p-2 col-lg-5 col-md-6 col-sm-11">
              <p v-for="paragraph in description" :key="paragraph" class="text-white">{{paragraph}}</p>
            </b-card-text>
          </div>
        </div>
      </b-card-body>
      <b-card-footer>
        <p><b v-if="aboutMe">Skills: </b><b v-else>Date Developed: </b>{{date}}</p>
        <p><b v-if="collaborators">Fellow Collaborators: </b>{{collaborators}}</p>
        <p><b v-if="aboutMe">Languages / Frameworks: </b><b v-else>Languages / Frameworks Used: </b>{{languages}}</p>
        <p><b v-if="aboutMe">My Mission Statement: </b><b v-else>Biggest Challenges: </b>{{challenges}}</p>
        <p>
          <b-button class="bv-d-md-down-none" v-b-modal="iframeTitle" v-if="iframeURL" size="xl" variant="success">Preview Now</b-button>
          <b-button class="bv-d-md-down-none" :href="externalLink" v-else-if="externalLink" size="xl" variant="info">Preview Now</b-button>
        </p>
      </b-card-footer>
    </b-card>
    <b-modal :id="iframeTitle" class="bv-d-md-down-none" :title="iframeTitle" ok lazy hide-footer="hide-footer" hide-header-close="hide-header-close" button-size="lg" :size="iframeModalSize" centered>
      <div class="text-center">
        <iframe loading="lazy" allowfullscreen :title="iframeTitle" :src="iframeURL" :height="iframeHeight" :width="iframeWidth" />
      </div>
      <p>{{iframeNote}}</p>
      <p class="d-flex flex-row justify-content-between">
        <b-button ontext-variant="info" @click="$bvModal.hide(iframeTitle)"><b-icon-arrow-left-circle-fill/> Return to Portfolio</b-button>
        <b-button variant="info" v-if="externalLink" :href="externalLink">Visit This Version's Repo <b-icon-github/></b-button>
      </p>
    </b-modal>
  </b-list-group-item>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PortfolioItemCard extends Vue {
  @Prop() readonly titleString!: string

  @Prop() readonly githubURL!: string

  @Prop() readonly imagePaths!: string[]

  @Prop() readonly description!: string[]

  @Prop() readonly left!: boolean

  @Prop() readonly date!: string

  @Prop() readonly languages!: string

  @Prop() readonly challenges!: string

  @Prop() readonly iframeURL!: string

  @Prop() readonly iframeTitle!: string

  @Prop() readonly iframeNote!: string

  @Prop() readonly iframeWidth!: string

  @Prop() readonly iframeHeight!: string

  @Prop() readonly iframeModalSize!: string

  @Prop() readonly aboutMe!: boolean

  @Prop() readonly collaborators!: string

  @Prop() readonly externalLink!: string
}

</script>
