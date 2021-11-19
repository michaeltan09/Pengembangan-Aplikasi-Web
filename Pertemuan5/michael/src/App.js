import React, {Component} from 'react';
import Foto from "./components/Image/Michael.jpg";
import{
BrowserRouter as Router,
Route,
NavLink, Switch, 
withRouter,
Redirect,
} from "react-router-dom";
import './css/bootstrap.min.css';
// import './App.css';
// import Home from './views/Home/Home';
// import About from './views/About/About';
// import Main from './Main';
// import Help from './views/Help/Help';
// import Header from './header/header';


//TUGAS PERTEMUAN6
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        className='btn btn-primary'
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}>
        Login
      </button>
    ));
    const LogoutButton = withRouter(({ history }) => (
      <button
        className='btn btn-secondary'
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/login");
        }}>
        Logout
      </button>
    ));
    const routes = [
      {
        path: "/",
        exact: true,
        render: () => (
          <div>Ini adalah Tampilan menu Home.</div>
        ),
      },
      {
        path: "/login",
        render: () => (
          <div className='container text-center'>
            <h2>Login terlebih dahulu sebelum akses menu profile.</h2>
            <table className='table table-borderless text-start'>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-primary w-50'
                      type='text'
                    />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-primary w-50'
                      type='text'
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <LoginButton />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div className='container text-center'>
              <h2 className='fw-bold'>Profile Mahasiswa</h2>
              <table className='table table-borderless text-start'>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <img src={Foto} className='w-25 h-10 border border-3' />
                    </td>
                  </tr>
                  <tr>
                    <td>NIM</td>
                    <td>:</td>
                    <td>192110053</td>
                  </tr>
                  <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>Michael</td>
                  </tr>
                  <tr>
                    <td>Program Studi</td>
                    <td>:</td>
                    <td>Sistem Informasi</td>
                  </tr>
                  <tr>
                    <td>Peminatan</td>
                    <td>:</td>
                    <td>E-Bisnis</td>
                  </tr>
                  <tr>
                    <td>Dosen Wali</td>
                    <td>:</td>
                    <td>Angela, S.Kom., M.MSI.</td>
                  </tr>
                  <tr>
                    <td>Agama</td>
                    <td>:</td>
                    <td>Buddha</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td>Laki-Laki</td>
                  </tr>
                  <tr>
                    <td>Tempat, Tempat Lahir</td>
                    <td>:</td>
                    <td>Kisaran, 07 September 2001</td>
                  </tr>
                  <tr>
                    <td>Status Mahasiswa</td>
                    <td>:</td>
                    <td>Aktif</td>
                  </tr>
                  <tr>
                    <td>Status Akademis</td>
                    <td>:</td>
                    <td>Aktif</td>
                  </tr>
                  <tr>
                    <td>Status MPT</td>
                    <td>:</td>
                    <td>Lulus</td>
                  </tr>
                  <tr>
                    <td>Status Vaksinasi</td>
                    <td>:</td>
                    <td>Telah Vaksinasi Kedua</td>
                  </tr>
                  <tr>
                    <td>
                      <LogoutButton />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          ) : (
            <Redirect to='/login' />
          ),
      },
    ];
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-md navbar navbar-primary bg-primary'>
            <div className='container'>
              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <NavLink exact className='nav-link text-light' to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      to='/profile'
                      className='nav-link text-light'
                      activeClassName='active'>
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

//VIDCON PERTEMUAN6
// class App extends Component {
//   constructor(){
//     super();
//     this.myRef = React.createRef();
//   }

//   componentDidMount(){
//     this.myRef.current.style.height = '100vh';
//     this.myRef.current.style.weidth = '100%'
//   }
//   setBackground(bgColor,txtColor){
//     this.myRef.current.style.background = bgColor;
//     this.myRef.current.style.color = txtColor;
//   }

//   render(){
//     return(
//       <div ref={this.myRef}>
//         <p>Belajar pengembangan aplikasi web dengan Reactjs dengan Router dan Refs</p>
//         <button onClick={this.setBackground.bind(this,'white','black')}>White</button>
//         <button onClick={this.setBackground.bind(this,'red','black')}>Red</button>
//         <button onClick={this.setBackground.bind(this,'green','white')}>Green</button>
//         <button onClick={this.setBackground.bind(this,'blue','white')}>Blue</button>
//       </div>
      
//     )
//   }
// }

//ROUTER RENDER DAN REDIRECT
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       isAuth : false
//     }
//   }
//   render(){
//     const LoginButton = withRouter(({history}) =>( 
//     <button onClick={()=>{
//       this.setState({isAuth :true})
//       history.push('/profile')
//     }}>Login</button>
//     ))

//     const LogoutButton = withRouter(({history})=>(<button onClick={()=>{
//       this.setState({isAuth : false })
//       history.push('/login')
//     }}>Logout</button>
//     ))
//     const routes = [{
//       path : '/',
//       exact : true,
//       render : ()=> <div>Ini Halaman Home</div>
//     },{
//       path : '/news',
//       render : ()=> <div>Ini Halaman News</div>
//     },{
//       path : '/login',
//       render : ()=> <div>Ini Halaman Login</div>
//     },{
//       path : '/profile',
//       render : ()=> this.state.isAuth ? <div>Ini Halaman Profile<br /><LogoutButton/></div> : <Redirect to ='/login' />
//     }
//     ]

//     return(
//       <Router>
//         <div>
//           <ul style={{listStyle: 'none'}}>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/news'>News</Link></li>
//             <li><Link to='/profile'>Profile</Link></li>
//           </ul>

//           <Switch>
//           {
//               routes.map((item, index)=>(
//                 <Route path={item.path} exact={item.exact} render={item.render} />
//               ))
//             }
//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }


// class App extends Component{
//   constructor(){
//     super();
//     //inisial state view
//     this.state = {
//       view : "home"
//     }
//   }
//   render(){
//     //Functional component View untuk mengatur component yang tampil
//     const View = ()=>{
//       if(this.state.view == 'home')
//         return <Main />
//       else if(this.state.view == 'about')
//         return <About />
//       else if(this.state.view == 'help')
//         return <Help />
//     }

//     return(
//       <div>
//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'home'})} className="nav-link" href="#">
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'about'})} className="nav-link" href="#">
//                 About
//               </a>
//             </li>

//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'help'})} className="nav-link" href="#">
//                 Help
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <View /> {/* panggil component View */}
//       </div>
//     );
//   }
// }

//Props
// function Message(props){
//   return <p>Hello {props.name},</p>;
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message name="Ulrich" />
//         <Home name="Eden Hazard" />
//       </div>
//     );
//   }
// }

//Class Component
// function Message(){
//   return "Pesan didalam Component";
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message />
//         <Home />
//       </div>
//     );
//   }
// }

//FUNCTIONAL COMPONENTS
// function Message(){
//   return <p>Hello from Message component</p>
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message />
//       </div>
//     );
//   }
// }

//FUNCTION
// function sayHello(){
//   return "Hello World"
// }

// class App extends Component{
  
//   bilangHalo(){
//     return "Halo Dunia"
//   }

//   render(){
//     return(
//       <>
//         <p>sayHello : <b>{sayHello()}</b></p>
//         <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//       </>
//     )
//   }
// }

export default App;
