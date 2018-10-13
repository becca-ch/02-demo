import React from 'react'

import '../assets/css/index.css'

class Todolist extends React.Component{
    constructor() {
        super()
        this.state={
            list: []
        }

    } 
    
    add = () => {
        // console.log(this.refs.txt.value)
        var tempList = this.state.list
        tempList.push(this.refs.txt.value) //返回一个索引值

        // 添加数据后文本框变为空
        this.refs.txt.value=''


        this.setState({
            list: tempList
 
        })
    }

    // 删除数据
    removeData = (key) => {
        var tempList = this.state.list
        tempList.splice(key, 1)
        this.setState({
            list: tempList
        })
    }
    render() {
        return(
            <div>
                <h3 className="title">ToDoList</h3>
                <input type="text" ref="txt"/>
                <button onClick={ ()=> this.add() }>增加</button>
                

                <ul>
                    {/* 循坏遍历数组  遇到this 一定要注意this 指向*/}
                  {
                       this.state.list.map((item, key) => {
                        return <li key={key}>{item}===========<button onClick={()=> this.removeData(key)}>删除</button>  </li>
                     })

                  } 
                </ul>
            </div>
        ) 
    }

}


export default Todolist