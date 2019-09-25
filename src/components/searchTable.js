import React, {Component} from 'react'
import './searchTable.scss';
import { Row, Col, Form, Input, Button, Select} from 'antd';
const { Option } = Select;

class SearchTable extends Component{
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

  // 函数操作
  handleSubmit(event){
    event.preventDefault();
  }
  // 输入值变化触发绑定
  handleChange(event,param){
    console.log(event,param);
    this.setState({formData:{packageName:event.target.value}});
  }
  // 函数操作

  render(){
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
      <div className="searchTable">
        {/* <Form layout="inline" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}> */}
        <Form layout="inline" onSubmit={this.handleSubmit} {...formItemLayout}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="套包名称：">
                {/* <Input value={this.state.formData.packageName} onChange={this.handleChange} placeholder="请输入套包名称"/> */}
                {/* onChange 事件中传参的方法 */}
                <Input value={this.state.formData.packageName} onChange={(value) => {this.handleChange(value,'packageName')}} placeholder="请输入套包名称"/>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="套包编码：">
                <Input value={this.state.formData.packageNbr} placeholder="请输入套包编码"/>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="套包状态：">
                {/* 如果select 的 value 为空的时候将其置为 undefined 否则 placeholder 不显示 */}
                <Select value={this.state.formData.packageStatus?this.state.formData.packageStatus:undefined} placeholder="请选择套包状态">
                  {
                    this.state.packageType.map((item,index) => {
                      return(
                        <Option key={index} value={item.value}>{item.label}</Option>
                        // <Select.Option key={index} value={item.value}>{item.label}</Select.Option>
                      );
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button type="primary" onClick={this.handleSubmit}>搜索</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {/* <Row>
          <Col span={8}>

          </Col>
        </Row> */}
      </div>
    );
  }
}

export default SearchTable;