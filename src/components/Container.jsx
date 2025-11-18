function Container(props) {
    console.log("props de container", props);
    return (
        <div>
            {props.saludo}
        </div>
    );
}
export default Container;   
