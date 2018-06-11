<template>
    <section id="matchup" :rockiesGame="homeGames()">
        <div class="card mb-3">
            <h2 class="card-header">{{ awayTeam }}</h2>
            <div class="image">
                <img style="display: block;" :src="awayTeamLogo" alt="Card image">
            </div>
        </div>
        <div id="venue">
            <h1 id="at">@</h1>
            <h4>{{ venue }}</h4>
            <p>{{ this.time | moment("dddd, MMMM Do, h:mm A") + " MST" }}</p>
            <div class="filter">
                <label for="basic-dropdown">Date:</label>
                <select
                    v-model="selectedDate"
                    @change="getGamesByDate(selectedDate)">
                    <option
                        v-for="date in datesDropdown"
                        :date="date"
                        :key="date.value"
                        :value="date.value">{{ date.label }}</option>
                </select>
            </div>
        </div>
        <div class="card mb-3">
            <h2 class="card-header">{{ homeTeam }}</h2>
            <div class="image">
                <img style="display: block;" :src="homeTeamLogo" alt="Card image">
            </div>
        </div>
    </section>
</template>

<script>
import API from '@/lib/API'

export default {
    name: "Matchup",
    props: ["todaysGames", "datesDropdown", "getGamesByDate", "logos"],
    data () {
        return {
            homeTeam: '',
            awayTeam: '',
            venue: '',
            time: '',
            selectedDate: null,
            homeTeamLogo: '',
            awayTeamLogo: ''
        }
    },
    methods: {
        homeGames() {
            this.todaysGames.filter(game => {
                if(game.home.name == 'Rockies' || game.away.name == 'Rockies') {
                    this.homeTeam = game.home.name
                    this.awayTeam = game.away.name
                    this.venue = game.venue.name
                    this.time = game.scheduled
                    this.images(this.logos)
               }
            })
        },
        images() {
            const homeLogo = this.logos.find(logo => logo.team == this.homeTeam)
            const awayLogo = this.logos.find(logo => logo.team == this.awayTeam)
            this.homeTeamLogo = homeLogo.logo
            this.awayTeamLogo = awayLogo.logo
        },
    },
}

</script>


<style scoped>
#matchup {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

#at {
    font-size: 70px;
    padding-bottom: 1em;
}

h2 {
    font-weight: 900;
}

#venue {
    background-color: white;
    padding: 4em 2em 4em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
}

.card {
    box-shadow: 4px 8px 8px rgba(0, 0, 0, .5);
    width: 310px;
}

img {
    max-width: 100%;
}
</style>