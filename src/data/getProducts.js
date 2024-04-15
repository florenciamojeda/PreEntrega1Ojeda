const products = [
    {
      id: "hola",
      name: "PRO PLAN",
      description: "Alimento Pro Plan para Perro Adulto Mediano - 15 Kg.",
      fullDescription: "Purina Pro Plan provee nutrición de avanzada que ayuda a los perros de razas medianas a mantenerse fuertes y llenos de vitalidad. A su vez, también ayuda a otras cosas claves en el cuidado de la mascota, tales como reforzar el sistema inmune, fortalecer la microflora intestinal y reforzar la barrera cutánea. Esta fórmula ofrece, a través de sus sabrosas croquetas, un contenido rico en proteínas (26%) y grasas (15%), utilizando como ingrediente principal carne fresca de pollo, que ayuda a los perros a mantener la masa corporal magra y músculos fuertes.",
      stock: 7,
      category: "alimentos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/179948-150-150/7613287119575_1.png?v=637570861797600000",
      price: 47000
    }, 
    {
      id: "HGfxc1234345",
      name: "EUKANUBA",
      description: "Alimento Eukanuba Para Perro Adulto Raza Mediana - 15 Kg.",
      fullDescription: "El Alimento Eukanuba Adulto Medium Breed es un alimento balanceado completo para perros adultos mayores a 12 meses de edad y de razas medianas como Bulldog Francés, Beagle, Bretón, Cocker, Boxer, Schnauzer Standard y otras razas o perros mestizos que pesan entre 10 y 25 kg. Las fórmulas para adulto de EUKANUBA aseguran un nivel de glucosa en sangre adecuado y sostenido en el tiempo, y una digestión más prolongada gracias al balance especial entre diferentes tipos de granos.",
      stock: 5,
      category: "alimentos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/194532-1000-1000/138004-138005.png?v=638290074090470000",
      price: 42000
    },
    {
      id: "Gcs2122",
      name: "ROYAL CANIN",
      description: "Alimento Royal Canin Medium Adulto - 15 Kg.",
      fullDescription: "Royal Canin Medium Adult es un alimento para perros adultos de razas medianas (11 a 25 Kg) desde los 12 meses hasta los 7 años. Con palatabilidad reforzada mediante aromas naturales seleccionados, tamaño, forma y textura de la croqueta adaptados. Asegura una óptima digestibilidad gracias a las proteínas de alta calidad y al aporte equilibrado de fibras alimentarias. Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.",
      stock: 9,
      category: "alimentos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/195264-1000-1000/156154-156157.png?v=638348291143430000",
      price: 48500
    },
    {
      id: "Hcvty1212",
      name: "DOG CHOW",
      description: "Alimento Dog Chow Sin Colorantes Para Perro Adulto Mediano Grande - 21 Kg.",
      fullDescription: "El Alimento Dog Chow Sin Colorantes Perro Adulto Mediano y Grande, está hecho con una mezcla especial libre de colorantes, con antioxidantes, vitaminas y minerales que ayuda a maximizar la calidad de vida de tu perro, día tras día.",
      stock: 14,
      category: "alimentos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/195420-1000-1000/138118.jpg?v=638361743443200000",
      price: 35000
    },
    {
      id: "Ytre12312",
      name: "COLLAR CLUB BLUE",
      description: "Collar Club - CF15/35.",
      fullDescription: "Es un collar para perros hecho de resistente nylon, equipado con un útil mosquetón con un sistema que evita los enredos durante los paseos. Club incluye productos para todos los perros; hay diferentes tallas y diferentes colores",
      stock: 3,
      category: "accesorios",
      image: "https://puppis.vteximg.com.br/arquivos/ids/162110-1000-1000/Collar-Club-Azul-CF15-35.jpg?v=636480716757200000",
      price: 3900
    },
    {
      id: "Klom1222",
      name: "PRETAL ARNES PERRO",
      description: "Arnes Rascals Acolchado Negro",
      fullDescription: "El Arnes Rascals Acolchado, está confeccionado con materiales de primera calidad, aportando tanto comodidad como seguridad en los paseos con tu perro. Además, son lavables y resistentes.",
      stock: 2,
      category: "accesorios",
      image: "https://puppis.vteximg.com.br/arquivos/ids/180448-600-600/237590.jpg?v=637590641612200000",
      price: 9800
    },
    {
      id: "Vfrt1222",
      name: "CORREA FERPLAST",
      description: "Correa Ferplast Evolution GA Violeta - 16/200.",
      fullDescription: "La Correa Ferplast Evolution GA es ideal para aquellos dueños de mascotas que buscan un producto resistente y duradero, pero que también les ofrezca una comodidad óptima durante el paseo. Está fabricada en poliéster con un revestimiento de PVC, lo que la hace suave y elástica al mismo tiempo. Además, es un material no tóxico e hipoalergénico, lo que garantiza la salud de tu mascota.",
      stock: 5,
      category: "accesorios",
      image: "https://puppis.vteximg.com.br/arquivos/ids/192498-1000-1000/248235.jpg?v=638198387356530000",
      price: 16800
    },
    {
      id: "Qwx12333",
      name: "CORREA EXTENSIBLE FERPLAST",
      description: "Correa Extensible Ferplast Flippy Tech Negra.",
      fullDescription: "La Correa Extensible Ferplast Flippy, es el accesorio ideal para hacer de los paseos con tu perro, los mejores. Su botón ergonómico garantiza comandos precisos y máximo confort. El mecanismo interno, que ha sido re-diseñado, asegura gran resistencia a la tracción, seguridad y durabilidad con el paso del tiempo. Sus sistema, te da la posibilidad de bloquear la cuerda en la distancia que tu prefieras, lo que asegura un gran control.",
      stock: 3,
      category: "accesorios",
      image: "https://puppis.vteximg.com.br/arquivos/ids/168070-1000-1000/249950.jpg?v=637051066694970000",
      price: 24300
    },
    
    {
      id: "Qwx12258",
      name: "BANDANA",
      description: "Bandana Hund Chita.",
      fullDescription: "¡Con la Bandana Hund Chita tu mascota se verá con un estilo increíble! Esta confeccionada en un textil super suave y muy fácil de colocar. Al tratarse de un tipo de fibra sintética está hecha de una manera para que tenga un ciclo de vida largo, resistente a muchos lavados y no se deforma con el uso.",
      stock: 11,
      category: "abrigos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/190428-600-600/224567-224568-224569--1-.jpg?v=638032935007030000",
      price: 4300
    },
    {
      id: "Qwx12398",
      name: "CHALECO",
      description: "Chaleco Reflectivo AFP",
      fullDescription: "Este Chaleco Reflectivo de AFP tiene color fluorescente y un material reflectante, perfecto para paseos nocturnos. Se coloca muy fácilmente con un cierre de velcro y se adapta perfectamente a tu mascota por lo que se sentirá muy cómodo. Los chalecos están fabricados con materiales de primera calidad por lo que te asegura una larga vida útil.",
      stock: 3,
      category: "abrigos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/194400-1000-1000/212041-2.jpg?v=638283632745670000",
      price: 12300
    },

    {
      id: "Qwx1248",
      name: "BUZO",
      description: "Buzo Hund Best Dog Mom Ever",
      fullDescription: "El Buzo Hund Best Dog Mom Ever es una prenda especialmente diseñada para los amantes de los animales que buscan comodidad y estilo en una sola pieza. Confeccionado en frisa de la más alta calidad premium, ofrece una experiencia de uso excepcional que combina suavidad y durabilidad.",
      stock: 1,
      category: "abrigos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/194094-600-600/224607-224608.jpg?v=638261595375930000",
      price: 37300
    },

    {
      id: "Qwx1278",
      name: "CAMPERA",
      description: "Campera Kika Dog Metalizada Verde Botella",
      fullDescription: "La Campera Kika Dog Metalizada Verde Botella es ideal para que tu mascota permanezca calentita este invierno. Está fabricada con tela matelasse de alta calidad, lo que la convierte en una opción suave y abrigada para tu perro.",
      stock: 1,
      category: "abrigos",
      image: "https://puppis.vteximg.com.br/arquivos/ids/186591-1000-1000/229293.jpg?v=637877088167670000",
      price: 21500
    },

    {
    id: "Qwx11254",
    name: "PELUQUERIA",
    description: "Baño hipoalargenico y corte de pelo ",
    fullDescription: "El servicio de peluquería canina incluye diferentes servicios que serán de gran utilidad para el cuidado de nuestros peludos. Por este motivo, en este post te mostramos todos los servicios que se incluyen dentro de la peluquería canina y todo lo que debes saber sobre este tema. Si estás planteándote llevar a tu perro a la peluquería",
    stock: 0,
    category: "servicios",
    image: "https://www.clinicaveterinariamh.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/08/45.jpg.webp",
    price: 25000
  },

  {
    id: "Qwx1125",
    name: "LIMPIEZA BUCAL",
    description: " Limpieza dental y sarro",
    fullDescription: "Si detectas que tu gato o perro tiene halitosis, le huele el aliento, es una señal de que necesita una limpieza dental. La acumulación del sarro hace que se produzca este problema bucal en nuestros animales. Por eso, es muy importante realizar una limpieza dental a tiempo.",
    stock: 0,
    category: "servicios",
    image: "https://www.clinicaveterinariamh.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/03/checking-teeth-of-dog-HNA5SFZ-1.jpg.webp",
    price: 25000
  },

  {
    id: "Qwx11258",
    name: "IDENTIFICACION",
    description: "Chip de rastreo",
    fullDescription: "Este reconocimiento se realiza implantando un microchip al animal de manera subcutánea (entre la piel y el músculo). Este microchip está cubierto por una cápsula compuesta de un vidrio suave y biocompatible, que no provoca alergias de ningún tipo y es tan pequeña como un grano de arroz, El número del microchip siempre va asociado con los datos de la mascota y el de su propietario y se almacena en una base de datos propiedad de la Comunidad de Madrid y localizada en el Colegio de Veterinarios",
    stock: 0,
    category: "servicios",
    image: "https://veterinariaaguara.com/wp-content/uploads/2021/01/4.png",
    price: 65000
  },
  {
    id: "Qwx11257",
    name: "ADOPCIONES",
    description: "Conectando Humanos con Mascotas",
    fullDescription: "En Almendra conectamos humanos con su mascota. Sabemos la importancia de que no haya ningún animal sin familia y por eso apoyamos y ayudamos a rescatistas y fundaciones todoslos días para lograrlo. Si estás pensando sumar un amigo peludo tenés que saber el compromiso que esto implica.No sólo será tu compañía sino un integrante más de la familia. Por lo que te recomendamosplanifiques bien su llegada, asegúrate que todos estén de acuerdo y que en tu edificio o casa se permitan mascotas. Tené en cuenta los gastos mensuales relacionados, cuidados generales que necesitará para que se encuentre saludable y cómodo y con quién dejarlo en caso de salir de vacaciones.",
    stock: 0,
    category: "servicios",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kQcOFWEco_r2ENCxbTI8Wot4fwyBtbxSIz--vVqFZQ&s",
    price: 0
  },

  ]
  //obtener productos
  const getProducts = new Promise((resolve, reject) => {
    //simulamos un retraso de red con setTimeout
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
  
  export default getProducts