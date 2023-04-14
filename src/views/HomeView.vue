<template>
  <Container class="home">
    <PortfolioItemCard title-string="Discord Bot Command Creator"
                       github-u-r-l="https://github.com/tass-suderman/discord-command-creator"
                       description="Command creator for Discord Bots"
                       :image-paths="['images/command-creator/command-creator.png',
                                      'images/command-creator/command-list.png',
                                      'images/command-creator/main-menu.png',
                                      'images/command-creator/meme-preview.png',
                                      'images/command-creator/no-memes.png']"
    />

  </Container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioItemCard from '@/components/PortfolioItemCard.vue';
/**
 * Home Page View
 */
@Component({ components: { PortfolioItemCard } })
export default class HomeView extends Vue {
}
</script>
