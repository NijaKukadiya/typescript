import { Input, DatePicker, Space, InputNumber, Button, Form,Layout, Modal} from "antd";
import { useState} from "react";
import moment from 'moment';
import { useHistory,Link } from "react-router-dom";
import CustomeModal from "./CustomModal";

const { Header, Content } = Layout;
const dateFormat = 'YYYY/MM/DD';

const AddData = () => {
    const [data, setData] = useState("");
    const [ due_date, setDue_Date] = useState(moment('2021/02/17', dateFormat));
    const [priority, setPriority] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory();

    const showModal = () => {
        setIsModalVisible(true);
      };
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const onChangeData = (e: any) => {
        const data = e.target.value;
        setData(data);
    };
    const onChangeDue_Date = (date: any, dateString: any) => {
        setDue_Date(moment(dateString, dateFormat))
    };

    const onChangePriority = (e: any) => {
        const priority = e;
        setPriority(priority);
    };
   
    const logout = () => {
        localStorage.removeItem('auth_token');
        history.push('/login');
    }
    const handleAdd = (e: any) => {
        // e.preventDefault();
        const store = { data, priority, due_date }
        fetch('https://rails-to-do-list-narola.herokuapp.com/v1/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': localStorage.getItem("auth_token") || '',
            },
            body: JSON.stringify(store),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                console.log('token:', data.auth_token);
            })

            .then(data => {
                    showModal();
            })

            .catch((error) => {
                console.error('Error:', error);
            });

    };

    const nextpath = (path: any) => {
        history.push(path);
      };


    return (
        <Layout>
        <Header style={{ backgroundColor:"#D8D4D5"}}>
        <Content> <Link to="/">Todos</Link>
        <Form name="Add Data"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 6 }}    
            initialValues={{ remember: true }}
            className="login"
            onFinish={handleAdd}
        >
            <Form.Item wrapperCol={{ offset: 1, span: 6 }} >
            <h1>Add New Data</h1>
                <Input placeholder="data" onChange={onChangeData} value={data} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 1, span: 6 }}>
                <Space direction="vertical">
                    <DatePicker defaultValue={due_date} onChange={onChangeDue_Date} />
                </Space>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 1, span: 6 }}>
                <InputNumber min={1} max={50} onChange={onChangePriority} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 1, span: 6 }} >
                <Button type="primary" onClick={handleAdd}>Add Data</Button>&nbsp;&nbsp;
                <Button type="primary" onClick={logout}> Logout</Button>
            </Form.Item>
        </Form>
        <CustomeModal
                title="Add the data" visible={isModalVisible} onOk={() => nextpath("/")} onCancel={handleCancel}
                modalBody={<h2 style={{color: "#08c"}}>To do added successfully.....</h2>}
            />
        {/* <Modal >
            <h2 style={{color: "#08c"}}>To do added successfully.....</h2>
        </Modal> */}
        </Content>
        </Header>
        </Layout>
    );
}
export default AddData;