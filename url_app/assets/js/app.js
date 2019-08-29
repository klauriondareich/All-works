
function extractInfo (){
  let getValue = document.querySelector("input").value;
  let dataTable = getValue.split(".");
  [prefix , siteName, domainName] = dataTable;
  console.log(getValue);
}

function senData(){
  let button = document.querySelector("button");
  button.addEventListener("submit", extractInfo);
  console.log(prefix);
}
