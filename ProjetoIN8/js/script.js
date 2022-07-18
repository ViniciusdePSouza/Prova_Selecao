let index = 2;
let indexResponsive = 2;

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
  try {
    Form.validateFields(candidate);
    addRegister(candidate);
  } catch (error) {
    alert(error.message);
  }
}

const Form = {
  validateFields(candidateValidate) {
    if (candidateValidate.name.trim() === "" || candidateValidate.email.trim() === "" || candidateValidate.date.trim() === "" || candidateValidate.phone.trim() === "") {
      throw new Error("Por favor, preencha todos os dados")
    }
  },
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
  `;
  tableBody.appendChild(tr);
}

function addButton() {
  const div = document.getElementById('tab-buttons');

  const button = document.createElement('button');
  button.classList.add('tablinks')
  
  button.innerHTML = `<button onclick="openCandidate(event, 'tab-${indexResponsive}')">${indexResponsive}</button>`

  div.appendChild(button);
}

function addTabTable() {
  const div = document.getElementById('tab');

  const divtab = document.createElement('div');
  divtab.id = `tab-${indexResponsive}`
  divtab.classList.add("tabcontent")

  div.innerHTML = `
      <table class="tab-table">
        <tbody class="body-tab">
            <tr class="tr-tab">
              <th>NOME</th>
              <th id="tab-name-${indexResponsive}"></th>
            </tr>
            <tr class="tr-tab">
                <th>E-MAIL</th>
                 <th id="tab-email-${indexResponsive}"></th>
            </tr>
              <tr class="tr-tab">
                <th>NASC.</th>
                <th id="tab-date-${indexResponsive}"></th>
                </tr>
              <tr class="tr-tab">
                <th>TEL.</th>
                <th id="tab-phone-${indexResponsive}"></th>
              </tr>
        </tbody>
      </table>
  `;
}


function addRegister(newCandidate) {
  if (index > 4) {
    addTableRow();
    addButton();
  }

  document.getElementById(`name-${index}`).innerHTML = newCandidate.name;
  document.getElementById(`email-${index}`).innerHTML = newCandidate.email;
  document.getElementById(`date-${index}`).innerHTML = newCandidate.date;
  document.getElementById(`phone-${index}`).innerHTML = newCandidate.phone;
  
  index++;
  // RESPONSIVE 

  document.getElementById(`tab-name-${indexResponsive}`).innerHTML = newCandidate.name;
  document.getElementById(`tab-email-${indexResponsive}`).innerHTML = newCandidate.email;
  document.getElementById(`tab-date-${indexResponsive}`).innerHTML = newCandidate.date;
  document.getElementById(`tab-phone-${indexResponsive}`).innerHTML = newCandidate.phone;

  indexResponsive++;
}
