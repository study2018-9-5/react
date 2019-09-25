import React, {Component} from 'react'
import './searchTableUpdata.scss';
import { Row, Col, Form, Input, Button, Select} from 'antd';
const { Option } = Select;

class SearchTableUpdata extends Component{
  constructor(props){
    super(props);
    this.state = {
      formData:{
        packageName: '',
        packageNbr: '',
        packageStatus: '',
      },
      packageType:[
        {label: '有效', value: '1000'},
        {label: '无效', value: '2000'},
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);  // 改变this指向
    this.handleChange = this.handleChange.bind(this);  // 改变this指向
  }

  // ------------ 函数操作 start-------------- //
  // 表单的提交
  handleSubmit(event){
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('如果规则验证通过: ', values);
      }
    });
  }
  // 输入值变化触发绑定
  handleChange(event,param){
    console.log(event,param);
    this.setState({formData:{packageName:event.target.value}});
  }
  // ------------ 函数操作 end-------------- //

  render(){
    // 用于和表单进行双向绑定
    const { getFieldDecorator } = this.props.form;

    //from表单样式  默认的比例 label占8 输入框占16
    const  formItemLayout = {
      labelCol: {
          span: 8
      },
      wrapperCol: {
          span: 16
      },
    };

    return(
      <div className="searchTableUpdata">
        <Form layout="inline" onSubmit={this.handleSubmit} {...formItemLayout}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="套包名称：">
                {/* 用于和表单进行双向绑定 */}
                {
                  getFieldDecorator('packageName', {
                    rules: [{ required: true, message: '请输入套包名称!' }],
                  })(<Input placeholder="请输入套包名称"/>)
                }
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="套包编码：">
                {
                  getFieldDecorator('packageNbr', {
                    rules: [{ required: true, message: '请输入套包名称!' }],
                  })(
                    <Input placeholder="请输入套包编码"/>
                  )
                }
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="套包状态：">
                {
                  getFieldDecorator('packageStatus',{
                    rules: [{ required: true, message: '请选择套包状态!' }],
                  })(
                    <Select placeholder="请选择套包状态">
                      {
                        this.state.packageType.map((item,index) => {
                          return(
                            <Option key={index} value={item.value}>{item.label}</Option>
                          );
                        })
                      }
                    </Select>
                  )
                }
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                {/* Button组件如果要设置类型submit或者reset等，在html中是使用type直接设置，在antd中用htmlType代替。*/}
                <Button type="primary" htmlType="reset" style={{marginRight:12}}>重置</Button>
                <Button type="primary" htmlType="submit">搜索</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

// 创建表单
const searchTableUpdata = Form.create({})(SearchTableUpdata);

export default searchTableUpdata;