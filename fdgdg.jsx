function Title(props) {
    return (
        <input type="text" value={props.title}/>
    )
}
function Task(props) {
    return (
        <input type="text" value={props.task}/>
    )
}
function Done(props) {
    return (
        <input type="checkbox"/>
    )
}
function Remove(props) {
    return (
        <button onClick={props.onClick}>X</button>
    )
}
class ItemTodo extends React.Component {
    constructor() {
        super();
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(event) {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
    render() {
        return (
            <div className="itemTodo">
                <Title value={this.props.title}/>
                <Task value={this.props.task}/>
                <Done done={this.props.isDone}/>
                <Remove onClick={this.deleteItem}/>
            </div>
        )
    }
}
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Title',
            task: 'Message',
            isDone: false,
        };
        this.postItem = this.postItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.valueTitle = this.valueTitle.bind(this);
        this.valueText = this.valueText.bind(this);
    }
    valueTitle(event) {
        this.setState({
            title: event.target.value,
        })
    }
    valueText(event) {
        this.setState({
            task: event.target.value,
        })
    }
    addItem() {
        this.setState({
            isDone: !this.state.isDone,
        });
    }
    postItem() {
       //Этим методом нужно реализовать так, чтобы при нажатии на клавишу компонент ItemTodo вставлялся в div с классом block-todo
        const block = document.querySelector('.header-block');
        return <ItemTodo/>
    }
    render() {
        return (
                <div>
                    <div className="header-app">
                        <h1>My ToDo app with React</h1>
                        <button onClick={this.addItem}>+</button>
                        <div className="header-block">
                            <input id="title" type="text" placeholder="title" onChange={this.valueTitle}/>
                            <input id='task' type="text" placeholder="task" onChange={this.valueText}/>
                            <input id='submit' type="submit" value="Add"
                                    onClick={this.postItem}
                            />
                        </div>
                     </div>
                    <div className="body-app">
                        <div className="block-todo">
                        </div>
                    </div>
                    <div className="footer-app">
                        Footer
                    </div>
            </div>
        )
    }
}