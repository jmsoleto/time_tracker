<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label for="date">Date</label>
        <input 
          type="date"
          class="form-control"
          v-model="timeEntry.date"
          placeholder="Date"
        >
      </div>
      <div class="col-sm-6">
        <label for="hours">Hours</label>
        <input 
          type="number"
          class="form-control"
          v-model="timeEntry.totalTime"
          placeholders="Hours"
        >
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label for="comment">Comment</label>
        <input 
          type="text"
          class="form-control"
          v-model="timeEntry.comment"
          placeholder="Comment"
        >
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">Save</button>
    <router-link :to="'/time-entries'" class="btn btn-danger">Cancel</router-link>

  </div>
</template>

<script>
import EventBus from "./../event-bus.js"

export default {
  data () {
    return {
      timeEntry: {
        user: {
          firstName: 'Ryan',
          lastName: 'chenckie',
          email: 'ryanchecnkie@gmail.com',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
        }
      }
    }
  },
  methods: {
    save () {
      let timeEntry = this.timeEntry;
      EventBus.$emit('timeUpdate', timeEntry);
      this.timeEntry = {}
    }
  }
};
</script>

<style scoped>
</style>