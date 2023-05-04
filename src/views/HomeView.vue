<template>
  <div class="home container-lg">

    <b-jumbotron style="background: url('images/me/banner.png') no-repeat center;  background-size:cover; color:white;">
      <div style="background-color: rgba(0,0,0,0.8);">
        <h1 class="m-3">Tass Suderman</h1>
        <h3 class="mx-5">Junior Full-Stack Developer</h3>
        <p class="mx-5 mt-3 mb-5">I want to make the world a little less complicated</p>
        <div class="d-flex flex-row-reverse flex-wrap">
          <ContactComponent destination-u-r-l="https://www.github.com/tass-suderman" title-string="GitHub" icon-component="github"/>
          <ContactComponent destination-u-r-l="https://www.linkedin.com/in/tass-suderman" title-string="LinkedIn" icon-component="linkedin"/>
          <ContactComponent destination-u-r-l="mailto://tasssuderman@gmail.com" title-string="Email" icon-component="envelope-fill"/>
          <ContactComponent destination-u-r-l="docs/tass-suderman-resume.pdf" title-string="Resume" icon-component="journal-text"/>
        </div>

        <h6>Last edited on May 4th, 2023 by Tass Suderman</h6>
      </div>

    </b-jumbotron>

    <PortfolioItemCard title-string="About Me"
                       about-me="about-me"
                       :description="[`
          I am a full-stack developer who is passionate about building elegant software solutions.
          While I may not have a lot of professional experience yet, I have spent the last few years expanding my knowledge base and honing my skills.
          I have built up a solid skill-set that allows me to efficiently take on any challenge that comes my way.
          Whether the solution requires the use of frontend frameworks like React and Vue or backend technologies like Node.js and Java, I feel confident that I am up to the task.`,
                                      `I have hands-on experience with Systems Administration, Agile Development, Computer Hardware,
                                      and pretty much everything else your nerdy cousin is in to these days`,
                                      `In this portfolio you'll see some of the projects I've had the most fun with over the years, and I'll share what I think makes them special.
          Whether you're looking for a developer to join your team or just want to take a look around at the cool stuff I've made, I'm sure you'll find something interesting here.
        ` ]"
                       :image-paths="['images/me/chillin.png']"
                       date="Agile Development, Database Management (SQL, Neo4J), Full-Stack Development"
                       languages="Java, Javascript, Typescript, Swift, C, C#, Vue, React"
                       challenges="I want to use my skills to better the world around me and to make life a little less complicated"
    />
    <PortfolioItemCard title-string="Discord Bot Command Creator"
                       left="left"
                       github-u-r-l="https://github.com/tass-suderman/discord-bot-command-creator"
                       :description="[`The Discord Bot Command Creator was my final project for my server side web programming class.`,
                                      `My partner and I made it with a TypeORM backend and a Vue.JS frontend.`,
                                      `It uses Discord OAuth 2.0 authentication and I focused on making it so that I was not able to bypass the limitations enforced by this authentication,
                                         even as one of the people that made the web app.`,
                                      `This project relied heavily on reading external documentation and learning as I went, as I had to learn several calls to the
                                        Discord API while learning how to effectively handle calls to my own backend API.`,
                                      `What we are left with now is a very usable app that can help make commands for Discord bots, if you're willing to create a bot that uses the text format
                                         that it generates.`]"
                       :image-paths="['images/command-creator/command-creator.png',
                                      'images/command-creator/command-list.png',
                                      'images/command-creator/main-menu.png',
                                      'images/command-creator/meme-preview.png',
                                      'images/command-creator/no-memes.png']"
                       date="December 2022"
                       languages="TypeORM, VueJS, TypeScript, Express"
                       challenges="Had to do a lot of reading into Discord's API to optimize the required number of external calls."
                       collaborators="Levi Krozser"
                       external-link="https://discord-command-client.tass-suderman.ca"
    />

    <PortfolioItemCard title-string="Swift BlackJack"
                       github-u-r-l="https://github.com/tass-suderman/swift-blackjack"
                       :description="['Swift BlackJack was an assignment given to my class when learning the Swift programming language in Mobile Applications Development.',
                                      `This class had some difficulties because we were limited to only creating console-based apps. With that in mind, I challenged myself
                                      by trying to create more sophisticated ASCII art than I ever had before. After writing way too many methods to make cards appear in one line,
                                        I was finally ready to start coding the logic.`,
                                      'Fortunately, BlackJack is not a very complicated game, so the actual code logic was not especially challenging.',
                                      'Now I have a very usable console-based game of BlackJack available. Very nice.']"
                       :image-paths="['images/blackjack/gameplay-page.png',
                                      'images/blackjack/stand-page.png',
                                      'images/blackjack/wager-menu.png']"
                       date="February 2023"
                       languages="Swift"
                       challenges="Complicated ASCII art. Limited resources for working in Swift"
                       iframe-u-r-l="https://replit.com/@TassSuderman/Blackjack?embed=true"
                       iframe-title="BlackJack"
                       iframe-height="800px"
                       iframe-modal-size="lg"
                       iframe-width="600px"
                       collaborators="Krishiv Soni"
    />

    <PortfolioItemCard title-string="Android Dodge Game"
                       left="left"
                       github-u-r-l="https://github.com/tass-suderman/android-studio-dodge-game"
                       :description="[`The Android Dodge game (I should really come up with a title for it by now) was my final project for my Android Studio class.
                       We were able to choose the content of our final project, and feeling energized after the success
                       of my JavaFX Space Invaders game I wanted to try my hand at a similar real-time game.`,
                                      `This game's most impressive feature is its controller.
                                          I wanted to find a way to have the user click down and then drag in the direction they wanted to go. `,
                                      `After that, I wanted to provide adequate feedback that this was, in fact, happening. This required a lot of math and more algorithmic thinking than I had
                                        done in my other assignments thus far, so I appreciated the challenge.`,
                                      `I appreciated the challenge so much, as a matter of fact, that I then made it so every difficulty mode has its own control scheme. I'll let you download it
                                        yourself if you want to see how that works.`,
                                      `I managed to build an APK file from the project and have had this game installed on my phone ever since. Can you get a score above 4000?`]"
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
                       challenges="Overlapping sprites caused unpredictable behaviour. To combat this, I had to build enemy rhythms which never result in an overlap."
                       iframe-u-r-l="https://replit.com/@TassSuderman/SpaceInvadersDemo?embed=true"
                       iframe-title="JavaFX Space Invaders: Lite Edition"
                       :iframe-note="['*Note: this version is stripped down quite a bit in terms of graphics and performance in order to have it run reliably on web browsers',
                                      'Controls: ⇦ Move Left  | ⇨ Move Right',
                                      '⇧ Fire Primary Weapon  | ⇩ Fire Secondary Weapon']"
                       iframe-height="800px"
                       iframe-width="400px"
                       iframe-modal-size="md"
                       external-link="https://github.com/tass-suderman/jfx-space-invaders-lite-edition"
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
