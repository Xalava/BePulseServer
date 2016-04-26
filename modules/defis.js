var fs = require("fs");
var file = "db/defis.db";

exports.initDefis = function(){

  // si la base existe on la supprime
  if(fs.existsSync(file)){
    fs.unlink(file);
  }

  var sqlite3 = require("sqlite3").verbose();

  // création de la base
  var db = new sqlite3.Database(file);

  db.serialize(function() {
    // crétion de la table défis
    db.run("CREATE TABLE defis (id_defis INT, resume TEXT, description TEXT, picture TEXT, recompense TEXT, date_limite, PRIMARY KEY(id_defis ASC))");

    // initialisation des premiers défis
    db.run("INSERT INTO defis VALUES (?,?,?,?,?,?)",
        1,
        "Cook & Win : Cuisinez avec un légume de saison et gagnez un panier",
        "<p>Cusinez une recette originale avec un légume de saison, postez une photo de vous avec le résultat ! </p><p>Un des cuisiniers sera tiré au sort et gagnera un panier de saison !</p>",
        "images/examples/panier.jpg",
        "Un panier de légumes de saison",
        "Jusqu'au 18 avril");

    db.run("INSERT INTO defis VALUES (?,?,?,?,?,?)",
        2,
        "Faire un trajet en velo'v",
        "<p>Parcourez plus de 10km en velov</p>",
        "images/examples/velov.jpg",
        "Un an d'abonnement velo'v !",
        "Jusqu'au 2 mai");
    });
}

exports.getListeDefis = function(){

  // si la base n'existe pas on la crée
  if(!fs.existsSync(file)){
    exports.initDefis();
  }

  var sqlite3 = require("sqlite3").verbose();
  var db = new sqlite3.Database(file);

  var liste = [];
  db.serialize(function() {
    db.each("SELECT * FROM defis", function(err, row) {
      liste.push(row);
    });
  });
  db.close();
  return liste;
}
