import React from 'react'
import AddData from "./AddData";
import userService from "../services/user-service";
import { useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {Table,Button,Switch,Layout,Typography} from "antd";


import {
    UsergroupAddOutlined,
    PlusCircleTwoTone,
  } from '@ant-design/icons';

  
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
        userService.DeleteData(id)
            .then(() => {
                getData();
            })
    }


    const columns = [
        {
            key:'1',
            title:'ID',
            dataIndex:'id',
            sorter: (a:any, b:any) => a.id - b.id
        },
        {
            key:'2',
            title:'Data',
            dataIndex:'data',
            sorter: (a:any, b:any) => a.data.localeCompare(b.data)
        },
        {
            key:'3',
            title:'Date',
            dataIndex:'due_date',
            sorter: (a:any, b:any) => a.due_date.localeCompare(b.due_date)
        },
        {
            key:'4',
            title:'Priority',
            dataIndex:'priority',
            sorter: (a:any, b:any) => a.priority - b.priority
        },
        {
            key:'5',
            title:'Complete',
            dataIndex:'',
            render: () => <Switch />
        },
        {
            key:'6',
            title:'Delete',
            dataIndex:'id', 
            render: (id:any) => <Button onClick={() => onDelete(id)}>Delete</Button>,
        },
    ]
    const nextpath = (path: any) => {
        history.push(path);
      };
    
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
                >
                </Table>
            </Content>
        <Footer></Footer>
        </Header>
        </Layout>
    </div>
    )
}
