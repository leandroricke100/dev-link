import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaLink, FaGithub } from "react-icons/fa";

export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Leandro Henrique Dev
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg cursor-pointer transitio hover:scale-105 ">
          <a>
            <p className="text-base md:text-lg">Portifolio</p>
          </a>
        </section>

        <section className="bg-white mb-4 w-full py-2 rounded-lg cursor-pointer transitio hover:scale-105 ">
          <a>
            <p className="text-base md:text-lg">GitHub</p>
          </a>
        </section>

        <footer className="flex justify-center gap-3 my-4">
          <Social url="https://www.instagram.com/leandro_ricke/">
            <FaInstagram size={35} color="#fff" />
          </Social>

          <Social url="https://www.facebook.com/profile.php?id=100014023626215">
            <FaFacebook size={35} color="#fff" />
          </Social>

          <Social url="https://leandrohenrique.vercel.app/">
            <FaLink size={35} color="#fff" />
          </Social>

          <Social url="https://github.com/leandroricke100?tab=repositories">
            <FaGithub size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
