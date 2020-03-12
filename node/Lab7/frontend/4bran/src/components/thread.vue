<template>
  <div class="content">
      <div class="row">
          <div>
            <img v-bind:src="`${thread.image}`">
            <h1>{{ thread.content }}</h1>
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
           console.log(res.data);
        //    if (res.data.image !== undefined) {
        //       this.thread.image = res.data.image;
        //       this.thread.title = res.data.title;
        //       this.thread.replies = res.data.replies;
        //       this.thread.content = res.data.content;

        //    }
         })
        }
    },
    mounted() {

    }

}
</script>

<style>
.content {
    margin-right: 12%;
    margin-left: 12%;
}
</style>