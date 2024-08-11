const bodyel = document.querySelector("body");

bodyel.addEventListener("mousemove" , (event)=>{
   const ypox = event.offsetY;
   const xpos = event.offsetX;
  const spanEL = document.createElement("span");
  spanEL.style.left = xpos + "px";
  //spanEL.style.top = ypos + "px";
  spanEL.style.top = ypox + "px";
  const size = Math.random()*100;
  spanEL.style.width = size + "px"
  spanEL.style.height = size + "px"

  bodyel.appendChild(spanEL);
  setTimeout(()=>{
   spanEL.remove();
  } ,3000);
})

