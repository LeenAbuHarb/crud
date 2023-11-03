
let title=document.getElementById('title');
let price=document.getElementById('price');
let texes=document.getElementById('texes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let counts=document.getElementById('counts');
let categoryy=document.getElementById('categoryy');
let submit=document.getElementById('submit');
let seaarch=document.getElementById('search');
// let searchtitle=document.getElementById(searchtitle);
// let searcategory=document.getElementById(searcategory);
let mood='create';
let tmp;

// console.log(price,texes,ads,discount,total,counts,categoryy,submit,title);

// function getTotal() {
// if(price.value !=''){
//     let result=(+price.value + +texes.value + +ads.value) - +discount.value;
//     total.innerHTML=result;
//     total.style.backgroundColor='green';
// }
// else
// {
//     total.innerHTML='';
//     total.style.backgroundColor='red';
// }
// } 


// let data=[];
// if(localStorage.productsave !=null){
//      data= JSON.parse(localStorage.productsave) ;
//      console.log(data);

//     }
// else{
//      data=[];
//     //  console.log(data);
//  }
// submit.onclick= function() {
//     let product={
//       title:  title.value,
//       price: price.value,
//       texes: texes.value,
//       ads:ads.value,
//       discount:discount.value,
//       total:total.innerHTML,
//       counts:counts.value,
//       categoryy:categoryy.value,
//     }
//     //  console.log(data);
//  data.push(product);
//  localStorage.setItem('productsave', JSON.stringify(data) );
// //  clearInp();
// }



// console.log(price,texes,ads,discount,total,counts,categoryy,submit,title);

function getTotal() {
if(price.value !=''){
    let result=(+price.value + +texes.value + +ads.value) - +discount.value;
    total.innerHTML=result;
    total.style.backgroundColor='green';
}
else
{
    total.innerHTML='';
    total.style.backgroundColor='red';
}
} 


let data=[];
if(localStorage.productsave !=null){
     data= JSON.parse(localStorage.productsave);
     console.log(data);
     

    }
else{
     data=[];
    console.log(data);
 }
submit.onclick= function() {
    let product={
      title:  title.value,
      price: price.value,
      texes: texes.value,
      ads:ads.value,
      discount:discount.value,
      
     categoryy:categoryy.value,
     total:total.innerHTML,
    //    search:search.value,
    }

if(mood==="create"){
        if(product.counts > 1){
            for(let i=0; i<product.counts; i++){
                data.push(product);
            }
        }
    else{
            data.push(product);
          
        }
       
}   else{
        data[tmp]=product;
        mood='create';
        submit.innerHTML='Create';
        counts.style.display='block';
        
     }
    
 localStorage.setItem('productsave', JSON.stringify(data) );

 showdata();
 clearInp();
}

clearInp=function(){
    title.value='';
    price.value='';
    texes.value='';
    ads.value='';
    discount.value='';
    categoryy.value='';
    total.innerHTML='';
    counts.value='';
   
}


function showdata(){
    getTotal();
     let table='';
    for(let i=0; i<data.length;i++ )
    {
    table +=  `
    <tr>
     <td> ${i}</td> 
     <td> ${data[i].title}</td> 
     <td> ${data[i].price} </td>
     <td>${data[i].texes} </td>
     <td>${data[i].ads} </td>
     <td>${data[i].discount}</td>
     <td>${data[i].categoryy}</td> 
     <td>${data[i].total}</td>
    
     <td> <button id="delete" onclick="deleteline(${i})"> delete</button>
     <td> <button  id="update" onclick="updateline(${i})" > update</button>
    </tr>`
    
    }
document.getElementById('tbody').innerHTML=table;
let del=document.getElementById('deleteAll');
if(data.length>0){
 del.innerHTML=`  <button onclick="deleteAll()"> delete All (${data.length}) </button>  `
}
else{
    del.innerHTML='';
}
}



function deleteline(i){
 data.splice(i,1);
 localStorage.product=JSON.stringify(data);
 showdata()
}

function deleteAll() {
localStorage.clear();
data.splice(0);
showdata()
}

function updateline(i){
   title.value=data[i].title;
   price.value=data[i].price;
   texes.value=data[i].texes;
   ads.value=data[i].ads;
   discount.value=data[i].discount;
   categoryy.value=data[i].categoryy;
   
   getTotal();
   counts.style.display='none';
   submit.innerHTML='Update';

   mood='update';
   tmp=i;
   scroll(
    {
        top:0,
        behavior:'smooth'
    }
   )
}


let moood='title';

function SearchMood(id){

let seaarch=document.getElementById('search');
if(id=='searchtitle'){
    moood='title';
     seaarch.placeholder='search by title';
     seaarch.focus();
}
else{
    moood='categoryy';
    seaarch.placeholder='search by category';
    seaarch.focus();
}


}

function Searchhh(value){
    let table='';
if(moood ==='title'){
for(let i=0; i<data.length ; i++){
    if(data[i].title.includes(value)){


        table +=  `
        <tr>
         <td> ${i}</td> 
         <td> ${data[i].title}</td> 
         <td> ${data[i].price} </td>
         <td>${data[i].texes} </td>
         <td>${data[i].ads} </td>
         <td>${data[i].discount}</td>
         <td>${data[i].categoryy}</td> 
         <td>${data[i].total}</td>
      
         <td> <button id="delete" onclick="deleteline(${i})">delete</button>
         <td> <button id="update" onclick="updateline(${i})">update</button>
        </tr>`
        
   } 
}
}
 else{

    for(let i=0; i<data.length ; i++){
        if(data[i].categoryy.includes(value)){
    
    
            table +=  `
            <tr>
             <td> ${i}</td> 
             <td> ${data[i].title}</td> 
             <td> ${data[i].price} </td>
             <td>${data[i].texes} </td>
             <td>${data[i].ads} </td>
             <td>${data[i].discount}</td>
             <td>${data[i].categoryy}</td> 
             <td>${data[i].total}</td>
            
             <td> <button id="delete" onclick="deleteline(${i})">delete</button>
             <td> <button id="update" onclick="updateline(${i})">update</button>
            </tr>`
            
            
    
    
        }
 }
}
document.getElementById('tbody').innerHTML=table;
 }


