let lcase_arr = "abcdefghijklmnopqrstuvwxyz";
let ucase_arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num_arr = "0123456789";
let spl_arr = `!@#$%^&*()_+-=[]{}\|;'"<>,.?/`;
let op_arr = [lcase_arr,ucase_arr,num_arr,spl_arr];
let final_arr = [];
function func() {
    final_arr = [];
    let pref_arr = document.getElementsByClassName("preference");
    let count =0;
    for(let i =0; i<op_arr.length;i++)
    {
        if(pref_arr[i].checked)
        {
            final_arr.push(op_arr[i]);
            count++;
        }
    }
    if(count ==0)
    {
        document.getElementById("display-box").value = "";
        return;
    } 
    length = 10;
    let i =0;
    let pass = "";
    while(i<length)
    {
        let arr = final_arr[Math.floor(Math.random()*final_arr.length)]
        pass = pass + arr[Math.floor(Math.random()*arr.length)];
        i++;
    }
    let displaybox = document.getElementById("display-box")
    displaybox.value = pass;
}
function copy() {
    let display = document.getElementById("display-box");
    let value = display.value;
    if(value != "")
    {
        navigator.clipboard.writeText(value);
    }
}