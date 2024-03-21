const propiedades_renta = [
    {    
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true
    },
    {    
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true
    },
    {    
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {    
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false
    }
    ]
    var limiteDptos = 0
    const dptoRentas = document.querySelector("#dptosRentas")
    var checkHtml = document.querySelector("body")  
    if (checkHtml.id === "index"){
        limiteDptos=3;
    } else{
        limiteDptos = propiedades_renta.length;
    }

    for (let i=0; i < limiteDptos ; ++i) { 

    const renta = propiedades_renta[i]; 
    
    var rentaFuma = renta.smoke
        if (rentaFuma == true){
            var condicionFuma =`<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
            } else {
                var condicionFuma =`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;    
            } 
    var rentaMascotas = renta.pets          
        if (rentaMascotas == true){
            var condicionMascotas =`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
            } else {
                var condicionMascotas =`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
            } 
        let template = `
        <div class="col-md-4 mb-4">
        <div class = card>
        <img src = "${renta.src}"class="card-img-top" alt="Imagen del departamento">
        <div class="card-body">
        <h5 class="card-title">${renta.nombre}</h5>
        <p class="card-text">${renta.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${renta.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${renta.habitaciones} habitaciones. | <i class="fas fa-bath"></i> ${renta.baños} baños.</p>
        <div><i class="fas fa-dollar-sign"></i> ${renta.costo}</div><p></p>
        <div>${condicionFuma}</div>
        <div>${condicionMascotas}</div>
        </div>
        </div>` 
        ;
        dptoRentas.innerHTML += template;
        }    