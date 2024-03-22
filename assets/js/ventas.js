const propiedades_venta = [
    {        
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {       
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {    
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica convistas espectaculares',
    ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {    
    nombre: 'Departamento en zona urbana',
    src: 'https://images.unsplash.com/photo-1586381084141-6ab5237379bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Este departamento se encuentra en la zona norponiente de la capital',
    ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 2,
    baños: 1,
    costo: 2500,
    smoke: true,
    pets: false
    }
    ]
    var limiteDptos = 0
    const dptoVentas = document.querySelector("#dptosVentas")
    var checkHtml = document.querySelector("body")  
    if (checkHtml.id === "index"){
        limiteDptos=3;
    } else{
        limiteDptos = propiedades_venta.length;
    }

    for (let i=0; i < limiteDptos ; ++i) { 

    const venta = propiedades_venta[i];
    
    var ventaFuma = venta.smoke
        if (ventaFuma == true){
            var condicionFuma =`<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
            } else {
                var condicionFuma =`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;    
            } 
    var ventaMascotas = venta.pets          
        if (ventaMascotas == true){
            var condicionMascotas =`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
            } else {
                var condicionMascotas =`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
            } 
    let template = `
        <div class="col-md-4 mb-4">
        <div class = card>
        <img src = "${venta.src}"class="card-img-top" alt="Imagen del departamento">
        <div class="card-body">
        <h5 class="card-title">${venta.nombre}</h5>
        <p class="card-text">${venta.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones. | <i class="fas fa-bath"></i> ${venta.baños} baños.</p>
        <div><i class="fas fa-dollar-sign"></i> ${venta.costo}</div><p></p>
        <div>${condicionFuma}</div>
        <div>${condicionMascotas}</div>
        </div>
        </div>` 
        ;
    dptoVentas.innerHTML += template;
    }




