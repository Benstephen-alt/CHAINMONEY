function pop() {
    let alertBox = document.getElementById("CaltBox");
    let alert_contain = document.getElementById("alert-msg");
    let Button = document.querySelector(".manet");
    let close = document.querySelector(".close");
    let body = document.querySelector(".body");

    Button.addEventListener('click', function () {
      alert_contain.innerHTML = "Mainnet Coming Soon";
      alertBox.style.display = "block";

    });

    close.addEventListener('click', function () {
      alertBox.style.display = "none";
    })
};  

document.querySelector('.manet').addEventListener('click', () => {
    pop();
  });


  function NewPage() {
    window.open("https://www.kaipresale.com", "_blank");
  };

  document.querySelector('.jsbutton').addEventListener('click', () => {
    NewPage();
  });

  let header = document.querySelector(".js-header")

  const arrayofheader = [...header.innerHTML];
  header.innerText = "";
  
  arrayofheader.forEach((Char, index) => {
    const div = document.createElement("div");
    div.style.animationDelay = 0.5 + index / 10 + "s";
    div.innerText = Char;
     header.appendChild(div);
     div.className = "header-element"
    setTimeout(() => {
     div.style.opacity = 1;
    }, 1000);
    
  });
  
   

  function Anitxt() { 
   
  };
  

  
 
  const TextColor = document.getElementById('Fine');
  
function colorDesign() {
  let colorIndex = 0;

 const colors = ['blue', 'red', 'pink', 'yellow', 'green'];
 TextColor.style.color = colors[colorIndex]; colorIndex = (colorIndex + 1) % colors.lenght;

};
setInterval(colorDesign, 1000);

