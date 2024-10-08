import "@/styles/globals.css";
import Login from "./login.jsx";
import Menu from './index.jsx';
import CadastroItens from './cadastro-itens.jsx';
import CadastroUsuarios from './cadastro-usuarios.jsx';
import VisualizarUsuarios from "./vizualizar-usuario.jsx";
import VisualizarEstoques from "./vizualizar-estoques.jsx";
import MovimentarEstoque from "./movimentar-estoque.jsx";
import RecuperaSenha from "./recupera-senha.jsx";
import Relatorio from "./relatorio.jsx";


export default function App({ Component, pageProps }) {
    return <>
        <Component {...pageProps} />
    </>
}


// export default function App({ Component, pageProps }) {
//     return <Menu />;
// }
