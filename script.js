function btnclick(val)
{
    document.getElementById("screen").value+=val;
}
function eqclick()
{
    var res=document.getElementById("screen").value;
    var result=eval(res)
    document.getElementById('screen').value=result;
}
function btnclear()
{
    document.getElementById('screen').value=""
}
function btndel()
{
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}