let list=[
    {
        img:'g3.jpg',
        name:'jhon eiky',
        job:'web-designe',
        info:'Hi! I’m a web developer and I love all things tech. When I’m not knee-deep in code, I’m probably reading up on the latest development trends or practicing my sketching (or both).'
    },
    {
        img:'m2.jpg',
        name:'full stack',
        job:'web-designe',
        info:'I got my start in technology as a self-taught coder, and since then I’ve never looked back. I specialize in front-end development, but I have a little bit of experience with everything from coding to QA to project management.'
    },
    {
        img:'g4.jpg',
        name:'lusia jain',
        job:'block chan',
        info:'I’m always looking for new challenges and opportunities, and I’m excited to see what the future holds for me in the world of tech. Thanks for reading!'
    },
    {
        img:'m1.jpg',
        name:'nicola jaoms',
        job:'UI/UX',
        info:'I believe that my skills and experience make me an excellent candidate for any web development role, and I look forward to putting my talents to good use!'
    },
    {
        img:'g5.jpg',
        name:'david nail',
        job:'software-dev',
        info:'It may seem like a lot to remember, but following these simple tips will help you create a bio that pops! So don’t wait any longer, start writing today and get that dream job in no time.'
    }
]
let person_img=document.getElementById('image')
let person_name=document.getElementById('name')
let job=document.getElementById('job')
let info=document.getElementById('info')
let prevbtn=document.getElementById('prevbtn')
let nextbtn=document.getElementById('nextbtn')
let rendombtn=document.getElementById('rendombtn')
let currentitem=3
window.addEventListener('DOMContentLoaded',function(){
    showpersion(currentitem)
})
function showpersion(index){
    const item=list[index]
    person_img.src=item.img
    person_name.innerText=item.name
    job.innerText=item.job
    info.innerText=item.info
}
nextbtn.addEventListener('click',function(){
    currentitem++;
    if(currentitem>list.length-1){
        currentitem=0
    }
    showpersion(currentitem)
})
prevbtn.addEventListener('click',function(){
    currentitem--;
    if(currentitem<0){
        currentitem=list.length-1
    }
    showpersion(currentitem)
})
rendombtn.addEventListener('click',function(){
    currentitem=rendomno()
    showpersion(currentitem)
})
function rendomno(){
    return Math.floor(Math.random()*list.length)
}