function tek()
{
    var baslangic,bitis;
    baslangic=parseInt(document.getElementById("textbaslangic").value);
    bitis=parseInt(document.getElementById("textbitis").value);
    document.getElementById("textsonuc").value="";
    
    for (baslangic;baslangic <= bitis; baslangic++) {
       
        if(baslangic%2!=0)
        {
            document.getElementById("textsonuc").value+=baslangic+'\n';
        }
        
    }

}
function cift()
{
    var baslangic,bitis;
    baslangic=parseInt(document.getElementById("textbaslangic").value);
    bitis=parseInt(document.getElementById("textbitis").value);

    document.getElementById("textsonuc").value="";
    for (baslangic;baslangic <= bitis; baslangic++) {
       
        if(baslangic%2==0)
        {
            document.getElementById("textsonuc").value+=baslangic+'\n';
        }
        
    }
    
}