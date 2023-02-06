function converte(){
var res=document.getElementById('res')
var binNum=document.getElementById('bin')
var bin=String(binNum.value)
var dec=null
var pos=bin.length-1
var diff=null
for(var index=0;index<bin.length;index++){
    if(bin.charAt(index)!=0 && bin.charAt(index)!=1){
        diff++
    }
}
if(diff!=null){
    res.innerHTML=('Foi digitado um número inválido! São aceitos apenas os dígitos 1 ou 0')
}
else{
for(var i=0;i<=bin.length;i++){
 dec+=Math.pow(2,i)*bin.charAt(pos)
 pos--
}
res.innerHTML=(`O número binário ${bin} é igual a  ${dec} em decimal`)

}
}