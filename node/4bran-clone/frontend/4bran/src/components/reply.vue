<template>
    <div>
        <div class="sideArrows">>></div>
        <imageComponent v-if="replyData.image" :image="replyData.image"/>
        <!-- <img v-if="reply.image !== undefined" v-bind:src="`http://localhost:3000/${reply.image.path}`"/> -->
        <div v-if="replyData.image !== undefined">File: <a :href="replyData.image.path">Image URL ({{ replyData.image.size.nWidth }}x{{replyData.image.size.nHeight}})</a> </div>
        <div class="threadTitle anonymous">
            Anonymous
        </div>
        <div class="threadTitle postNumber ml-2">{{ padPostNumber(replyData.postNumber) }}</div>
        <div class="postMessage">
            {{ replyData.comment }}
        </div>
    </div>
</template>

<script>
import imageComponent from "../components/imageComponent";
export default {
    name: "replyComponent",
    props: ["replyData"],
    components: {
        imageComponent
    },
    methods: {
        padPostNumber(resNumber) {
            let padAmount = 8 - resNumber.toString().length;
            console.log("padding: ", resNumber.toString.length, padAmount);
            let paddedPost = resNumber.toString();
            paddedPost = paddedPost.padStart(padAmount, "0")
            return paddedPost;
        }
    }
}
</script>

<style>
.postMessage {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
}

.postNumber {
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  /*input has OS specific font-family*/
  cursor: pointer;
}

.postNumber:hover {
  color: red;
}

.anonymous {
    color: #117743;
}
.threadTitle {
    padding-left: 10px;
    text-align: start;
    display: inline-block;
}

.threadReply {
    background-color: #d6daf0;
    border: 1px solid #b7c5d9;
    border-left: none;
    border-top: none;
    display: table;
    padding: 2px;
    margin: 4px;
}

.oldopContainer  {
    margin-top: 5%;
    padding: 5px;
    display: block;
    overflow: hidden;
    background-color: #d6daf0;
    border: 1px solid #b7c5d9!important;
    min-width: 80vw;
}
.sideArrows {
    color: #b7c5d9;
    float: left;
    margin-right: 2px;
    margin-top: 0;
    margin-left: 2px;
}
</style>