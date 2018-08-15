<template>
  <div>
    <router-link 
      v-if="$route.path !== '/time-entries/log-time'"
      :to="'/time-entries/log-time'"
      class="btn btn-primary">
        Log Time
    </router-link>
    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>Log time</h3>
    </div>
    <hr>
    <router-view></router-view>
    <div class="time-entries">
      <p v-if="!timeEntries.lenght"><strong>No time entries yet</strong></p>

      <div class="list-group">
        <a href="#" class="list-group-item" v-for="timeEntry in timeEntries" :key="timeEntry.id">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" alt="" class="avatar img-circle img-responsive">
              <p class="text-center">
                <strong>
                  {{ timeEntry.user.firstName}}
                  {{ timeEntry.user.lastName}}
                </strong>
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ timeEntry.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ timeEntry.date }}
              </p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>{{ timeEntry.comment }}</p>
            </div>
            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deleteTimeEntry(timeEntry)"
              >X
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "./../event-bus.js"

export default {
  data() {
    return {
      timeEntries: [
        {
          user: {
            firstName: "Ryan",
            lastName: "chenkie",
            email: "ryanchenkie@gmail.com",
            image:
              "https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250"
          },
          comment: "First Time entry",
          totalTime: 1.5,
          date: "2016-04-08",
          id: 1,
        }
      ]
    };
  },
  methods: {
    deleteTimeEntry (timeEntry){
      let index = this.timeEntries.indexOf(timeEntry);
      if(window.confirm('Are you sure you want to delete this time entry?')) {
        this.timeEntries.splice(index, 1);
        this.$dispatch('deleteTime', timeEntry);
      }
    }
  },
  mounted () {
    EventBus.$on('timeUpdate', timeEntry => this.timeEntries.push(timeEntry))
  }
};
</script>

<style scoped>
.avatar {
  height: 75px;
  margin: 10px auto;
}
.user-details {
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  margin: -10px 0;
}
.time-block {
  padding: 10px;
}
.comment-section {
  padding: 20px;
}
</style>