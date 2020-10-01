import React,{useState} from "react";
import {   Button, Form, Input, Select, InputNumber } from "antd";
import axios from 'axios'
import "antd/dist/antd.css";
const { Option } = Select;


function Submitval() {

  const [image, setImage] = useState(null);
   const [color, setColor] = useState("");
   const [size, setSize] = useState("");
   const [price, setPrice] = useState(0);
   const [lifestyle, setLifeStyle] = useState("");
   const [emi, setEmi] = useState(0);
   
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 12, span: 16 },
  };


  const formSubmit = (e)=>{  

 
    console.log()

    const formData = new FormData();

    formData.append("img", image);
    formData.append("color", color);
    formData.append("Size", size);
    formData.append("price", price);
    formData.append("lifeStyle", lifestyle);
    formData.append("EMI", emi);

  
    axios
      .post("http://localhost:2000/add", formData).then(function (response) {
        console.log(response);
        if(response.status===200){
          alert("uploaded")
          window.location.reload(true);
        }
      })
  }


  return (
    <>

      <div style={{ height: "500px", width: "800px", margin: "120px" }}>

        <Form {...layout} name="control-hooks" onFinish={e=>formSubmit(e)}>

          <Form.Item name="image" label="Image" rules={[{ required: true }]} >
            <Input type="file" onChange={e=>{setImage(e.target.files[0])}}/>
          </Form.Item>

          <Form.Item name="color" label="Color" rules={[{ required: true }]}>
            <Select placeholder="Select Color" onChange={value=>{setColor(value)}}>
              <Option value="Red">Red</Option>
              <Option value="Green">Green</Option>
              <Option value="Blue">Blue</Option>
            </Select>
          </Form.Item>



          <Form.Item name="Size" label="Size" rules={[{ required: true }]}>
            <Select placeholder="Select Size"  onChange={value=>{setSize(value)}}>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
              <Option value="XXL">XXL</Option>
            </Select>
          </Form.Item>



          <Form.Item name="price" label="price" rules={[{ required: true }]}>
          <InputNumber 
             
              onChange={value=>{setPrice(value)}} 
            />
          </Form.Item>



          <Form.Item name="lifeStyle" label="LifeStyle" rules={[{ required: true }]}>
            <Input value={lifestyle}  onChange={e=>{setLifeStyle(e.target.value)}}/>
          </Form.Item>




          <Form.Item name="EMI" label="Emi" >

            <InputNumber 
              onChange={value=>{setEmi((price*value)/100)}}
            />
            <diV> {(emi!==0)?"EMi value "+emi:""}</diV>
           </Form.Item>




          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </div>

    </>
  );
}

export default Submitval;
