import { React } from 'react'
import { Row, Col } from 'antd'
import CardComponent from './Card'

import '../assets/css/Nav.css'
function NavCompoent() {
    return(
        <>
            <Row gutter={0} className="Sub-Header">
                <Col span={4}></Col>
                <Col span={16}>
                    <CardComponent title="1" body="Corpo" />
                    <CardComponent title="2" body="Corpo" />
                    <CardComponent title="3" body="Corpo" />
                </Col>
                <Col span={4}></Col>

            </Row>
        </>
    )
}


export default NavCompoent