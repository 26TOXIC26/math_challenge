function random_sign()
{
    let sign_n = Math.floor(Math.random() * 100);
    if (sign_n <= 50)
        return ("+");
    else if (sign_n > 50 && sign_n <=100)
        return ("-");
}

document.getElementById("math-num1").textContent = Math.floor(Math.random() * 100);
document.getElementById("math-num2").textContent = Math.floor(Math.random() * 100);
document.getElementById("math-sign").textContent = random_sign();

document.getElementById("get-bet").addEventListener("click", function () 
{
    let num1 = document.getElementById("math-num1").textContent;
    let num2 = document.getElementById("math-num2").textContent;
    let sign = document.getElementById("math-sign").textContent;
    let calc = num1 + sign + num2;

    let result = Number(document.getElementById("in-bet").value);

    if (result === Math.floor(eval(calc))) 
    {
        document.getElementById("result-par").textContent = "Correct!!";
        setTimeout(() => location.reload(), 5000);
    } 
    else 
        document.getElementById("result-par").textContent = "Not Correct!! Try Again";
});

document.getElementById("reload").addEventListener("click", function()
{
    location.reload();
}); 



