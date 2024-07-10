document.addEventListener("DOMContentLoaded",()=>{

  const InputFocusName = document.getElementById("name")
  const InputFocusEmail = document.getElementById("email")
  const InputFocusSubject = document.getElementById("subject")
  const InputFocusMessagePC = document.getElementById("messagePC")
  const InputFocusMessagePhone = document.getElementById("messagePhone")

  InputFocusName.addEventListener("focus",()=>{
    InputFocusName.classList.add("InputFocusColor");
  });
  InputFocusName.addEventListener("blur",()=>{
    InputFocusName.classList.remove("InputFocusColor");
  });

  InputFocusEmail.addEventListener("focus",()=>{
    InputFocusEmail.classList.add("InputFocusColor")
  });
  InputFocusEmail.addEventListener("blur",()=>{
    InputFocusEmail.classList.remove("InputFocusColor")
  });

  InputFocusSubject.addEventListener("focus",()=>{
    InputFocusSubject.classList.add("InputFocusColor")
  });
  InputFocusSubject.addEventListener("blur",()=>{
    InputFocusSubject.classList.remove("InputFocusColor")
  });

  InputFocusMessagePC.addEventListener("focus",()=>{
    InputFocusMessagePC.classList.add("InputFocusColor")
  });
  InputFocusMessagePC.addEventListener("blur",()=>{
    InputFocusMessagePC.classList.remove("InputFocusColor")
  });
 
  InputFocusMessagePhone.addEventListener("focus",()=>{
    InputFocusMessagePhone.classList.add("InputFocusColor")
  });
  InputFocusMessagePhone.addEventListener("blur",()=>{
    InputFocusMessagePhone.classList.remove("InputFocusColor")
  });

});