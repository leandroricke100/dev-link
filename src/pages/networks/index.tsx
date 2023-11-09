import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { useState, FormEvent, useEffect } from "react";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setLinkedin(snapshot.data()?.linkedin);
        }
      });
    }

    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
    })
      .then(() => {
        console.log("cadastrado com sucesso");
      })
      .catch((error) => {
        console.log("Falha ao cadastrar " + error);
      });
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do facebook
        </label>
        <Input
          placeholder="Digite a url do facebook..."
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do instagram
        </label>
        <Input
          placeholder="Digite a url do instagram..."
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do linkedin
        </label>
        <Input
          placeholder="Digite a url do linkedin..."
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <button
          type="submit"
          className="flex text-white bg-blue-600 h-9 rounded-md items-center justify-center mb-7 font-medium"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
}
