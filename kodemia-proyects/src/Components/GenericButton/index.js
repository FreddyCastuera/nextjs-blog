import "../../App.css";
export default function GenericButton(props){
    const {color,handleButton} = props;
    return (
        <button className={"boton-"+ color} onClick={handleButton} name={color} >adelante</button>
    );
}
