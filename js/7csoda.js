

function calcAmountKcs(){
    let kcs=0;
    let kcs11 = document.querySelector("input[name='kcs11']");
    let kcs12 = document.querySelector("input[name='kcs12']");
    let kcs13 = document.querySelector("input[name='kcs13']");
    let kcs14 = document.querySelector("input[name='kcs14']");
    let kcs15 = document.querySelector("input[name='kcs15']");
    let kcs16 = document.querySelector("input[name='kcs16']");
    let kcs17 = document.querySelector("input[name='kcs17']");
    let showAmountKcs = document.querySelector("span.show-amountKcs");
    kcs11= parseInt(kcs11.value);
    kcs12= parseInt(kcs12.value);
    kcs13= parseInt(kcs13.value);
    kcs14= parseInt(kcs14.value);
    kcs15= parseInt(kcs15.value);
    kcs16= parseInt(kcs16.value);
    kcs17= parseInt(kcs17.value);
        kcs = kcs11 + kcs12 + kcs13 + kcs14 + kcs15 + kcs16 + kcs17;
    //let amountNumber = parseInt(amountInput.value);
    //if (isNaN(amountNumber)){
     //   amountNumber = 0;
    //}
    // ugyenez amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    // alert ("Fizetendő:  " + amount + "Ft")
    showAmountKcs.innerHTML= kcs;
}
function calcAmountA(){
    let a=0;
    let a11 = document.querySelector("input[name='a11']");
    let a12 = document.querySelector("input[name='a12']");
    let a13 = document.querySelector("input[name='a13']");
    let a14 = document.querySelector("input[name='a14']");
    let a15 = document.querySelector("input[name='a15']");
    let a16 = document.querySelector("input[name='a16']");
    let a17 = document.querySelector("input[name='a17']");
    let showAmountA = document.querySelector("span.show-amountA");
    a11= parseInt(a11.value);
    a12= parseInt(a12.value);
    a13= parseInt(a13.value);
    a14= parseInt(a14.value);
    a15= parseInt(a15.value);
    a16= parseInt(a16.value);
    a17= parseInt(a17.value);
        a = a11 + a12 + a13 + a14 + a15 + a16 + a17;
    //let amountNumber = parseInt(amountInput.value);
    //if (isNaN(amountNumber)){
     //   amountNumber = 0;
    //}
    // ugyenez amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    // alert ("Fizetendő:  " + amount + "Ft")
    showAmountA.innerHTML= a;
}
function calcAmountKk(){
    let kk=0;
    let kk11 = document.querySelector("input[name='kk11']");
    let kk12 = document.querySelector("input[name='kk12']");
    let kk13 = document.querySelector("input[name='kk13']");
    let kk14 = document.querySelector("input[name='kk14']");
    let kk15 = document.querySelector("input[name='kk15']");
    let kk16 = document.querySelector("input[name='kk16']");
    let kk17 = document.querySelector("input[name='kk17']");
    let showAmountKk = document.querySelector("span.show-amountKk");
    kk11= parseInt(kk11.value);
    kk12= parseInt(kk12.value);
    kk13= parseInt(kk13.value);
    kk14= parseInt(kk14.value);
    kk15= parseInt(kk15.value);
    kk16= parseInt(kk16.value);
    kk17= parseInt(kk17.value);
        kk = kk11 + kk12 + kk13 + kk14 + kk15 + kk16 + kk17;
    //let amountNumber = parseInt(amountInput.value);
    //if (isNaN(amountNumber)){
     //   amountNumber = 0;
    //}
    // ugyenez amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    // alert ("Fizetendő:  " + amount + "Ft")
    showAmountKk.innerHTML= kk;
}

//function ujAdatokKcs{

//}
//function showSumPrice (price, amountNumber) {
  //  amountNumber = amountNumber || 0;
    //let showAmount = document.querySelector("span.show-amount");
    //let amountInput = document.querySelector("input[name='amount-Input']");
    //if (amountNumber > 10){
      //  alert ("Maximum 10 db terméket vásárolhat!");
        //return;
//    }
  //  else if (amountNumber < 1) {
    //    alert ("Minimum 1 terméket kell vásárolnia");
//    }
  //  let amount = parseInt(amountInput.value) * price;
   // showAmount.innerHTML = amount;
    
//}