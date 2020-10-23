function introtext(){

    var padre = document.getElementById("textContainer");
    padre.innerHTML="";
    var p1= document.createElement("p");
    var p2= document.createElement("p");
    var p3= document.createElement("p");
    var p4= document.createElement("p");
    p1.innerHTML= "Monjas 2 se basa en la obra de teatro Marquesa Rosalinda de Ramón María del Valle-Inclán. ";
    p2.innerHTML="La marquesa tiene una aventura con el arlequín de un grupo de farsantes que se hospeda en las tierras de su marido. Celoso, el marqués planea contratar unos matones para deshacerse de él. ";
    p3.innerHTML="La marquesa y el arlequín colaborarán para escapar de sus tierras antes de que esto ocurra. ";
    p4.innerHTML="¿Conseguirán escapar? " ;
    padre.appendChild(p1);
    padre.appendChild(p2);
    padre.appendChild(p3);
    padre.appendChild(p4);
}
function historiatext(){

    var padre = document.getElementById("textContainer");
    padre.innerHTML="";
    var p1= document.createElement("p");
    var p2= document.createElement("p");
    var p3= document.createElement("p");
    var p4= document.createElement("p");
    var p5= document.createElement("p");
    var p6= document.createElement("p");
    p1.innerHTML= "Ambientado en el siglo XVIII, un arlequín que viaja en un grupo de farsantes paran en las tierras de un marqués, el cual les ofrece alojamiento temporal a cambio de que hagan interpretaciones en sus tierras. ";
    p2.innerHTML="La marquesa, mujer del marqués, llamada Rosalinda, se enamora del arlequín, y el sentimiento es recíproco. Aquí se desarrolla el primer encuentro entre los dos, primer nivel del juego, en el que el arlequín ayuda a la marquesa a recuperar su zapato perdido en el camino.";
    p3.innerHTML="El marqués se entera de la relación entre su mujer y el farsante, lo que le provoca un ataque de celos y decide deshacerse de él. Cuando ambos protagonistas se enteran, deciden escapar de las tierras del marqués antes de que este lleve a cabo su plan, siendo este el segundo nivel.";
    p4.innerHTML="Debido a un malentendido, arlequín es encarcelado, ya que una dama le acusa de haberle robado sus anillos. En estos momentos y debido a que el marqués no se ha podido deshacer de él, decide encerrar a su mujer en un convento  para evitar así un reencuentro. Sin embargo el arlequín se las apaña para escapar de la cárcel y va directo a rescatar a la marquesa para cumplir su historia de amor. Aquí se da el tercer nivel de nuestro juego." ;
    p5.innerHTML="Sin embargo, la marquesa arrepentida, y con miedo de que algo pueda pasarles a ambos viendo lo lejos que ha llegado su marido, finalmente decide quedarse, y es el arlequín quien finalmente huye en soledad."
    p6.innerHTML="Si hay cinemáticas o grandes fragmentos de texto, puede incluirse una lista completa en una sección aparte, o tener alguna base de datos u hoja de cálculo que luego será utilizado por los traductores y revisores de textos."
    padre.appendChild(p1);
    padre.appendChild(p2);
    padre.appendChild(p3);
    padre.appendChild(p4);
    padre.appendChild(p5);
    padre.appendChild(p6);
}