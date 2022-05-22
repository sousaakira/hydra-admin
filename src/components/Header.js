import React, { useState } from 'react';
import { Col, Row, Modal, Form, Input, Button } from 'antd'
import { LogoutOutlined, PlusSquareFilled } from '@ant-design/icons'
import '../assets/css/Header.css';

function HeaderBar(){
    const [form] = Form.useForm();
    const [modalVisible, setModal] = useState(0);
    const [loading, setLoading] = useState(0);

    const closeModal = (values) => {
        setModal(false);
    };

    // const onFinish = (values) => {
    //     console.log(values);
    // };

    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    // const handleOk = (errorInfo) => {
        
    //     console.log(form.nome)
    //     setLoading(true);
    //     console.log('Failed:', errorInfo);
    // };

    const handleCancel = () => {
        setModal(false)
        form.resetFields()
    }

    const handleOk = () => {
        form.submit()
    }

    const onFinish = (e) => {
        console.log(e)
        console.log('Form submited!')
        setModal(false)
    }

    return (
        <>
            <Row gutter={0} >
                <Col span={4} className='gutter-row' >
                    <div className="style"></div>
                </Col>
                <Col span={16} className='gutter-row' >
                    <div className='style'>
                        <div>
                            <a href='/' className="Logo">Logo</a> 
                            <div className='Title'>UNMK</div>
                        </div>

                        <div className="Menu">
                            <div className="Client">
                                Ola Cliente
                            </div>
                            <div className="Icon">
                                <LogoutOutlined />
                            </div>
                            <div className="Icon" onClick={() => setModal(true)}>
                                <PlusSquareFilled  title="Cadastrar Servidores"/>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col span={4} className='gutter-row' >
                    <div className='style'></div>
                </Col>
            </Row>


            <Modal
                title="Cadastrar Servidor"
                centered
                visible={modalVisible}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={[
                    <Button onClick={closeModal}>Cancelar</Button>,
                    <Button key="submit" type="primary" onClick={handleOk} >Salvar</Button>
                ]}
                >
                    <Form form={form} layout="vertical" onFinish={onFinish} >
                        <Form.Item
                            label="Nome"
                            name="nome"
                            id="nome"
                            rules={[{ required: true, message: 'Informe o nome do servidor' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Webhook"
                            name="webhook"
                            id="webhook"
                            rules={[{ required: true, message: 'Informe a url do servidor contratado' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Api Key"
                            name="apikey"
                            id="apikey"
                            rules={[{ required: true, message: 'Informe a api key' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
            </Modal>
        </>
    )
}

export default HeaderBar