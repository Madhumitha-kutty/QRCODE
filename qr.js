document.querySelector("#button").onclick=()=>{
    const input=document.querySelector("#input").value;
    const a=document.querySelector("img");
    a.src=`https://quickchart.io/qr?text=${input}`;
    a.alt="Image";
    console.log(input);
    a.style.display="block";
}