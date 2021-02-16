import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = { showing: "NIL" };
  this.Buttonchange = this.Buttonchange.bind(this);
}
  Buttonchange(text){
    this.setState({showing: text})
  } 
  render() {
      const {showing} = this.state;
      console.log(this.state.showing);
      let images = null;
      //the state is controlled by the buttons, which in turn control what is displayed through this switch.
    switch(this.state.showing) {
      case "Mountain":
        images = <>
            <h1>Pictures of Mountains</h1>
           <table>
           <tbody>
           <tr>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           </tr>
           <tr>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           <td><img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"></img></td>
           </tr>
           </tbody>
           </table></>;
        break;
      case "Birds":
        images = <>
            <h1>Pictures of Birds</h1>
           <table>
           <tbody>
           <tr>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg" ></img></td>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg"></img></td>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg"></img></td>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg"></img></td>
           </tr>
           <tr>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg"></img></td>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg"></img></td>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg"></img></td>
           <td><img src="https://www.stockvault.net/data/2011/02/05/117437/thumb16.jpg"></img></td>
           </tr>
           </tbody>
           </table></>;
        break;
      case "Food":
        images = <>
            <h1>Pictures of Food</h1>
           <table>
           <tbody>
           <tr>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg" ></img></td>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg"></img></td>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg"></img></td>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg"></img></td>
           </tr>
           <tr>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg"></img></td>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg"></img></td>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg"></img></td>
           <td><img src="https://image.shutterstock.com/image-photo/stock-photo-salt-shaker-250nw-740197837.jpg"></img></td>
           </tr>
           </tbody>
           </table></>;
        break;
      case "Beaches":
        images = <>
            <h1>Pictures of Beaches</h1>
           <table>
           <tbody>
           <tr>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg" ></img></td>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg"></img></td>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg"></img></td>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg"></img></td>
           </tr>
           <tr>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg"></img></td>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg"></img></td>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg"></img></td>
           <td><img src="https://images.pexels.com/photos/3671311/pexels-photo-3671311.jpeg?cs=srgb&dl=pexels-la-miko-3671311.jpg&fm=jpg"></img></td>
           </tr>
           </tbody>
           </table></>;
        break;
      default:
        images = <div/>;
    }
      return (
          <div>
              <button onClick={() => this.Buttonchange("Mountain")}>Mountain</button>
              <button onClick={() => this.Buttonchange("Birds")}>Birds</button>
              <button onClick={() => this.Buttonchange("Food")}>Food</button>
              <button onClick={() => this.Buttonchange("Beaches")}>Beaches</button>
              {images}
          </div>  
      )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));