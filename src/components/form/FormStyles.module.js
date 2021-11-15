import styled from "styled-components";
import { Button, Form } from "antd";
import 'antd/dist/antd.css';

const FormStyle = styled(Form)`
   width: 285px;
   margin: 0 auto;
   border: 1px solid rgb(24, 23, 23);
   border-radius: 7px;
   padding: 1px;
`;

const ButtonStyle = styled(Button)`
   display: block;
   margin: 0 auto;
   color: black;
   background-color: white;
`;

const LabelStyle = styled.label`
   display: block;
   float: left;
   width: 100px;
   height: 15px;
   padding: 5px;
`;


export { FormStyle, ButtonStyle, LabelStyle };