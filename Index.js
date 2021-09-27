let usuarios = [
  {
    email: "reudismam@gmail.com",
    senha: "admin123"
  },
  {
    email: "lucas@empresa.com",
    senha: "123"
  }
]

function login () {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

 let acesso = false;
  for (let i = 0; i < usuarios.length;i++) {
      if (email === usuarios[i].email && senha === usuarios [i].senha) {
      acesso = true;
      }
  }
  if (acesso) {
      alert("ACESSO PERMITIDO!");
  }
  else{
    alert("ACESSO NEGADO! USUÁRIO NÃO ENCONTRADO!!");
  }
}