function myFun(){
const name = document.getElementById("name");
const dob = document.getElementById("dob");

const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");
const file = document.getElementById("file");
const form = document.getElementById("myforn");
const arr = [];


    if (today.value >= tomorrow.value)
    {
        alert("End date should be be greater then start date")
    }

    arr.push({ name : `${name.value}`});
    arr.push({ dob : `${dob.value}`});
    arr.push({ Start_date: `${today.value}`});
    arr.push({ End_date : `${tomorrow.value}`});
    arr.push({ file : `${file.value}`});
    localStorage.setItem("", JSON.stringify(arr));
};

const input = document.getElementById('file');
const link = document.getElementById('link');
let objectURL;

input.addEventListener('change', function () {
  if (objectURL) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL);  
  }

  const file = this.files[0];
  objectURL = URL.createObjectURL(file);

  link.download = file.name; // this name is used when the user downloads the file
  link.href = objectURL;
});




