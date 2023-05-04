<template>
  <b-list-group-item>
    <b-card>
      <!--      Button and title -->
      <b-card-header v-if="!aboutMe">
        <b-button target="_blank" class="w-100 p-4 m-0 h1" size="lg" :href="githubURL">{{titleString}}</b-button>
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
          <b-button class="bv-d-md-down-none" target="_blank" :href="externalLink" v-else-if="externalLink" size="xl" variant="info">Preview Now</b-button>
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
        <b-button variant="info" v-if="externalLink" target="_blank" :href="externalLink">Visit This Version's Repo <b-icon-github/></b-button>
      </p>
    </b-modal>
  </b-list-group-item>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PortfolioItemCard extends Vue {
  // Title of portfolio item
  @Prop() readonly titleString!: string

  // Link to portfolio item repository
  @Prop() readonly githubURL!: string

  // Link to paths of screenshots of the portfolio item
  @Prop() readonly imagePaths!: string[]

  // Description of portfolio item; each string is a paragraph
  @Prop() readonly description!: string[]

  // Whether to place the images on the left side
  @Prop() readonly left!: boolean

  // Dates the item was worked on
  @Prop() readonly date!: string

  // Languages and frameworks used for the portfolio item
  @Prop() readonly languages!: string

  // Big challenges in the portfolio item
  @Prop() readonly challenges!: string

  // List of fellow collaborators on this project
  @Prop() readonly collaborators!: string

  // URL of an iFrame to be used to demonstrate the item
  @Prop() readonly iframeURL!: string

  // Title of iFrame window in previews
  @Prop() readonly iframeTitle!: string

  // Note to place below iFrame for a brief description
  @Prop() readonly iframeNote!: string

  // Width of iFrame
  @Prop() readonly iframeWidth!: string

  // Height of iFrame
  @Prop() readonly iframeHeight!: string

  // Size of iFrame Modal
  @Prop() readonly iframeModalSize!: string

  // Set to true if this is a non-item, and is instead an about me section
  @Prop() readonly aboutMe!: boolean

  // External link --> if iFrame provided, links to the iFrame version's repo
  // If no iFrame provided, links to an external site
  @Prop() readonly externalLink!: string
}

</script>
