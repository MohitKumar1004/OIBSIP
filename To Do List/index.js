function add_item() {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let date = document.getElementById("date");
  let list_item = document.getElementById("list_item");
  if (title.value != "") {
    let make_tr = document.createElement("tr");
    let check = document.createElement("button");
    let del = document.createElement("button");
    check.innerHTML = "&#9989;";
    del.innerHTML = "&#10060;";
    let tdtitle = document.createElement("td");
    tdtitle.appendChild(document.createTextNode(title.value));
    let tddescription = document.createElement("td");
    tddescription.appendChild(document.createTextNode(description.value));
    let tdstatus = document.createElement("td");
    tdstatus.appendChild(document.createTextNode("Pending"));
    let tddate = document.createElement("td");
    tddate.appendChild(document.createTextNode(date.value));
    let tdcheck = document.createElement("td");
    tdcheck.appendChild(check);
    let tddelete = document.createElement("td");
    tddelete.appendChild(del);
    make_tr.appendChild(tdtitle);
    make_tr.appendChild(tddescription);
    make_tr.appendChild(tdstatus);
    make_tr.appendChild(tddate);
    make_tr.appendChild(tdcheck);
    make_tr.appendChild(tddelete);
    list_item.appendChild(make_tr);
    console.log(make_tr);
    title.value = "";
    description.value = "";
    date.value = Date.now();
    del.onclick = function () {
      list_item.removeChild(this.parentNode.parentNode);
    };
    check.onclick = function () {
      let parent = this.parentNode.parentNode;
      parent.cells[0].style.textDecoration = "line-through";
      parent.cells[1].style.textDecoration = "line-through";
      parent.cells[3].style.textDecoration = "line-through";
      parent.cells[4].innerHTML="";
      parent.cells[2].innerHTML = "Completed";
    };
  } else {
    alert("Please add a title first");
  }
}