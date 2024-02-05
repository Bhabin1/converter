const convert = () => {
  const temp = parseInt(document.getElementById("inp").value);
  const type = document.getElementById("type").value;

  if (type == "fahr") {
    var res = (temp * 9) / 5 + 32;
  } else {
    var res = temp + 273;
  }
  document.getElementById("result").innerHTML = res;
};

//   var typed = new Typed("#result", {
//     strings: [`${res}`],
//     typeSpeed: 100,
//     backSpeed: 5,
//     loop: true,
//   });
//   typed;
//
