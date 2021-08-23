
import userService from "../services/user-service";
import { useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {Table,Button,Switch,Layout,Typography,Modal} from "antd";
import {
    UsergroupAddOutlined,
    PlusCircleTwoTone,
  } from '@ant-design/icons';
import CustomeModal from "./CustomModal";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
  
interface postData{
    id: number;
    data: string;
    due_date: string;
    priority: number;
}

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const history= useHistory(); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [id, setId]= useState(null);

    useEffect(() => {
        userService.getAddData().then(
          (response) => {
            const { data = [] } = response;
            setPosts(data.data.todos);
            console.log("show data:::::::::::::",response.data.data)
          },
          (error) => {
            const _data1 =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              setPosts(_data1);
          }
        );
      },[])

    const getData = () => {
        userService.getAddData()
            .then((getData) => {
                setPosts(getData.data.data.todos);
            })
    }
    const onDelete = (id:any) => {
        console.log(id);
        userService.DeleteData(id)
            .then(() => {
                getData();
            })
            setIsModalVisible(false);
    }
    const showModal = (id:any) => {
        console.log(id);
        
        setId(id);
        setIsModalVisible(true);
      };
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const columns = [
        {
          key:'id',
          title: 'Id',
          dataIndex: 'id',
          sorter: true,
          width: '10%',
        },
        {
            key:'data',
            title:'Data',
            dataIndex:'data',
            sorter: true,
        },
        {
            key:'due_date',
            title:'Date',
            dataIndex:'due_date',
            sorter: true,
        },
        {
            key:'priority',
            title:'Priority',
            dataIndex:'priority',
            sorter: true,
        },
        {
            key:'x',
            title:'Complete',
            dataIndex:'',
            render: () => <Switch />
        },
        {
            key:'id',
            title:'Delete',
            dataIndex:'id', 
            render: (id:any) => <Button onClick={() => showModal(id)}>Delete</Button>,
        },
    ];

    const nextpath = (path: any) => {
        history.push(path);
      };
    
    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
      
        userService.SortData(sorter.field, sorter.order === "ascend" ? 'asc' : 'desc')
      
        .then((getData) => {
            setPosts(getData.data.data.todos);
        })
        console.log("field",sorter.field);
        console.log("order",sorter.order);
        
    }

    return (
    <div>
        <Layout >
        <Header style={{ backgroundColor:"#D8D4D5"}} >Home Page 
            <Content style={{ padding: '0 50px' }}>Todos
            <Title style={{color:'#08c'}}><UsergroupAddOutlined style={{ fontSize: '30px', color: '#08c' }}/> 
                ToDos List <PlusCircleTwoTone twoToneColor= "#ff0000" style={{ fontSize: '25px' }}  onClick={() => nextpath("/add_data")}/></Title>   
                <Table
                    columns={columns}
                    dataSource={posts}
                    onChange={(pagination, filters, sorter) => handleTableChange(pagination, filters, sorter)}
                />
            </Content>

            <CustomeModal
                title="Delete the data"
                visible={isModalVisible} 
                onOk={() => onDelete(id)} 
                onCancel={handleCancel}
                modalBody={<h2 style={{color: "#08c"}}> Are You Sure?</h2>}
            />
            {/* <Modal title="Delete the data" visible={isModalVisible} onOk={() => onDelete(id)} onCancel={handleCancel}>
                <h2 style={{color: "#08c"}}> Are You Sure ?</h2>
            </Modal> */}
        <Footer></Footer>
        </Header>
        </Layout>
    </div>
    )
}
