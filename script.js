 let myInput = document.querySelector("#myInput");
  let string = "";
  let buttons = document.querySelectorAll('.newbtn');
  let different = document.querySelectorAll('.different');

  Array.from(buttons).forEach((newbtn) => {
    newbtn.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {
        try {
          string = eval(string);
          myInput.value = string;
        } catch (error) {
          myInput.value = "Error";
          string = "";
        }
      }
      else {
        string += e.target.innerHTML;
        myInput.value = string;
      }
    });
  });

  Array.from(different).forEach((different) => {
    different.addEventListener('click', (e) => {
      if (e.target.innerHTML == 'C') {
        string = "";
        myInput.value = "";
      }
      else if (e.target.innerHTML == '=') {
        try {
          string = eval(string);
          myInput.value = string;
        } catch (error) {
          myInput.value = "Error";
          string = "";
        }
      } else {
        string += e.target.innerHTML;
        myInput.value = string;
      }
    });
  });
