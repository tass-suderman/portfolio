<template>
  <div class="home container-md">

    <b-jumbotron lead="Junior Full-Stack Developer" header="Tass Suderman">
      <p>Tass here. I am a software developer and while I prefer to do backend webserver work but have been known to do full-stack development, mobile app development, UNIX scripting,
        full software programs and pretty much anything else I need to do.</p>
    </b-jumbotron>
    <b-card title="About me:" img-src="images/command-creator/command-creator.png" class="mb-2">
      <b-card-text>
        Hello this is me with some text :)
      </b-card-text>
      <div class="d-flex justify-content-between flex-wrap">
        <ContactComponent destination-u-r-l="https://www.github.com/tass-suderman" title-string="GitHub" icon-component="github"/>
        <ContactComponent destination-u-r-l="https://www.linkedin.com/in/tass-suderman" title-string="LinkedIn" icon-component="linkedin"/>
        <ContactComponent destination-u-r-l="mailto://tasssuderman@gmail.com" title-string="Email" icon-component="envelope-fill"/>
        <ContactComponent destination-u-r-l="docs/tass-suderman-resume.pdf" title-string="Resume" icon-component="journal-text"/>
      </div>
    </b-card>
    <PortfolioItemCard title-string="Discord Bot Command Creator"
                       left="left"
                       github-u-r-l="https://github.com/tass-suderman/discord-bot-command-creator"
                       :description="[`The Discord Bot Command Creator was my final project for my server side web programming class.`,
                                      `My partner and I made it with a TypeORM backend and a Vue.JS frontend.`,
                                      `It uses Discord OAuth 2.0 authentication and I focused on making it so that I was not able to bypass the limitations enforced by this authentication,
                                         even as one of the people that made the web app.`,
                                      `This project relied heavily on reading external documentation and learning as I went, as I had to learn several calls to the
                                        Discord API and to my own backend API.`,
                                      `What we are left with now is a very usable app that can help make commands for Discord bots, if you\'re willing to create a bot that uses the text format
                                         that it generates.`]"
                       :image-paths="['images/command-creator/command-creator.png',
                                      'images/command-creator/command-list.png',
                                      'images/command-creator/main-menu.png',
                                      'images/command-creator/meme-preview.png',
                                      'images/command-creator/no-memes.png']"
                       date="December 2022"
                       languages="TypeORM, VueJS, TypeScript, Express"
                       challenges="Had to do a lot of reading into Discord's API to optimize the required number of external calls."
    />

    <PortfolioItemCard title-string="Swift BlackJack"
                       github-u-r-l="https://github.com/tass-suderman/swift-blackjack"
                       :description="['Swift BlackJack was our assignment when learning the Swift programming language in Mobile Applications Development class.',
                                      `This class had some difficulties because we were limited to only creating console-based apps, but I challenged myself on this one by trying to create more
                                        sophisticated ASCII art than I ever had before. After writing way too many methods to make cards appear in one line,
                                        I was finally ready to start coding the logic.`,
                                      'Fortunately, BlackJack is not a very complicated game, so the actual code logic was not especially challenging.',
                                      'Now I have a very usable console-based game of BlackJack available. Very nice.']"
                       :image-paths="['images/blackjack/gameplay-page.png',
                                      'images/blackjack/stand-page.png',
                                      'images/blackjack/wager-menu.png']"
                       date="February 2023"
                       languages="Swift"
                       challenges="Complicated ASCII art. Limited resources for working in Swift"
    />

    <PortfolioItemCard title-string="Android Dodge Game"
                       left="left"
                       github-u-r-l="https://github.com/tass-suderman/android-studio-dodge-game"
                       :description="[`The Android Dodge game was my final project for our Android Studio class. We were able to choose the content of our final project, and feeling energized
                                          after the success of my JavaFX Space Invaders game I wanted to try my hand at a similar real-time game.`,
                                      `This game's most impressive feature is its controller.
                                          I wanted to find a way to have the user click down and then drag in the direction they wanted to go. `,
                                      `After that, I wanted to provide adequate feedback that this was, in fact, happening. This required a lot of math and more algorithmic thinking than I had
                                        done in my other assignments thus far, so I appreciated the challenge.`,
                                      `This app also implements location and database work, but I feel like those are less impressive.`]"
                       :image-paths="['images/android-dodge-game/main-menu.png',
                                      'images/android-dodge-game/gameplay-screen.png',
                                      'images/android-dodge-game/end-game-screen.png',
                                      'images/android-dodge-game/score-sheet.png']"
                       date="June 2022"
                       languages="Java, Android Studio"
                       challenges="Complicated algorithms and controller code."
    />

    <PortfolioItemCard title-string="JavaFX Space Invaders"
                       github-u-r-l="https://github.com/tass-suderman/jfx-space-invaders"
                       :description="[`JavaFX Space Invaders was a big assignment in my Intermediate Programming class.
                                      We were given a small bit of code to start out with and had to work out the full game from there.`,
                                      `To make things more interesting, I added a few different types of enemies and a secondary firing mode.`,
                                      `This assignment was used to teach us about how different threads can interact with data in the program, and
                                      it was a challenge to keep all the threads running as expected.`,
                                      `By the end of the development cycle, I think I spent more time 'testing' the program than actually coding it.`]"
                       :image-paths="['images/jfx-space-invaders/main-menu.png',
                                      'images/jfx-space-invaders/enemy-wall.png',
                                      'images/jfx-space-invaders/gameplay.png',
                                      'images/jfx-space-invaders/cat-enemy.png']"
                       date="March 2022"
                       languages="Java, JavaFX"
                       challenges="Overlapping sprites caused unpredictable behaviour. To combat this, I had to build enemy rhythms which never ressult in an overlap."
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioItemCard from '@/components/PortfolioItemCard.vue';
import ContactComponent from '@/components/ContactComponent.vue';
/**
 * Home Page View
 */
@Component({ components: { ContactComponent, PortfolioItemCard } })
export default class HomeView extends Vue {
}
</script>
