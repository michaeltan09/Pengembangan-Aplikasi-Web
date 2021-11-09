import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './App.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';
import Profil from './views/Profil/Profil';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; //ini harus diinstall dulu diterminal npm install react-router-dom --save . lalu di import

class App extends Component{
 
//ROUTER
render(){
  return(
    <Router>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <Link to="/profil/Budi">Budi</Link>
        <Link to="/profil/Ali">Ali</Link>
        <Link to="/profil/Susi">Susi</Link>

        <Route path="/" exact component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/help"component=
        {Help}></Route>
        <Route path="/profil/:nama" component={Profil}></Route>
      </div>
    </Router>
  )
}


//FUNCTION
//  constructor(){
//    super();

//    this.state = {
//      mahasiswa : [],
//      nama : null,
//      nim : null,
//      nilai : null
//    }
//  }

//  setValueState(event){
//    this.setState({
//      [event.target.name] : event.target.value
//    })
//  }

//  addData(){
//    var data_tmp = this.state.mahasiswa;
//    data_tmp.push({nim : this.state.nim, nama : this.state.nama, nilai : this.state.nilai});
//    this.setState({
//      mahasiswa : data_tmp
//    })
//  }

//  deleteData(index){
//    var data_tmp = this.state.mahasiswa;
//    data_tmp.splice(index,1);
//    this.setState({
//      mahasiswa : data_tmp
//    })
//  }

//  render(){
//    return(
//      <div className="container">
//        <div className="form-container">
//          <div className="form-group">
//            <label>Nim:</label>
//            <input type="text" name="nim" value= {this.state.nim} onChange={this.setValueState.bind(this)}
//            className="form-control"></input>
//          </div>
//          <div className="form-group">
//            <label>Nama:</label>
//            <input type="text" name="nama" value= {this.state.nama} onChange={this.setValueState.bind(this)}
//            className="form-control"></input>
//          </div>
//          <div className="form-group">
//            <label>Nilai:</label>
//            <input type="number" min="0" name="nilai" value={this.state.nilai} onChange={this.setValueState.bind(this)} className="form-control"></input>
//          </div>
//          <button onClick={this.addData.bind(this)} type="button" className="btn btn-primary">
//            Submit
//          </button>
//        </div>
//        <br />
//        {/* {cetak data mahasiswa ke tabel} */}
//        <table className ="table">
//          <thead>
//            <tr>
//              <th>No.</th>
//              <th>Nim</th>
//              <th>Nama</th>
//              <th>Nilai</th>
//              <th>#</th>
//            </tr>
//          </thead>
//          <tbody>
//            {this.state.mahasiswa.map((mhs, index)=>(
//              <tr key={index}>
//                <td>{index+1}</td>
//                <td>{mhs.nim}</td>
//                <td>{mhs.nama}</td>
//                <td>{mhs.nilai}</td>
//                <td>
//                  <button onClick={this.deleteData.bind(this, index)} className="btn btn-danger btn-sm">
//                    Hapus
//                  </button>
//                </td>
//              </tr>
//            ))}
//          </tbody>
//        </table>
//      </div>
//    )
//  }

//MULTIDIMENSIONAL ARRAY
// render(){
//   var data = [
//     {nama : "Budi", nilai : 80},
//     {nama : "Ali", nilai : 85},
//     {nama : "Susi", nilai : 87}
//   ]
// return(
//   <table className="table">
//     <thead>
//     <tr>
//       <th>No.</th>
//       <th>Nama</th>
//       <th>Nilai</th>
//     </tr>
//     </thead>
//     <tbody>
//       {data.map((item, index)=> (
//         <tr key={index}>
//           <td>{index+1+"."}</td>
//           <td>{item.nama}</td>
//           <td>{item.nilai}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// )
// }

//ASSOCIATIVE/OBJECT ARRAY
// render(){
//   var mahasiswa = {
//     nama : "Susi",
//     nim : "162110001",
//     email : "susi@mikroskil.ac.id"
//   }
//   return(
//     <table>
//       <tr>
//         <td>Nim</td>
//         <td>:</td>
//         <td>{mahasiswa.nim}</td>
//       </tr>
//       <tr>
//         <td>Nama</td>
//         <td>:</td>
//         <td>{mahasiswa.nama}</td>
//       </tr>
//       <tr>
//         <td>Email</td>
//         <td>:</td>
//         <td>{mahasiswa.email}</td>
//       </tr>
//     </table>
//   )
// }

//ARRAY
// render(){
//   var angka = [1,2,3]
//   var nama = ["Budi","Ali","Susi"]
//   var campuran = ["Budi",1,"Ali",2,"Susi",3]

//   return (
//     <div>
//       Isi array angka :
//       <ul>
//         {angka.map((item, index)=>(
//           <li>Indeks ke - {index} : {item} </li>
//         ))}
//       </ul>

//       Isi array nama :
//       <ul>
//         {nama.map((item, index)=>(
//           <li>Index ke - {index} : {item}</li>
//         ))}
//       </ul>

//       Isi array campuran :
//       <ul>
//         {campuran.map((item, index)=>(
//           <li>Index ke - {index} : {item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
  
}
  export default App;
  