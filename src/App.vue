<template>
  <div id="app">
    <Header />
    <main>
      <Matchup
        :todaysGames="todaysGames.games"
        :datesDropdown="datesDropdown"
        :getGamesByDate="getGamesByDate"
        :logos="logos"/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Matchup from '@/components/Matchup'
import Footer from '@/components/Footer'

import API from '@/lib/API'

export default {
  name: 'App',
  components: {
    Header,
    Matchup,
    Footer
  },
  data () {
    return {
      todaysGames: [],
      datesDropdown: [],
      logos: []
    }
  },
  mounted() {
    this.datesDropdown = API.aryDates
    this.getGamesByDate()
    this.populateLogos()
  },
  methods: {
    async getGamesByDate(date) {
      this.todaysGames = await API.getGames(date)
    },
    async populateLogos() {
      this.logos = await API.getLogos()
    }
  }
}
</script>

<style>
main {
  margin-top: 5em;
  margin-bottom: 5em;
}

#app {
  background-image: url("https://hdwallsource.com/img/2016/7/colorado-rockies-widescreen-wallpaper-50376-52067-hd-wallpapers.jpg");
  background-size: 100% 100%;
  height: 100vh;
}
</style>
