function myFun() {
  const name = document.getElementById("name");
  const dob = document.getElementById("dob");
  const today = document.getElementById("today");
  const tomorrow = document.getElementById("tomorrow");
  const file = document.getElementById("file");
  const form = document.getElementById("myforn");
  const arr = [];

  // .....FOR  NAME  VALIDATION USER CANNOT ENTER NUMBERS,SPACES AND SPECIAL CHARACTERS IN NAME.....

  const regName = /^[A-Za-z_]+$/;
  if (!regName.test(name.value)) {
    alert("Invalid Name.");
    return false;
  }

  // .......FOR DATE VALIDATION.....

  if (today.value >= tomorrow.value) {
    alert("End date should be be greater then start date");
  }
  //.......send data in localStorage by JSON ............

  arr.push({ name: `${name.value}` });
  arr.push({ dob: `${dob.value}` });
  arr.push({ Start_date: `${today.value}` });
  arr.push({ End_date: `${tomorrow.value}` });
  arr.push({ file: `${file.value}` });
  localStorage.setItem("", JSON.stringify(arr));
}

//.......download file code .........

const input = document.getElementById("file");
const link = document.getElementById("link");
let objectURL;

input.addEventListener("change", function () {
  if (objectURL) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL);
  }

  const file = this.files[0];
  objectURL = URL.createObjectURL(file);

  link.download = file.name; // this name is used when the user downloads the file
  link.href = objectURL;
});

//......phone number validation..........
function isPhoneValid() {
  const phone = document.getElementById("phone");

  if (isNaN(phone.value) && !phone.value.includes("-")) {
    alert("please enter number");
  }
  phone.addEventListener("keyup", function () {
    if (phone.value.length === 4) {
      phone.value += "-";
    }
  });
}
