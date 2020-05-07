import React, {Component, createContext} from 'react';
//import logo from './logo.svg';
import './App.css';
import CartList from "./components/CartList";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import items from './data';
import Mouse from "./components/Mouse";
import Cat from "./components/Cat";


export const AppContext = createContext();

export default class App extends Component {

  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  state = {
    error: '',
    loading: false,
    // items: [],
    items: [...items],
  }

  async addItem(userName) {
    try {

      this.setState({error: '', loading: true});

      const apiUrl = 'https://api.github.com/users/';
      const response = await fetch(apiUrl + userName);

      // this.setState({loading: false});
      if (!response.ok) {
        this.setState({error: "Something wrong"});
        throw  Error("Something wrong");
      }
      const item = await response.json();

      this.setState(({items}) => {
          if (item.login !== userName
            || items.find(v => v.login === item.login)
          ) {
            return null;
          } else {
            return {items : [item, ...items]}
          }
      });

    } catch (e) {
      this.setState({error: e.message});
      setTimeout(
        () => this.setState({error: e.message}),
        3000
      );
    } finally {
      this.setState({loading: false});
    }
  }

  removeItem(id) {

      this.setState(({ items }) => ({
        items: items.filter(item => item.id !== id)
      }));
  }

  render() {
    return (
      // <AppContext.Provider value={{
      //     removeItem: this.removeItem,
      //     addItem: this.addItem,
      // }}>
      //   <div className="App">
      //     {this.state.loading && <Spinner />}
      //     {this.state.error && <h1>{this.state.error}</h1>}
      //     <Form addItem={this.addItem}/>
      //     <CartList items={this.state.items}/>
      //   </div>
      // </AppContext.Provider>
      // <Mouse>
      //    {({x, y}) => (
      //      <h1> {x} - {y} </h1>
      //   )}
      // </Mouse>
      <Mouse>
        {(state) => <Cat {...state}></Cat>}
      </Mouse>
    );
  }
}
