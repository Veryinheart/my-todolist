import { Form, Input, Button, Divider, Table, } from 'antd';
import React, { useState, useContext } from "react";
import { ToDoListContext } from '../context/TodoListContext';
import { v1 as uuidv1 } from 'uuid';
import { Link } from 'react-router-dom';

const Home = () => {
    const [form] = Form.useForm();
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedMutlRow, setSelectedMutlRow] = useState([]);
    const { todoList, addToDo, deleteToDo, deleteMutlToDO } = useContext(ToDoListContext);

    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            render: (text, record) => <Link to={`/todo/${record.key}`}>{text}</Link>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            render: (text, record) => <Link to={`/todo/${record.key}`}>{text}</Link>,
        },
        {
            title: 'Operate',
            dataIndex: 'operate',
            key: 'x',
            render: () => <Button type="link" style={{ color: 'red' }} onClick={() => deleteToDo(selectedItem)}>Delete</Button>,
        },
    ];

    const onFinish = (values) => {
        const newTodo = { ...values, key: uuidv1() }
        addToDo(newTodo);
        form.resetFields();

    }
    const rowSelection = {
        onChange: (selectedRows) => {
            selectedRows.length > 1 ? setSelectedMutlRow(selectedRows) : setSelectedItem(selectedRows[0]);
        },
    };

    return (

        <div>
            <Form style={{ marginTop: "50px" }}
                name="basic"
                form={form}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Description"
                    name="description"

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Divider />
            <Table
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={todoList}
                pagination={false}
            />
            <br />
            <Button type="primary" onClick={() => deleteMutlToDO(selectedMutlRow)}>
                Delete selected
            </Button>

        </div>
    )
}

export default Home



