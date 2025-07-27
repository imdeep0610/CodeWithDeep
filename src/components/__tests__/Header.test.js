import { render,screen,fireEvent } from "@testing-library/react";
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button" , ()=>{

    //but in this <Header/> component , we use redux also and it understand JSX , HTML , JS , so we need to provide store to it using
    //<Provider>
   //BrowserRouter is for <Link> used in Header component
   render(
   <BrowserRouter>
   <Provider store={appStore}>
      <Header/>
   </Provider>
   </BrowserRouter> 
    )

   const button=screen.getByRole('button'); //-> here we get all kinds of button
  // const button=screen.getByRole('button',{name:'Login'}); -> here we get specifically Login button

   //const button=screen.getByText('Login');

   expect(button).toBeInTheDocument();

})

it('Should render Header component with a Cart items 0' , ()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>   
    <Header/>
    </Provider>
    </BrowserRouter> 
    )

    const cartItems=screen.getByText('Cart - (0 Items)')
    const cart=screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument();
})

it("Should change Login button into Logout" , ()=>{
     
    render(
         <BrowserRouter>
         <Provider store={appStore}>   
           <Header/>
         </Provider>
         </BrowserRouter> 
    )

    const loginButton=screen.getByRole('button',{name:'Login'})

    //Its an feature ti fire an event like onClick, onSubmit
    fireEvent.click(loginButton)

    const logoutButton=screen.getByRole('button',{name:'Logout'})

    expect(logoutButton).toBeInTheDocument();
})