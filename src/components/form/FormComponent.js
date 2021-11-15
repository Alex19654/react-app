import { useDispatch, useSelector } from "react-redux";
import { changeDescription, changeText } from "../../redux/actions/dashboard.actions";
import { axiosGet, axiosPost } from "../../redux/thunk/app.thunk";
import { FormStyle, ButtonStyle } from "./FormStyles.module";
import { Form, Input } from 'antd';

const FormComponent = () => {

   const dispatch = useDispatch();
   const description = useSelector(state => state.post.description);
   const text = useSelector(state => state.post.text);

   const getItemsHandler = () => {
      dispatch(axiosGet());
   };

   const postItemsHandler = () => {
      dispatch(axiosPost(description, text));
   }

   const descChangeHandler = (value) => {
      dispatch(changeDescription(value));
   };

   const textChangeHandler = (value) => {
      dispatch(changeText(value));
   };

   const handleSubmit =  (e) => {
      postItemsHandler();
      getItemsHandler();
   }

   return (
         <FormStyle
         name="basic"
         labelCol={{
         span: 8,
         }}
         wrapperCol={{
         span: 16,
         }}
         onFinish={handleSubmit}
         >
         <Form.Item
         label="Description"
         name="description"
         id="description"
         rules={[
            {
               required: true,
               message: 'Please input description!',
            },
         ]}
         >
         <Input onChange={(e) => descChangeHandler(e.target.value)} />
         </Form.Item>

         <Form.Item
         label="Text"
         name="text"
         id="text"
         rules={[
            {
               required: true,
               message: 'Please input text!',
            },
         ]}
         >
         <Input onChange={(e) => textChangeHandler(e.target.value)} />
         </Form.Item>

         <Form.Item
         wrapperCol={{
            offset: 0,
            span: 0,
         }}
         >
         <ButtonStyle type="primary" htmlType="submit">
            Submit
         </ButtonStyle>
         </Form.Item>
         </FormStyle>
      );
}

export default FormComponent;