import "./HorizontalMenu.css"

function RenderElements(props) {
    if (props.elements === undefined) {return;}
    return (
        <>
            {props.elements.map( (element) => <a href={element.link} key={element.id} className="menuItem">{element.name}</a>)}
        </>
    );
}

export function HorizontalMenu(props) {
    return (
        <nav className="menu">
            <RenderElements elements={props.elements}/>
        </nav>
    );
}