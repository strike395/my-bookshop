function toggleNav()
 {

  var sidebar = document.getElementById("mySidebar");
  var togglebtn = document.querySelector(".togglebtn");

  if (sidebar.style.width === "250px") 
  {
    sidebar.style.width = "0";
    togglebtn.style.display = "block";
  } else
   {
    sidebar.style.width = "250px";
    togglebtn.style.display = "none";
  }
}

const url = "https://mudfoot.doc.stu.mmu.ac.uk";