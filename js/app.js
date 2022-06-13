let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://62a78a1997b6156bff9011c7.mockapi.io/pweb/:posts');
xhr.send();

xhr.onload = function(){
    if(xhr.status != 200){
        alert(`Houve um erro: ${xhr.status}: ${xhr.statusText}: `)
    }else{
        alert(`Feito. Total ${xhr.response.length} bytes`);
    }
};

// xhr.onprogress = function(event){
//     if(event.lengthComputable){
//         alert(`Received ${event.loaded} of ${event.total} bytes`);
//     }else{
//         alert(`Received ${event.loaded} bytes`);
//     }
// };

xhr.onerror = function(){
    alert("Request failed");
}