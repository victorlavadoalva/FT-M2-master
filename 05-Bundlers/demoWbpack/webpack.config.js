//webpack.config.js

module.exports = {
    entry: "./main.js", // el punto de arranque del programa
    output: {
        path: __dirname + "/browser", // el path absoluto
        //el directorio donde queremos el output sea colocado
        filename: "bundle.js", // el nombre del archivo que va contener
        //nuestro output - podemos nombrarlo como queramos

    },
};