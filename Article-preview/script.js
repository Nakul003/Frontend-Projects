var white='#ecf2f8'
var slate='#6d7f97'
var darkslate='#48556a'

document.querySelector('.share').addEventListener('click',()=>{
    const share=document.querySelector('.share')
    const current=getComputedStyle(share).fill
    const social=document.querySelector('.social-icons')
    const id=document.querySelector('.id-image')
    const idshare=document.querySelector('.id-share')
    const tooltip=document.querySelector('.tooltip')

    if (window.innerWidth < 768) {
        
        if (current==='rgb(236, 242, 248)') {
            share.style.fill=slate
            share.style.backgroundColor=white
            id.style.display='flex'
            idshare.style.backgroundColor='white'
            social.style.display='none'
        }
    
        else{
            share.style.fill=white
            share.style.backgroundColor=slate
            social.style.display='flex'
            idshare.style.backgroundColor=darkslate
            id.style.display='none'
            
        }
    }
    else{

        if (current==='rgb(236, 242, 248)') {
            share.style.fill=slate
            share.style.backgroundColor=white
            tooltip.style.visibility='hidden'
        }
    
        else{
            share.style.fill=white
            share.style.backgroundColor=slate
            tooltip.style.visibility='visible'
            tooltip.style.opacity=1

        }

    }

})




