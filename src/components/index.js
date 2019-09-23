import React, {Component} from 'react';
import './index.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      systemLookData:[
        {label: '政企销售助手1',id:1},
        {label: '政企销售助手2',id:2},
        {label: '政企销售助手3',id:3},
      ],
      value: '',
    };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleChange = this.handleChange.bind(this);  // 改变this指向
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }
  // form表单提交的方法
  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <div className="home">
        {/* 循环渲染列表 start*/}
        <ul>
          {
            // 循环渲染列表时要使用this.state.xxx.map()的方法。
            // map方法中要使用'{}'则要有return。
            // this.state.systemLookData.map(item => {
            //   return (
            //     <li key={item.id}>{item.label}</li>
            //   )
            // })
            this.state.systemLookData.map((item,index) =>
              <li key={index}>{item.label}</li>
            )
          }
        </ul>
        {/* 循环渲染列表 end*/}
        
        <form onSubmit={this.handleSubmit}>
          <label>名字:<input type="text" value={this.state.value} onChange={this.handleChange}/></label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default Index;