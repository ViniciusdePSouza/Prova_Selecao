
function openCity(evt, tableIndex) {
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

const Form = {

  name: document.querySelector('input#name'),
  email: document.querySelector('input#email'),
  date: document.querySelector('input#date'),
  phone: document.querySelector('input#phone'),

  getValues() {

    return{
      name: Form.name.value,
      email: Form.email.value,
      date: Form.date.value,
      phone: Form.phone.value
     }
  },

  validateFields() {
    const { name, email, date, phone } = Form.getValues()

    if(name.trim() === "" || email.trim() === "" || phone.trim() === ""){
      throw new Error("Por Favor preencha todos os campos")
    }
  },

  formatData() {

  },
  
  submit (event) {
    event.preventDefault();
    try{
      Form.validateFields()
    } catch(e) {
      alert(error.message)
    }
  }
}
