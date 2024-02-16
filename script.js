let helloBTN = document.querySelector('button');
helloBTN.addEventListener('click', inputMsg);

function performAction()
{
    alert("HELLO WORLD");
}

function inputMsg()
{
    let name = prompt("Enter your message");
    helloBTN.textContent = "Name: " + name;
}