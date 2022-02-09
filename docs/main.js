const questions=document.querySelectorAll('.qa')
questions.forEach((q)=>{
    q.addEventListener("click",()=>{

        if(q.classList.contains("active")){
            q.classList.toggle("active")
        }
        else{
            q.classList.add("active")
            // questions.forEach((q)=>{
            //     if(q.classList.contains("active") && !this){
            //         q.classList.toggle("active")
            //     }
            // })
        }
    })
})
