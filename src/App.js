import React from 'react';
// import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import ListItem from './components/ListItem'

class Todolist extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: '',
      id: 0,
      list: [],
      isEdit: false,
      tempID: 0
    }
  }

  inputHandler = (e) => {
    this.setState({ input: e.target.value });

  }

  submitHandler = (e) => {
    const { input, list, id } = this.state;
    this.setState((prevState) => ({ id: prevState.id + 1 }));

    this.setState({ list: [...list, { name: input, id: id }] });
    // console.log(list);
    this.setState({ input: '' })
    e.preventDefault();
  }

  deleteHandler = (deleteid) => {
    console.log('delete', deleteid);
    this.setState(() => {

      const todos = this.state.list.filter((el) => el.id !== deleteid);

      return { list: todos };
    });
    this.setState({ input: '' });

  }

  updateHandler = () => {
    const { input, tempID, list } = this.state;

    let todos = list;
    todos[tempID].name = input;
    // console.log(todos);

    this.setState({ list: todos, isEdit: false, input: '' });


  }


  editHandler = (id, event) => {
    this.setState({ input: event, isEdit: true, tempID: id });
  }


  render() {
    const { isEdit } = this.state;
    let index = 0;

    return (
      <div>
        <h1>heloo</h1>
        <h2>{this.state.input}</h2>
        <InputField type='text' input={this.state.input} inputHandler={this.inputHandler} />
        {/* <input type='text' value={this.state.input} onChange={this.inputHandler}></input> */}
        {
          isEdit ? <Button event={this.updateHandler} name='update' />
            : <Button event={this.submitHandler} name='add' />
        }



        <div>
          <>
            <table>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
              {
                this.state.list.map(el => {
                  index++;
                  return <ListItem
                    name={el.name}
                    temoIndex={index}
                    id={el.id}
                    onDelete={this.deleteHandler}
                    onEdit={this.editHandler} />
                })
              }
            </table>
          </>


        </div>

      </div>

    )
  }
}


export default Todolist;

