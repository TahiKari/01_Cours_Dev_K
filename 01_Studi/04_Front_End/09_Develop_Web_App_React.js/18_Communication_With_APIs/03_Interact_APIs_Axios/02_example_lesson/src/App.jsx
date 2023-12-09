import axios from "axios";
import { useState } from "react";

export default function App() {
  const [post, setPost] = useState();
  const [formContent, setFormContent] = useState("");

  //Cette instance permet notamment d’éviter de réécrire toute l’URL à chaque fois :
  //l’adresse affectée à BaseURL sera insérée préalablement aux URL indiquées ultérieurement
  const myAxiosInstance = axios.create({
      baseURL : "https://jsonplaceholder.typicode.com/posts",
      responseType : "json"
  });

  const handleCreate = () => {
      myAxiosInstance
          .post("", {
              title: "Mon nouveau Post",
              body : formContent
          })
      .then((response) => {
          //Ce log console permet de vérifier que la requête s’est faite correctement
         //(auquel cas le serveur interrogé renvoie une réponse dont le statut est 201 pour une
        //requête Post)
        //Attention : la bonne pratique est de supprimer tous les logs console une fois
        //qu’on a fini de coder l’application
        console.log(response);
        setPost(response.data);
      });
  };

  const handleRead = () => {
      myAxiosInstance
          .get("/" + formContent)
          .then((response) => {
              console.log(response);
              setPost(response.data);
          })
          .catch(function (error) {
              console.log(error);
          });
  };

  const handleUpdate = () => {
      myAxiosInstance
          .put("/1", {
              title: "Mon Post Mis-à-jour",
              body : formContent
          })
      .then((response) => {
          //Ce log console permet de vérifier que la requête s’est faite correctement
         //(auquel cas le serveur interrogé renvoie une réponse dont le statut est 200
        // pour une requête PUT)
        console.log(response);
        setPost(response.data);
      })
      .catch(function (error) {
          console.log(error);
      });
  };

  const handleDelete = () => {
      myAxiosInstance
          .delete("/1")
          .then((response) => {
              console.log(response);
              alert(`Post n°1 deleted!`);
              setPost(null);
          })
          .catch(function (error) {
              console.log(error);
          });
  };

  //Aux deux premiers paragraphes, on utilise un ternary operator… ? … :… pour ne rien afficher
  //si la variable post est vide
  return (
    <div>
        <h3>{post ? post.title : null}</h3>
        <p>{post ? post.body : null}</p>
        <p>-----------------</p>
        <input
            value={formContent}
            type="text"
            placeholder="Texte voulu, ou n° de post .."
            onChange={(e) => setFormContent(e.target.value)}
        />
        <p>
            <button onClick={handleCreate}>Create</button> Crée un nouveau post dont
            le corps de texte correspond à l’input de l’utilisateur, et l’affiche
        </p>
        <p>
            <button onClick={handleRead}>Read</button> Récupère le post dont le1
            numéro correspond à l’input de l’utilisateur, et l’affiche
        </p>
        <p>
            <button onClick={handleUpdate}>Update</button> Remplace le post n°1 avec
            un post dont le corps de texte correspond à l’input de l’utilisateur, et
            l’affiche
        </p>
        <p>
           <button onClick={handleDelete}>Delete</button> Supprime le post n°1
        </p>
    </div>
  );
}