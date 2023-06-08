import "./App.css";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <div id="menu">
        <h4><i>Dev</i>challenges.io</h4>
        <li>Color</li>
        <li>Typograpy</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li>Inputs</li>
        <li>Grid</li>
      </div>
      <div id="buttonDiv">
        <h2>Button</h2>
        <div id="buttons">
          <div>
            <p>&lt;Button /&gt;</p>
            <Button txtColor="black" bgColor="rgb(152, 157, 157)" borderColor="grey">
              Default
            </Button>
          </div>
          <div>
            <p>&:hover, &focus</p>
            <Button txtColor="black" bgColor="grey" borderColor="grey">
              Default
            </Button>
          </div>
          <div>
            <p>&lt;Button variant="outline" /&gt;</p>
            <Button
              txtColor="blue"
              bgColor="white"
              borderColor="1px solid blue"
            >
              Default
            </Button>
          </div>
          <div>
            <p>&:hover, &focus</p>
            <Button
              txtColor="blue"
              bgColor="rgb(200, 224, 245)"
              borderColor="1px solid blue"
            >
              Default
            </Button>
          </div>
          <div id="c1">
            <p>&lt;Button variant="text" /&gt;</p>
            <Button txtColor="blue" bgColor="white" borderColor="transparent">
              Default
            </Button>
          </div>
          <div>
            <p>&:hover, &focus</p>
            <Button
              txtColor="blue"
              bgColor="rgb(200, 224, 245)"
              borderColor="transparent"
            >
              Default
            </Button>
          </div>
          <div>
            <p>&lt;Button disableShadow /&gt;</p>
            <Button txtColor="white" bgColor="blue" borderColor="blue">
              Default
            </Button>
          </div>
        </div>
        <div id="buttons2">
          <div>
            <p>&lt;Button disable /&gt;</p>
            <Button txtColor="grey" bgColor="rgb(152, 157, 157)" borderColor="rgb(152, 157, 157)">Defult</Button>
          </div>
          <div>
            <p>&lt;Button variant="text" disable /&gt;</p>
            <Button txtColor="rgb(152, 157, 157)" bgColor="white" borderColor="transparent">Defult</Button>
          </div>
          <div>
            <p>&lt;Button startIcon="local_grocery_store" /&gt;</p>
            <Button txtColor="white" bgColor="blue" borderColor="blue" btnWidth="100px">Defult</Button>
          </div>
          <div>
          <p>&lt;Button startIcon="local_grocery_store" /&gt;</p>
            <Button txtColor="white" bgColor="blue" borderColor="blue"  btnWidth="100px">Defult</Button>
          </div>
        </div>
        <div id="buttons3">
          <div>
            <p>&lt;Button size="sm" /&gt;</p>
            <Button txtColor="white" bgColor="blue" borderColor="blue" btnWidth="60px">Defult</Button>
          </div>
          <div>
            <p>&lt;Button size="md" /&gt;</p>
            <Button txtColor="white" bgColor="blue" borderColor="blue" btnWidth=" 80px">Defult</Button>
          </div>
          <div>
            <p>&lt;Button size="lg" /&gt;</p>
            <Button txtColor="white" bgColor="blue" borderColor="blue" btnWidth="100px">Defult</Button>
          </div>
        </div>
        <div id="buttons4">
          <div>
          <p>&lt;Button color="default" /&gt;</p>
            <Button txtColor="black" bgColor="rgb(152, 157, 157)" borderColor="grey" btnWidth="80px">Defult</Button>
          </div>
          <div>
          <p>&lt;Button color="primary" /&gt;</p>
            <Button txtColor="white" bgColor="blue" borderColor="blue" btnWidth="80px">Defult</Button>
          </div>
          <div>
          <p>&lt;Button color="secondary" /&gt;</p>
            <Button txtColor="white" bgColor="rgb(78, 78, 78)" borderColor="rgb(78, 78, 78)" btnWidth="100px">Secondary</Button>
          </div>
          <div>
          <p>&lt;Button color="danger" /&gt;</p>
            <Button txtColor="white" bgColor="rgb(228, 128, 128)" borderColor="rgb(228, 128, 128)" btnWidth="80px">Danger</Button>
          </div>
          <div>
          <p>&:hover, &focus</p>
            <Button txtColor="black" bgColor="grey" borderColor="grey" btnWidth="80px">Defult</Button>
          </div>
          <div>
          <p>&:hover, &focus</p>
            <Button txtColor="white" bgColor="rgb(17, 17, 122)" borderColor="rgb(17, 17, 122)" btnWidth="80px">Defult</Button>
          </div>
          <div>
          <p>&:hover, &focus</p>
            <Button txtColor="white" bgColor="rgb(57, 55, 55)" borderColor="rgb(57, 55, 55)" btnWidth="100px">Defult</Button>
          </div>
          <div>
          <p>&:hover, &focus</p>
            <Button txtColor="white" borderColor="rgb(228, 128, 128)" btnWidth="80px">Danger</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
