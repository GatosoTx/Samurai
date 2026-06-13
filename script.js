//lo admito esto fue con IA pero pero al menos ya me quedo la informacion de como se hace

const canciones = {
  "Never Fade Away": [
    "A diferencia de otras canciones de Samurai, Never Fade Away posee un tono más emocional y reflexivo. Su mensaje principal gira en torno a la memoria, el amor, la pérdida y el deseo de dejar una huella imborrable en el mundo.",
    "La canción transmite la idea de que las personas pueden desaparecer físicamente, pero sus acciones, sus recuerdos y los sentimientos que dejan en los demás permanecen para siempre. Es una reflexión sobre cómo el tiempo puede borrar muchas cosas, pero nunca aquello que realmente ha marcado nuestras vidas.",
    "Para Johnny Silverhand, esta canción representa la importancia de luchar por algo que trascienda la propia existencia. No se trata únicamente de ser recordado, sino de inspirar a otros incluso después de haber desaparecido.",
    "Dentro de la historia de Cyberpunk, Never Fade Away está profundamente relacionada con temas como el sacrificio, la identidad y la permanencia del legado humano frente al paso del tiempo y la tecnología."
  ],
  "A Like Supreme": [
    "A Like Supreme es una de las canciones más enérgicas y explosivas de Samurai. Su significado está relacionado con la búsqueda de identidad, la autosuperación y la necesidad de desafiar las expectativas impuestas por la sociedad.",
    "La canción anima a las personas a tomar el control de sus vidas y a no permitir que otros definan quiénes son o qué pueden llegar a ser. En un mundo donde las corporaciones intentan controlar todos los aspectos de la existencia humana, este mensaje adquiere una enorme relevancia.",
    "La letra transmite una sensación de fuerza, confianza y determinación. Es una invitación a romper las cadenas que limitan el crecimiento personal y a perseguir los propios sueños sin miedo al fracaso.",
    "Por esta razón, A Like Supreme se convirtió en una de las canciones favoritas de los seguidores más jóvenes de Samurai, quienes encontraban en ella una fuente de inspiración para desafiar las normas establecidas."
  ],
  "Chippin In": [
    "Chippin' In es considerada la canción más representativa de Samurai y una de las piezas musicales más importantes del universo Cyberpunk. Desde su lanzamiento, se convirtió en un símbolo de resistencia y desafío frente a las estructuras de poder que dominaban la sociedad.",
    "La canción refleja la filosofía de Johnny Silverhand: no aceptar la opresión, cuestionar la autoridad y luchar por la libertad individual. Su energía agresiva y su tono desafiante transmiten la idea de que cada persona tiene el derecho de decidir su propio destino, incluso cuando el sistema parece invencible.",
    "Más allá de la crítica a las corporaciones, Chippin' In también habla sobre la determinación de mantenerse fiel a los propios ideales sin importar las consecuencias. Es una canción que inspira valentía, rebeldía y la voluntad de enfrentarse a cualquier obstáculo.",
    "Para muchos habitantes de Night City, este tema se convirtió en un auténtico himno revolucionario que representaba la lucha contra un mundo cada vez más controlado por intereses corporativos."
  ],
  "Black Dog": [
    "Black Dog es una de las canciones más sombrías de Samurai. Su significado está relacionado con los conflictos internos, el sufrimiento emocional y las consecuencias de vivir en un entorno tan hostil como Night City.",
    "La canción explora sentimientos como la soledad, la desesperación y la lucha constante contra los propios miedos. El perro negro puede interpretarse como una metáfora de los demonios personales que persiguen a las personas durante toda su vida.",
    "A través de una instrumentación intensa y una atmósfera oscura, Samurai retrata la realidad de quienes intentan sobrevivir en una ciudad donde la violencia, la corrupción y la desigualdad forman parte de la vida cotidiana.",
    "Sin embargo, la canción no solo habla de sufrimiento. También transmite la idea de seguir adelante a pesar de las dificultades, enfrentando los problemas en lugar de dejarse consumir por ellos."
  ],
  "Archangel": [
    "La canción explora las consecuencias de la fama, la ambición y el deseo de alcanzar el éxito. A medida que una persona asciende dentro de la sociedad, debe enfrentarse a decisiones difíciles y sacrificios que pueden cambiar su vida para siempre.",
    "El tema también aborda la lucha entre mantenerse fiel a los propios valores o ceder ante las presiones externas. En una ciudad donde el dinero y la influencia parecen determinar el destino de las personas, esta reflexión resulta especialmente relevante."
  ],
    "The Ballad of Buck Ravers": [
    "Esta canción representa uno de los ataques más directos de Samurai contra las megacorporaciones. A través de una letra cargada de sarcasmo y crítica social, la banda denuncia los abusos de poder, la manipulación y la corrupción que dominan la vida en Night City.",
    "El tema refleja la frustración de una población que ve cómo las corporaciones controlan la economía, la política y prácticamente todos los aspectos de la sociedad. Para Johnny Silverhand, estas organizaciones eran responsables de gran parte de las injusticias que sufrían los ciudadanos comunes.",
    "La canción también pone de manifiesto la diferencia entre quienes poseen el poder y quienes deben luchar diariamente para sobrevivir. Este contraste es uno de los temas centrales de la obra de Samurai y aparece constantemente en sus letras.",
    "Gracias a su mensaje contundente, The Ballad of Buck Ravers se convirtió en uno de los temas más representativos de la postura política e ideológica de la banda."
  ]
};

// Busca todas las tarjetas en el HTML
const tarjetas = document.querySelectorAll('.tarjeta');

// Recorre cada tarjeta y le agrega un evento de clic
tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {

    // Obtiene el nombre de la canción del <h3> de la tarjeta clickeada
    const nombre = tarjeta.querySelector('h2').textContent;

    // Busca el array de párrafos usando el nombre de la canción
    const parrafos = canciones[nombre];

    // Muestra el nombre en el título de la explicación
    document.getElementById('explicacion-titulo').textContent = nombre;

    // Convierte cada elemento del array en un <p> y lo muestra en la explicación
    document.getElementById('explicacion-texto').innerHTML =
      parrafos.map(p => `<p>${p}</p>`).join('');
  });
});