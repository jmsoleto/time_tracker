<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navbar navbar-default">
        <div class="container">
          <a href="#" class="navbar-brand">
            <i class="glyphicon glyphicon-time"></i>
            Vue Time Tracker
          </a>
          <ul class="nav navbar-nav">
            <li>
              <router-link :to="'/home'">Home</router-link>
            </li>
            <li>
              <router-link :to="'/time-entries'">Time Entries</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="col-sm-3">
          <sidebar :time="totalTime"></sidebar>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar"
import EventBus from "./event-bus.js"

export default {
  name: "app",
  components: {
    'sidebar':Sidebar
  },
  data () {
    return {
      totalTime: 1.5
    }
  },
  mounted () {
    EventBus.$on('timeUpdate', timeEntry => this.totalTime += parseFloat(timeEntry.totalTime) )
    EventBus.$on('timeDelete', timeEntry => this.totalTime -= parseFloat(timeEntry.totalTime) )
  }

};
</script>

<style lang="less">
</style>
