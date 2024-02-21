let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let savePaasword = document.getElementById("save");

const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@$%^&_=~`(){}:'<>?+-.,/*;:";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";

  for (let i = 0; i < len; i++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  setTimeout(() => {
    alert("Password has been generated!");
  }, 500);
};

const savePassword = () => {
  savePaasword.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya : ${document.title}`)
  );
  savePaasword.setAttribute("download", "MypasswordGeneratorLog.txt");
  setTimeout(() => {
    alert("berhasil disimpan");
  }, 500);
};
