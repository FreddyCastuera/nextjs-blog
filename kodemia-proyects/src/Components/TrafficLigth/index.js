export default function TrafficLight(props){
    const {color} = props;
    return (
    <div className="carcasa">
        <div className={"foco "+ color}>
        </div>
    </div>  
    );
}