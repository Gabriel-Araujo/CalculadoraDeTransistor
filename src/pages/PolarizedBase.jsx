import {HorizontalMenu} from "../componets/HorizontalMenu";

const itens = [
    {
        id: 0,
        name: "Polarização da Base",
        link: "polarized_base",
        description: "Transistor com polarização da base.",
    },
    {
        id: 1,
        name: "Element 1",
        link: "#",
        description: "nothing",
    },
    {
        id: 2,
        name: "Element 2",
        link: "#",
        description: "nothing",
    },
    {
        id: 3,
        name: "Element 3",
        link: "#",
        description: "nothing",
    }
]

export default function PolarizedBase() {
    return (
        <HorizontalMenu elements={itens} />
    );
}