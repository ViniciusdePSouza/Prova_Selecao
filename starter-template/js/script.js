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

  addRegister(candidate);

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

// function addTab() {

//   const div = document.createElement('div');
//   div.id = `tab-${index}`;
//   div.classList.add('tabcontent');

//   div.innerHTML = `
//     <table class="tab-table">
//       <tbody class="body-tab">
//         <tr class="tr-tab">
//           <th>NOME</th>
//           <th id="tab-name-${index}"></th>
//           </tr>
//         <tr class="tr-tab">
//         <th>E-MAIL</th>
//         <th id="tab-email-${index}"></th>
//         </tr>
//         <tr class="tr-tab">
//           <th>NASC.</th>
//           <th id="tab-date-${index}">/th>
//           </tr>
//         <tr class="tr-tab">
//           <th>TEL.</th>
//           <th id="tab-phone-${index}"></th>
//         </tr>
//       </tbody>
//     </table>
//   `;

//   const tabButton = document.getElementById('tab-buttons');

//   const button = document.createElement('button');
//   button.classList.add('tablinks');
//   // button.addEventListener('click', openCandidate(event, 'tab-${index}'));
//   button.innerHTML = `${index}`;

//   tabButton.appendChild(button);

// }


function addRegister(newCandidate) {
  if (index > 4) {
    addTableRow();
    addTab();
  }

  document.getElementById(`name-${index}`).innerHTML = newCandidate.name;
  document.getElementById(`email-${index}`).innerHTML = newCandidate.email;
  document.getElementById(`date-${index}`).innerHTML = newCandidate.date;
  document.getElementById(`phone-${index}`).innerHTML = newCandidate.phone;

  //RESPONSIVE

  document.getElementById(`tab-name-${index}`).innerHTML = newCandidate.name;
  document.getElementById(`tab-email-${index}`).innerHTML = newCandidate.email;
  document.getElementById(`tab-date-${index}`).innerHTML = newCandidate.date;
  document.getElementById(`tab-phone-${index}`).innerHTML = newCandidate.phone;

  index++;

}
