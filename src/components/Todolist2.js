import React from 'react'

import '../assets/css/index.css'

// 引入封装好的localStorage 
import Storage from '../model/Storage'

class Todolist extends React.Component{
    constructor() {
        super()
        this.state = {
            list: []
        }
    }


    // 文本框输入，添加数据到正在进行的事件中
    add = (e) => {
        // 只有按回车才会增加数据
        if (e.keyCode === 13) {


            let title = this.refs.txt.value
            let templist = this.state.list

           
            templist.push({
                title: title,
                checked: false
            })
    
            this.setState({
                list: templist
            }) 
            // 输入数据，文本框默认为空
            this.refs.txt.value = ""

            // 将数据缓存到本地

            // 引入我们封装后的简写方式
            Storage.set('todolist', templist)
            // localStorage.setItem('todolist', JSON.stringify(templist))
        }
    }

    remove = (key) => {
        var templist = this.state.list
        templist.splice(key, 1)

        this.setState({
            list: templist
        })

        // 将数据缓存到本地
        Storage.set('todolist', templist)
    }

    // 监听复选框状态变化
    changebox = (key) => {
       let templist = this.state.list
       templist[key].checked = !templist[key].checked

       this.setState({
            list: templist
       })
       // 将数据缓存到本地
       Storage.set('todolist', templist)
    }

    //生命周期函数，页面加载就会触发
    componentDidMount() {

      var todolist = JSON.parse(localStorage.getItem('todolist'))
    //   var todolist = Storage.get('todolist')
    //   console.log(todolist)
    
      if(todolist) {
            this.setState({
                list: todolist
            })
      }
    }
   
    render() {
        return(
            <div className="container">
                <header className="title">ToDoList: <input type="text" ref="txt" onKeyUp={(e)=> this.add(e) }/> 
                </header>
                
                <hr />

                <h2>正在进行</h2>
                <ul>
                    {
                        this.state.list.map((item, key) => {
                            if (!item.checked) {
                                return(
                                    <li key={key}> <input type="checkbox" checked={item.checked} onChange={() => this.changebox(key)} />
                                    {item.title}
                                    <button onClick={ () => this.remove(key) } >删除</button>
                                    </li>
                                  )
                            }
                        } )
                    }
                </ul>

                <br/>
                <h2>已经完成</h2>
                <ul>
                    {
                        this.state.list.map((item, key) => {
                            if (item.checked) {
                                return(
                                    <li key={key}> <input type="checkbox" checked={item.checked} onChange={() => this.changebox(key)} />
                                    {item.title}
                                    <button onClick={ () => this.remove(key) } >删除</button>
                                    </li>
                                  ) 
                            }
                        } )
                    }

                </ul>
                
            </div>
        )
    }
}

export default Todolist