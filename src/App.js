import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.scss';

import { auth , createUserProfileDocument} from './firebase/firebase.utils';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     currentUser:null
  //   }
  // }

  unSubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      // this.setState({currentUser:user})
      if(userAuth){
       const userRef =  await createUserProfileDocument(userAuth)
        userRef.onSnapshot( snapShot => {
          // this.setState({
          //   currentUser:{
          //     id:snapShot.id,
          //     ...snapShot.data()
          //   }
          // })
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
        })
       
      }else{
        setCurrentUser(userAuth)
      }
      // createUserProfileDocument(user);
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          {/* <Route path='/signin' component={SignInAndSignUpPage}/> */}
          <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/'/>) : <SignInAndSignUpPage/> }/>
        </Switch>
        
      </div>
    );
  }  
}

const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
