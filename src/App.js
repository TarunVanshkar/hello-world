import Header from "./Components/Header";
import Button from "./Components/Button";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <Header />

            <Button btnText="Apple" color="red" />

            <Button btnText="Mango" color="yellow" />

            {/* Button with props and children ie p tag */}
            <Button btnText="Banana" color="green">
                <p>lorem ipsum dolor sit amet</p>
                <p>lorem ipsum dolor sit amet</p>
            </Button>

            <Footer />
        </div>
    )
}

export default App;


// function Hello1(){
//     return (
//         <div>
//             <h1>Hello Guys, how are you 1</h1>
//             <p>lorem ipsum dolor sit amet 1</p>
//        </div>

//     )
// }


// function xyz(){

// }

// abc = xyz 

// xyz() 
// abc()


// <>