<template>
  <div class="home container-md">

    <b-jumbotron lead="under construction" header="Tass Suderman" />
    <PortfolioItemCard title-string="Discord Bot Command Creator"
                       left="left"
                       github-u-r-l="https://github.com/tass-suderman/discord-bot-command-creator"
                       description="The Discord Bot Command Creator was my final project for my server side web programming class.
                       My partner and I made it with a TypeORM backend and a Vue.JS frontend.
                       It uses Discord OAuth 2.0 authentication and I focused on making it so that I was not able to bypass the limitations enforced by this authentication, even as one of the people
                        that made the web app. This project relied heavily on reading external documentation and learning as I went, as I had to learn several calls to the Discord API and to my own
                        backend API. What we are left with now is a very usable app that can help make commands for Discord bots, if you're willing to create a bot that uses the text format that it
                        generates."
                       :image-paths="['images/command-creator/command-creator.png',
                                      'images/command-creator/command-list.png',
                                      'images/command-creator/main-menu.png',
                                      'images/command-creator/meme-preview.png',
                                      'images/command-creator/no-memes.png']"
                       date="December 2022"
                       languages="TypeORM, VueJS, TypeScript"
    />

    <PortfolioItemCard title-string="Swift BlackJack"
                       github-u-r-l="https://github.com/tass-suderman/swift-blackjack"
                       description="Swift BlackJack was our assignment when learning the Swift programming language in Mobile Applications Development class.
                       This class had some difficulties because we were limited to only creating console-based apps, but I challenged myself on this one by trying to create more sophisticated
                       ASCII art than I ever had before. After writing way too many methods to make cards appear in one line, I was finally ready to start coding the logic.
                       Fortunately, BlackJack is not a very complicated game, so the actual code logic was not especially challenging.
                       Now I have a very usable console-based game of BlackJack available. Very nice."
                       :image-paths="['images/blackjack/gameplay-page.png',
                                      'images/blackjack/stand-page.png',
                                      'images/blackjack/wager-menu.png']"
                       date="Feburary 2023"
                       languages="Swift"
    />

    <PortfolioItemCard title-string="Android Dodge Game"
                       left="left"
                       github-u-r-l="https://github.com/tass-suderman/android-studio-dodge-game"
                       description="The Android Dodge game was my final project for our Android Studio class. We were able to choose the content of our final project, and feeling energized
after the success of my JavaFX Space Invaders game I wanted to try my hand at a similar real-time game.
This game's most impressive feature is its controller. I wanted to find a way to have the user click down and then drag in the direction they wanted to go. After that, I wanted to provide
adequate feedback that this was, in fact, happening. This required a lot of math and more algorithmic thinking than I had done in my other assignments thus far, so I appreciated the challenge.
This app also implements location and database work, but I feel like those are less impressive."
                       :image-paths="['images/android-dodge-game/main-menu.png',
                                      'images/android-dodge-game/gameplay-screen.png',
                                      'images/android-dodge-game/end-game-screen.png',
                                      'images/android-dodge-game/score-sheet.png']"
                       date="June 2022"
                       languages="Java, Android Studio"
    />

  </div>
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
