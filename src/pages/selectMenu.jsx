import "./SelectMenu.css"
import ListOfElements from "../componets/ListOfElements";


const itens = [
    {
        id: 0,
        name: "Polarização da Base",
        link: "polarized_base",
        description: "Transistor com polarização da base.",
    },
]


export default function SelectMenu() {
    return(
        <>
            <ListOfElements itens={itens} />
            <main>

            </main>
        </>
    );
}