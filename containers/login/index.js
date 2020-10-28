import React, { useState, useEffect, useReducer } from 'react';

import { Form, Input, Button, Checkbox, PageHeader,notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
const  Login = () => {


  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const openNotification = () => {
    notification.open({
      message: 'sign in ',
      description:
        'login successfully.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const initialState = {
    Email: ' ',
    password: ' ',
    societyId: "fafc7359-0139-43d7-9d00-1828d90cc407"
  }
    const [state, setState] = useState(initialState);
 
  const handleusername = values => {
    setState({
      ...state,
      Email: values.target.value
    } )
  }
  const handlePassword = values => {
    setState({
      ...state,
      password: values.target.value
    } )
  }
      console.log(state);

  useEffect( () => {
      console.log(state)
    });
  return ( 
    <>
         <Form style={{ background: '#D8D8D8', width: '500px', margin: 'auto ', padding: '10px', marginTop: '10px'} }
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              >
              <PageHeader  
              className="site-page-header"
              title="Login"
              />
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username o Email"  onChange={handleusername}/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword }
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
               
                <Link className="login-form-forgot" href="" >
                  <a>
                    Forgot password
                  </a>
                </Link>
                <Form.Item name="remember" valuePropName="terminos" noStyle>
                <Checkbox style={{marginLeft: '40px'}}>
                  <Link  href="" >
                    <a >
                      Terminos Condiciones
                    </a>
                  </Link>
                </Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item  style={{ display: 'flex'} } >
                <Button type="primary" htmlType="submit" style={{width: '50%'}} onClick={openNotification}>
                  Log in
                </Button>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginLeft: '100px'} }>
                <Link href="/register" >
                    <a>
                    register now
                    </a>
                </Link>
                </Button> 
              </Form.Item>
          </Form>
    </>
   );
}

export default Login;