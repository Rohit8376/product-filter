import React, { Component } from "react";
import { Checkbox, Slider  } from "antd";
import axios from 'axios'
import "antd/dist/antd.css";
import { Container } from "react-bootstrap";
import "./App.css";
import "antd/dist/antd.css";


export default class display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      color: [],
      Size: [],
      price: 30000000000,
      EMI: 15000000000,
    };
    this.wrapper = React.createRef();
  }


  ColorChange = (e) => {
    if (e.target.checked) {
      const val = this.state.color;
      val.push(e.target.name);
      this.setState({ color: val });
    
    } else {
      const val = this.state.color;
      var index = val.indexOf(e.target.name);
      val.splice(index, 1);
      this.setState({ color: val });
    }
      this.componentDidMount()
  };

  SizeChange = (e) => {
    if (e.target.checked) {
      const val = this.state.Size;
      val.push(e.target.name);
      this.setState({ Size: val });
     
    } else {
      const val = this.state.Size;
      var index = val.indexOf(e.target.name);
      val.splice(index, 1);
      this.setState({ Size: val });
    }
      this.componentDidMount()
  };

  async componentDidMount() {

      const jsn = encodeURIComponent(JSON.stringify(this.state))
      const res = await axios.get("http://localhost:2000/getdata/"+jsn);
      this.setState({data:res.data})
      console.log(this.state.data)
  }
  
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: 50 }}>
        
        <h3>color</h3>

        <Checkbox
          name="Red"
          onChange={(e) => {
            this.ColorChange(e);
          }}
        >
          Red
        </Checkbox>

        <Checkbox
          name="Blue"
          onChange={(e) => {
            this.ColorChange(e);
          }}
        >
          Blue
        </Checkbox>

        <Checkbox
          name="Green"
          onChange={(e) => {
            this.ColorChange(e);
          }}
        >
          Green
        </Checkbox>

        {/* ------------------------------------------------ */}
        <h3>Size of card</h3>

        <Checkbox
          name="S"
          onChange={(e) => {
            this.SizeChange(e);
          }}
        >
          S
        </Checkbox>

        <Checkbox
          name="M"
          onChange={(e) => {
            this.SizeChange(e);
          }}
        >
          M
        </Checkbox>

        <Checkbox
          name="L"
          onChange={(e) => {
            this.SizeChange(e);
          }}
        >
          L
        </Checkbox>

        <Checkbox
          name="XL"
          onChange={(e) => {
            this.SizeChange(e);
          }}
        >
          XL
        </Checkbox>

        <Checkbox
          name="XXL"
          onChange={(e) => {
            this.SizeChange(e);
          }}
        >
          XLL
        </Checkbox>
        {/* ----------------------------------------------------------- */}

        <div style={{width:"250px"}}>
        <h3>Price</h3>
        <Slider
          ref={this.wrapper}
          min={0}
          max={2000000}
          onChange={(value) => {
            this.setState({ price: value });
            this.componentDidMount();
          }}
        />

        <h3>EMI</h3>
        <Slider
          ref={this.wrapper}
          min={0}
          max={200000}
          onChange={(value) => {
            this.setState({ EMI: value });
            this.componentDidMount();
          }}
        />
        
    </div>

          <div className="row1" style={{ clear: "left", padding: "40px" }}>
            <h5>{this.state.data.length < 1 ? "No Record found" : ""}</h5>

            {this.state.data.map((val, index) => (
              <div className="column1" key={index}>
                <div className="card1">
                  
                  <img
                    src={"http://localhost:2000/"+val.img}
                    alt=""
                    style={{ width: "90%", height:"200px"}}

                  /><br />

                  <p>
                    <b>Color: {val.color}</b>
                  </p>
                  <p>
                    <b>Size: {val.Size}</b>
                  </p>
                  <p>
                    <b>Price: ${val.price}</b>
                  </p>
                  <p>
                    <b>Emi: ${val.EMI}</b>
                  </p>
                </div>
                <br />
              </div>
            ))}
          </div>
        </Container>
      </>
    );
  }
}
