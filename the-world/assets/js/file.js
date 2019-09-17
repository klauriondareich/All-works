  let continent = document.querySelectorAll("li");

  continent.forEach(element =>{
    console.log(element);
    element.addEventListener("click",isContinentSelected);
  });

  const callData = () =>{
    
  }

  function isContinentSelected(){
    this.dataset.selected = this.dataset.selected === "true" ? "false":"true";

    numberOfSelectedElement();
    selectedContinent();
  };


  function numberOfSelectedElement(){
    let selectedElt = document.querySelectorAll("li[data-selected='true']").length;

    document.querySelector(".last-block span:nth-child(2)").textContent = "Nombre : " + selectedElt;
  }


  function selectedContinent(){
    let isTrueArray = document.querySelectorAll("li[data-selected='true']");
    let displayInArray = [];
    isTrueArray.forEach(elt =>{
      displayInArray.push(elt.textContent);
    })
    document.querySelector(".last-block span:first-child").textContent = displayInArray.join(", ");
   }
