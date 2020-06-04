import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
//const rootElement = document.getElementById('root');

//ReactDOM.render(
//  <BrowserRouter basename={baseUrl}>
//    <App />
//  </BrowserRouter>,
//  rootElement);

//registerServiceWorker();
//const element = <h1>Hello, world</h1>;
//const element = (

//    <div>

//        <h1>Welcome to React Programming World</h1>

//        <h2>Understanding React Rendering…</h2>

//    </div>

//);
//const element = React.createElement("div", { className: "testClass" },

//    React.createElement("h1", null, 'Welcome to Pragim Technologies'),

//    React.createElement('h2', null, 'I am from h2 Tag'));


//function Employee(data) {
//    return <div><p>Name : {data.name}</p>
//        <p>Salary : {data.salary}</p></div>;
//}

//const Employee = (data) => {
//    return <div><p>Name : {data.name}</p>
//        <p>Salary : {data.salary}</p></div>;
//}
//const element = <Employee name="Xitij D bhagat" salary="12345" />;

//Function Component
//const Employee = (data) => {
//    return (<div><p>Name : {data.name}</p>
//        <p>Salary : {data.salary}</p>
//        <Department dept={data.dept} head={data.head} />
//    </div>);
//}

//const Department = (deptInfo) => {
//    return <div><p>Dept Name is : <b>{deptInfo.dept}</b></p>
//        <p>Dept Head is : <b>{deptInfo.head}</b></p>
//    </div>;
//}

//const element = <Employee name="Sara" salary="12345" dept="Test" head="Head" />;

//class Employee extends React.Component {

//    render() {
//        return <div>
//            <h2>Employee Details...</h2>
//            <p>
//                <label>Name : <b>{this.props.Name}</b></label>
//            </p>
//            <Department Name={this.props.DeptName} />
//        </div>;
//    }
//}

//class Department extends React.Component {

//    render() {
//        return <div>
//            <h2>Department Details...</h2>
//            <p>
//                <label>Name : <b>{this.props.Name}</b></label>
//            </p>
//        </div>;
//    }
//}
//State 
//class Employee extends React.Component {
//    count = 0;
//    addEmployee = () => {
//        this.count = this.count + 1;
//        alert(this.count);
//        alert('Clicked on addEmployee Method');
//    }
//    render() {
//        return <div>
//            <h2>Employee Component...</h2>
//            <button onClick={this.addEmployee}>Add Employee</button>
//        </div>
//    }
//}

//class Employee extends React.Component {
//    state = { counter: 0 };
//    addEmployee = () => {
//        this.setState({ counter: this.state.counter + 1 });
        
//    }
//    render() {
//        return <div>
//            <h2>Employee Component...</h2>
//            <button onClick={this.addEmployee}>Add Employee</button>
//            <p>
//                <label>Add Employee Button is Clicked : <b>{this.state.counter}</b></label></p>
//        </div>
//    }
//}
//class CountCharacters extends React.Component {

//    constructor(props) {

//        super(props);

//        this.state = {

//            message: '',

//            counter: 10

//        };

//    }

//    onMessageChange(text) {
//        this.setState({
//            message: 'Message has ' + text.length + ' number of Characters'
//        });
//    }
//    render() {
//        return <div>
//            <h2>Welcome to Count Characters Component...</h2>
//            <p>
//                <label>Enter Message : <input type="text"
//                    onChange={e => this.onMessageChange(e.target.value)}></input></label>
//            </p>

//            <p>
//                <label>{this.state.message}</label>
//            </p>
//            <p>
//                <label>{this.state.counter}</label>
//            </p>
//        </div>
//    }
//}
class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedSalary: null
        };
    }
    getUpdatedSalary = (salary) => {
        this.setState({ updatedSalary: salary });
    }
   
    render() {
        return <div>
            <h1>Employee Component...</h1>
            <p>
                <label>Id : <b>{this.props.Id}</b></label>
            </p>
            <p>
                <label>Name : <b>{this.props.Name}</b></label>
            </p>
            <p>
                <label>Location : <b>{this.props.Location}</b></label>
            </p>
            <p>
                <label>Total Salary : <b>{this.props.Salary}</b></label>
            </p>
            <p>
                <label>Updated Salary : <b>{this.state.updatedSalary}</b></label>
            </p>

            <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>

           
        </div>
           
    }
}
class Salary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basic: this.props.BasicSalary,
            hra: this.props.HRA,
            sa: this.props.SpecialAllowance,
            
        };
    }

    updateSalary = () => {
        let salary = parseInt(this.refs.BasicSalary.value) + parseInt(this.refs.HRA.value) + parseInt(this.refs.SpecialAllowance.value);
        this.props.onSalaryChanged(salary);
      
    }

  

    render() {
        return <div>
            <h1>Salary Details...</h1>
            <p>
                <label>Basic Salary :<input type="text" defaultValue={this.state.basic} ref="BasicSalary" /></label>
            </p>
            <p>
                <label>HRA : <input type="text" defaultValue={this.state.hra} ref="HRA" /></label>
            </p>
            <p>
                <label>Special Allowance : <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance" /></label>
            </p>
            <button onClick={this.updateSalary}>Update</button>
        </div>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h2>Welcome to App Component</h2>
        </div>
    }
}
const EmployeeContext = React.createContext();
class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                Id: 101,
                Name: 'Pragim Tech'
            }
        };

    }

    render() {
        return <div>
            <h2>Welcome to Employee Component...</h2>
        </div>
    }
}

class Salary extends React.Component {
    render() {
        return <div>
            <h2>Welcome to Salary Component...</h2>
        </div>
    }
}
<EmployeeContext.Provider value={this.state.data}>
    <Employee />
</EmployeeContext.Provider>
const element = <Employee Id="101" Name="Pragim" Location="Bangalore" Salary="50000" BasicSalary="25000" HRA="10000" SpecialAllowance="15000"></Employee>

ReactDOM.render(element, document.getElementById("root"));

//const element = <Employee></Employee>

ReactDOM.render(element, document.getElementById('root'));