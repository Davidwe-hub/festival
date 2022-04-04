const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  src("src/scss/app.scss") //? Identificar el archivo .SCSS a compilar
    .pipe(sass()) //? Compilar el archivo .SCSS
    .pipe(dest("build/css")); //? Almacenarla en el disco duro

  done();
}

exports.css = css;
