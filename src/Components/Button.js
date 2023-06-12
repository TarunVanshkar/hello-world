

const Button = ({btnText, color, children}) => {
    // console.log(props, typeof props);
    // props = {btnText:"Apple", color:"red"};
    // props.btnText = "Fruit";
    // let btnStyle = {backgroundColor:"black", color:"white"};

    return(
        <div>
            {children}
            <button className="btn" style={{backgroundColor: color}}>
                {btnText}
            </button>
        </div>
    )
}


export default Button;

// // <div>
//              {/* <p> {a} </p>
//              <p>  {6+3+5} </p> */}
//              <button className="btn">
//                    {props.btnText}
//              </button>
//              <p> {props.paraText}</p>
//         </div>