document.querySelectorAll('.ques').forEach((Element,index )=>{ 
    Element.addEventListener('click',()=>{
        let minus=document.querySelectorAll('.minus')[index]
        let plus=document.querySelectorAll('.plus')[index]
        
        let ans=document.querySelectorAll('.ans')[index]
        if (ans.style.display=='block') {
            ans.style.display='none'
            minus.style.display='none'
            plus.style.display='block'
        }
        else{
            ans.style.display='block'
            plus.style.display='none'
            minus.style.display='block'
        }
    })
})



