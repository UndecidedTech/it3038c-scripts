<template>
  <div class="content">
      <div class="row">
          <div v-if="thread.image">
            <img v-bind:src="`http://localhost:3000/${thread.image}`">
            <h1>{{ thread.content }}</h1>
        </div>
        <div v-else>
        </div>
      </div>
      
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "thread",
    data() {
        return {
            "thread": {}
        }
    },
    methods: {
        async getThread() {
         await axios.get("http://localhost:3000/api/thread").then(res => {
              this.thread.image = res.data.image;
              this.thread.title = res.data.title;
              this.thread.replies = res.data.replies;
              this.thread.content = res.data.content;
         })
        }
    },
    mounted() {
        this.getThread();
    }

}
</script>

<style>
.content {
    margin-right: 12%;
    margin-left: 12%;
}
</style>