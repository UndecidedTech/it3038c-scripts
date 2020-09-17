<template>
  <div v-if="open" id="quickReply" class="extPanel reply d-none">
      <div id="qrHeader" class="drag postblock">Reply to Thread No.<span id="qrTid"></span><img alt="X"
              src="https://s.4cdn.org/image/buttons/burichan/cross.png" id="qrClose" class="extButton" @click="makeVisible()" title="Close Window">
      </div>
          <div id="qrForm">
              <div><textarea v-model="comment" name="com" cols="48" rows="4" wrap="soft" tabindex="0" placeholder="Comment"></textarea>
              </div>
              <div>
                  <form enctype="multipart/form-data">
                    <input class="" @change="onFileSelected" type="file" id="uploadReplyImage"/>
                    <button class="ml-auto" type="submit" @click="sendReply()">Submit</button>
                  </form>
            </div>
          </div>
      <div id="qrError"></div>
  </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "./../event-bus";

export default {
    name: "replyBox",
    data() {
      return {
        "image": undefined,
        "comment": "",
        "open": true,
        }
    },    
    methods: {
        makeDraggable() {
            const replyDiv = $("#quickReply");
            replyDiv.draggable();
        },
        makeVisible() {
            const replyDiv = $("#quickReply");

            if (replyDiv.hasClass("d-none"))
                replyDiv.removeClass("d-none");
            else
                replyDiv.addClass("d-none");
        },
        onFileSelected(event) {
            console.log(event.target.files[0]);
            this.image = event.target.files[0];
        },
         async getThread() {
         await axios.get("http://localhost:3000/api/thread").then(res => {
           if (res.data.image !== undefined) {
              this.makeVisible();
           }
         })
       },
       async sendReply() {
            const fd = new FormData();
            if (this.image !== undefined) {
                fd.append("image", this.image, this.image.name);
            }
            fd.append("comment", this.comment);
            console.log("IS ANYTHING FUCKING HAPPENING", fd)
            await axios.post("http://localhost:3000/api/reply", fd)
            .then(res => {
                console.log(res)
            })
       }
    },
    mounted() {
        this.makeDraggable();
        this.getThread();

        EventBus.$on("thread-number-clicked", (thread) => {
            this.makeVisible("EVENTBUS: ", thread);
        })
    }
}
</script>

<style>
#quickReply {
    display: block;
    position: fixed;
    padding: 2px;
    font-size: 10pt;
}

.reply {
    background-color: #d6daf0;
    border: 1px solid #b7c5d9;
    border-left: none;
    border-top: none;
    display: table;
    padding: 2px;
    position: static;
}

.extButton {
    cursor: pointer;
}
</style>