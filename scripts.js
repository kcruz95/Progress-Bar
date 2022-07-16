"use strict";

const bar = document.querySelector(".bar");
setTimeout(() => {
  bar.getElementsByClassName.setProperty("--progress", "75%");
}, 500)