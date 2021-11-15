
window.onload=function(){

    fetch('http://localhost:8080',{
        method:'GET',
        Headers:{'Content-Type':'application/json'}
        }
        )
        .then((response)=>response.json()
        .then(data=>{
            if(data.length>0){
                persona=data[0];
                document.getElementsByName('usuario')[0].value=persona.usuario;
                document.getElementsByName('apellido')[0].value=persona.surname;
                document.getElementsByName('contraseña')[0].value=persona.password;
                document.getElementsByName('nombre')[0].value=persona.name;
                document.getElementsByName('emailCompañia')[0].value=persona.company_email;
                document.getElementsByName('emailPersonal')[0].value=persona.personal_email;
                document.getElementsByName('Ciudad')[0].value=persona.city;
                document.getElementsByName('urlImagen')[0].value=persona.imagen_url;
                document.getElementsByName('fechaCreacion')[0].value=persona.created_date;
                document.getElementsByName('activado')[0].checked=persona.active;
                document.getElementsByName('fechaFinalizacion')[0].value=persona.termination_date;
                document.getElementById('id').value=persona.id_persona;
            }
        }));
        document.getElementById('Editar').onclick=editarFormulario;
        document.getElementById('Limpiar').onclick=limpiarFormulario;
}

function editarFormulario(event){
    event.preventDefault();
    const data={
        usuario:document.getElementsByName('usuario')[0].value,
        surname:document.getElementsByName('apellido')[0].value,
        password:document.getElementsByName('contraseña')[0].value,
        name:document.getElementsByName('nombre')[0].value,
        company_email:document.getElementsByName('emailCompañia')[0].value,
        personal_email:document.getElementsByName('emailPersonal')[0].value,
        city:document.getElementsByName('Ciudad')[0].value,
        active:document.getElementsByName('activado')[0].checked=persona.active,
        created_date:document.getElementsByName('fechaCreacion')[0].value,
        imagen_url:document.getElementsByName('urlImagen')[0].value,
        termination_date:document.getElementsByName('fechaFinalizacion')[0].value
    }
    fetch('http://localhost:8080'+"/"+document.getElementById('id').value,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })

}
function limpiarFormulario(event){
    event.preventDefault();
    let formulario=document.getElementById('formulario');
    for(i=0;i<formulario.elements.length;i++){
        let elemento=formulario.elements[i];
        if(elemento.type==='text'|| elemento.type==='password' || elemento.type==='email' || elemento.type==='datetime' ||
         elemento.type==='url'){
            elemento.value="";
        }
        if(elemento.type==='checkbox'){
            elemento.checked=false;
        }
    }
}
