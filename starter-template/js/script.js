let index = 2;

function openCandidate(evt, tableIndex) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tableIndex).style.display = "block";
  evt.currentTarget.className += " active";
}

function newRegister() {
  const candidate = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    date: document.getElementById('date').value,
    phone: document.getElementById('phone').value
  }
  
  try{
    Form.validateFields(candidate);
    Form.formatDate(candidate);
    Form.formatPhone(candidate);
   
    addRegister(candidate);

  } catch(error){
    alert(error.message);
  }



}

const Form = {
  
  validateFields(candidateValidate){
      if(candidateValidate.name.trim() === "" || candidateValidate.email.trim() === "" || candidateValidate.date.trim() === "" || candidateValidate.phone.trim() === "") {
      throw new Error("Por favor, preencha todos os dados")
    } 
  },

  formatDate(format){
    date = format.date
    arrayDate = date.split("")

    return `${arrayDate[1]} ${arrayDate[2]} / ${arrayDate[3]} ${arrayDate[4]} / ${arrayDate[5]} ${arrayDate[6]} ${arrayDate[7]} ${arrayDate[8]}` 
  },

  formatPhone(format){
    phone = format.phone
    arrayPhone = phone.split("")

    return `(${arrayPhone[1]} ${arrayPhone[2]}) ${arrayPhone[3]} ${arrayPhone[4]} ${arrayPhone[5]} ${arrayPhone[6]} ${arrayPhone[7]} ${arrayPhone[8]} ${arrayPhone[9]} ${arrayPhone[10]} ${arrayPhone[11]}`
  }
}

function addTableRow() {
  const tableBody = document.getElementById('tbody-web');

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td id="index-${index}" class="index">${index}</th>
    <td id="name-${index}" class="text-table"></td>
    <td id="email-${index}" class="text-table"></td>
    <td id="date-${index}" class="text-table"></td>
    <td id="phone-${index}" class="text-table"></td>
  `

  tableBody.appendChild(tr);
}


function addRegister(newCandidate) {
  if (index > 4) {
    addTableRow();
  }

  document.getElementById(`name-${index}`).innerHTML = newCandidate.name;
  document.getElementById(`email-${index}`).innerHTML = newCandidate.email;
  document.getElementById(`date-${index}`).innerHTML = newCandidate.date;
  document.getElementById(`phone-${index}`).innerHTML = newCandidate.phone;

  index++;
  // RESPONSIVE 

  document.getElementById(`tab-name-${index}`).innerHTML = newCandidate.name;
  document.getElementById(`tab-email-${index}`).innerHTML = newCandidate.email;
  document.getElementById(`tab-date-${index}`).innerHTML = newCandidate.date;
  document.getElementById(`tab-phone-${index}`).innerHTML = newCandidate.phone;

}
