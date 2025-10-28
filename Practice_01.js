//Here’s a short text with the name Sajid repeated.

const sentence="Sajid woke up early in the morning. After breakfast, Sajid wondered what to do today. A little later, Sajid called his friend and asked to hang out, but the friend was busy. So, Sajid decided to go alone. While walking outside, Sajid noticed many new things around the neighborhood. After getting tired, Sajid returned home. At home, Sajid made some tea and listened to music. In the end, Sajid smiled and thought, “Today was a pretty good day!"

const matches=sentence.match(/Sajid/gi);

const occurances=matches ? matches.length :0;

 console.log(occurances);

let position = sentence.search(/Sajid/i)

position=position>=0?position:"not found !";

console.log(position);