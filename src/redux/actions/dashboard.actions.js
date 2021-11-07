import { setDescription, setText, setList, modifyList } from "../constants/dashboard.constants";

const changeDescription = (payload) => ({
   type: setDescription,
   payload
});

const changeText = (payload) => ({
   type: setText,
   payload
});

const changeList = (payload) => ({
   type: setList,
   payload
});

const updateList = (payload) => ({
   type: modifyList,
   payload
});

export {changeDescription, changeText, changeList, updateList};