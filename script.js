function giveMeButtonsOnScreen() {
  const rootEl = document.getElementByID("root");
  Let buttonsDataArray = Array(26).fill(null);
  Let i = 65;
  buttonsDataArray = buttonsDataArray.map((value)=>{
   return String.fromCharCode(i++);
  });

  console.log(buttonsDataArray);
}
giveMeButtonsOnScreen();
