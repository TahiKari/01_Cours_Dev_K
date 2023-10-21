// Exemple 1
let canvas1 = document.getElementById('canvas1');
    let ctx1 = canvas1.getContext('2d'); // Récupération du contexte Canvas2D
    ctx1.fillStyle = "#FF0000"; // Couleur de remplissage (rouge)
    ctx1.fillRect(50, 50, 100, 75);  // Dessin d'un rectangle de 100x75 aux coordonnées (50,50)   

console.log("-----------------------------------------------")

// Exemple 2
let canvas2 = document.getElementById('canvas2');
    gl = canvas2.getContext('webgl'); // Récupération du contexte Canvas2D

    let vertices = [
        -0.5, 0.5, 0.0,
        -0.5, -0.5, 0.0,
        0.5, -0.5, 0.0
    ];
    let indices = [0, 1, 2];

    // Création de deux buffers de données : un pour les sommets et un pour les indices
    let vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    let indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    // Création du shader des sommets et des fragments, puis du shader général
    let vertCode =
        'attribute vec3 coordinates;' +
        'void main(void) {' +
        ' gl_Position = vec4(coordinates, 1.0);' +
        '}';

    let vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertCode);
    gl.compileShader(vertShader);

    let fragCode =
        'void main(void) {' +
        ' gl_FragColor = vec4(1, 0.0, 0.0, 1);' +
        '}';
    let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragCode);
    gl.compileShader(fragShader);

    let shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);
    gl.attachShader(shaderProgram, fragShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    let coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);

    // Dessin sur le canvas
    gl.clearColor(1, 1, 1, 1);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, canvas2.width, canvas2.height);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

console.log("-----------------------------------------------")

// Exemple 
/*

*/

console.log("-----------------------------------------------")

// Exemple 
/*

*/

console.log("-----------------------------------------------")

// Exemple 
/*

*/

console.log("-----------------------------------------------")