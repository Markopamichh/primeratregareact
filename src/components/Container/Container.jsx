import './Container.css';

function Container(props) {
    console.log("props de container", props);
    return (
        <div className="container">
            {props.saludo}
        </div>
    );
}
export default Container;
