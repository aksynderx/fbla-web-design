class Photo {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }
    
    insert() {
        var slideshowContainer = document.getElementById("slideshowContainer");
        const image = new Image();
        image.src = this.src;
        image.alt = this.alt;
        image.width = 50%
        slideshowContainer.appendChild(image);
        image.classList.add("portfolioSlideshow");
    }
}

function initialSubmit() {
    document.getElementById("confirmation").style.display = "block";
    const firstName = document.getElementById("firstName").value;
    document.getElementById("firstNameConfirm").append(firstName);
    const lastName = document.getElementById("lastName").value;
    document.getElementById("lastNameConfirm").append(lastName);
    const emailAddress = document.getElementById("emailAddress").value;
    document.getElementById("emailAddressConfirm").append(emailAddress);
    const message = document.getElementById("message").value;
    document.getElementById("messageConfirm").append(message);
}

function edit() {
    document.getElementById("confirmation").style.display = "none";
}

function finalSubmit() {
    document.getElementById("confirmation").style.display = "none";
    window.alert("Thank you for contacting me! I will get back to you as quickly as possible!");
    // continues to send to server to send email
}

function loadPortfolio() {
    const image1 = new Photo("./javascript/photographyBG1.JPG", "athul sitting on a tree");
    image1.insert();
    const image2 = new Photo("./javascript/dog.jpg", "german shepherd");
    image2.insert();
    const image3 = new Photo("./javascript/train.jpg", "train over water");
    image3.insert();
    console.log(image1);
    document.getElementById("loadPortfolio").style.display = "none";
}

// source for below code: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("portfolioSlideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}