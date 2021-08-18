import React from 'react'
import AddData from "./AddData";
import userService from "../services/user-service";
import { useState,useEffect} from "react";

interface postData{
    id: number;
    data: string;
    due_date: string;
    priority: number;
}


export default function HomePage() {
    const [posts, setPosts] = useState([]);
    
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

    return (
        <div>
            <AddData />
            <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.length !== 0 ?
                            posts.map((post:postData, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{post.id}</td>
                                        <td>{post.data}</td>
                                        <td>{post.due_date}</td>
                                        <td>{post.priority}</td>
                                        <button onClick={() => onDelete(post.id)}>Delete</button>
                                    </tr>
                                )
                            })
                            : 'No data found'
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}
