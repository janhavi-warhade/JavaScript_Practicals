
function basicOperations() {
  let str = document.getElementById("mainString").value;
  if (str === "") {
    document.getElementById("result").innerText = "Please enter a string!";
    return;
  }

  let substringPart = str.substring(0, 5);
  let index = str.indexOf("a");
  let splitWords = str.split(" ");
  let replaced = str.replace("a", "@");

  document.getElementById("result").innerHTML =
    `<strong>Original:</strong> ${str}<br>
     <strong>Substring(0,5):</strong> ${substringPart}<br>
     <strong>Index of 'a':</strong> ${index}<br>
     <strong>Split (by space):</strong> ${splitWords}<br>
     <strong>Replace 'a' with '@':</strong> ${replaced}`;
}

function reverseString() {
  let input = document.getElementById("reverseInput").value;
  if (input === "") {
    document.getElementById("reverseResult").innerText = "Please enter a string!";
    return;
  }
  let reversed = input.split("").reverse().join("");
  document.getElementById("reverseResult").innerHTML = <strong>Reversed String:</strong> ${reversed};
}

function countVowels() {
  let text = document.getElementById("paragraph").value.toLowerCase();
  if (text === "") {
    document.getElementById("vowelResult").innerText = "Please enter a paragraph!";
    return;
  }

  let vowels = text.match(/[aeiou]/g);
  let count = vowels ? vowels.length : 0;

  document.getElementById("vowelResult").innerHTML = <strong>Total Vowels:</strong> ${count};
}
