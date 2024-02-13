/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let topLevelDomains = [".com", ".org", ".net"];

  let randomDomain = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let x = 0; x < topLevelDomains.length; x++) {
          let domain = pronoun[i] + adj[j] + noun[k] + topLevelDomains[x];
          randomDomain.push(domain);
        }
      }
    }
  }

  console.log(randomDomain);
};
