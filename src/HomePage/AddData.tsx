import {Input,DatePicker,Space,InputNumber,Button,Form} from "antd";
import { useState } from "react";
import {  useSelector } from "react-redux";
import add_data from "../services/auth-service";
import "../Login/login.css"

const AddData = () => {
    const [data, setData] = useState("");
    // const [due_date, setDue_Date] = useState("");
    const [priority, setPriority] = useState("");
    const [date, setDate] = useState(new Date());
    // const [successful, setSuccessful] = useState(false);
    // const { message } = useSelector((state: any) => state.message);

    const onChangeData = (e: any) => {
        const data = e.target.value;
        setData(data);
    };
    // const onChangeDue_Date = (e: any) => {
    //     const due_date = e.target.value;
    //     setDue_Date(due_date);
    // };
    const onChangePriority = (e: any) => {
        const priority = e.target.value;
        setPriority(priority);
    };
    const handleDateChange = (dateObj: moment.Moment, dateStr: string): void => {
        setDate(dateObj);
    }
    // const onFinish = (values: any) => {
    //     console.log('Success:', values);
    //     dispatch(add_data(values.data,values.due_date,values.priority))
    //   };
    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    //   };
    const handleAdd = (e: any) => {
        e.preventDefault();
        const store ={data:data ,due_date:due_date,priority:priority}
        fetch('https://rails-to-do-list-narola.herokuapp.com/v1/todos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'access-token': localStorage.getItem("auth_token") || '',
            },
            body:JSON.stringify(store),
        })
        .then(response => response.json())
        .then(data =>{
            console.log('Success:',data);
            console.log('token:',data.auth_token);
        })
        .catch((error)=>{
             console.error('Error:',error);
        });
    };

    return(
        <Form name="Add Data"
        wrapperCol={{ span: 4 }}
        initialValues={{ remember: true }}
        className="login"
        /* onFinish={onFinish}
        onFinishFailed={onFinishFailed} */
        >
        <Form.Item wrapperCol={{ offset: 1, span: 4 }} >
        <h1>Add New Data</h1>
            <Input placeholder="data" onChange={onChangeData} value={data}/> 
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 1, span: 4 }}>
            <Space direction="vertical"> 
                <DatePicker onChange={handleDateChange} />
            </Space>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 1, span: 4 }}>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChangePriority} />
        </Form.Item>
        <Form.Item  wrapperCol={{ offset: 1, span: 4 }} >
            <Button type="primary" onClick={handleAdd}>Add Data</Button>
        </Form.Item>
        </Form>
    )
} 
export default AddData;