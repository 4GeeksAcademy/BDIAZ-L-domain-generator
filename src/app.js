/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io"];

window.onload = function() {
  //write your code here
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let m = 0; m < ext.length; m++) {
          let domain = pronoun[i] + adj[x] + noun[y] + ext[m];
          console.log(domain);
          document
            .getElementById("domains")
            .insertAdjacentHTML(
              "beforeend",
              "<p class='alert alert-warning mt-4'>" + domain + "</p>"
            );
        }
      }
    }
  }
};
