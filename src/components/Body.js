import { React } from 'react'
import { Row, Col } from 'antd'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuComponet from './Menu';

import Home from '../pages/Home'
import Login from '../pages/Login'
import ConfigsPage from '../pages/Configs';

function BodyComponet(){
    return(
        
        <Router>
            <Row gutter={0} className="Sub-Header">
                <Col span={4}></Col>
                <Col span={16}>
                    <MenuComponet />
                </Col>
                <Col span={4}></Col>
            </Row>
            
            <Row gutter={0} className="">

                <Col span={4}></Col>
                <Col span={16}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/config" element={<ConfigsPage />} />
                        </Routes>
                </Col>
                <Col span={4}></Col>

            </Row>
            
        </Router>
        
    )
}
export default BodyComponet