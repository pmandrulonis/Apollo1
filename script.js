  const button = document.getElementById("submitemail");
  const emailInput = document.getElementById("email");
  const demo = document.getElementById("demo");

  button.addEventListener("click", myFunction);

  function myFunction() {
    const email = emailInput.value;
    
    if (email !== "") {
    demo.innerHTML = `Hello ${email}, we'll send updates soon.`;
  }

  }

