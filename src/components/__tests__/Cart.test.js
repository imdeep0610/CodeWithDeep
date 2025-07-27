import { act } from "react";
import RestaurantMenu from '../RestaurantMenu';
import {MOCK_DATA} from '../mocks/mockResMenu.json';
import { fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {appStore} from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";  //this is for toBeInTheDocument()
import Cart from '../Cart';

/*When we write jest.fn() -> it will give us a mock function, this mock function basically takes a dummy callback function
and this function is exactly similar to fecth
and fecth return a promise so we return promise
global.fetch=jest.fn(()=>{
  return Promise.resolve()
})
It will return a json 
json () -> will also return a promise having data */
global.fetch=jest.fn(()=>{
  return Promise.resolve({
    //json:()=> Promise.resolve()
    json:()=>{
        return Promise.resolve(MOCK_DATA)
    }
  })
})


//Basically here we are checking that when we click on Add + , in header Cart (1 items) will increse and check in Cart 
//component whether added items are in the cart or not

it("Should load restaurant menu component",async()=>{
    //we have to wrap this Restaurant Menu inside Provider, since here we had used store
  await act(async()=>render(
  <BrowserRouter>
  <Provider store={appStore}> 
  <Header/>
  <RestaurantMenu/>
  <Cart/>
  </Provider> 
  </BrowserRouter>
))

  const accordianHeader=screen.getByText('Biryani (5)');
  fireEvent.click(accordianHeader);

  const foodItems=screen.getAllByTestId('foodItems');
  expect(foodItems.length).toBe(5);

  expect(screen.getByText('Cart - (0 items)')).toBeInTheDocument();

  const addBtn=screen.getAllByRole("button",{name:'Add +'})
  //this will click on the first addBtn as we have multiple addBtn 
  fireEvent.click(addBtn[0]);

  expect(screen.getByText('Cart - (1 items)')).toBeInTheDocument();
   fireEvent.click(addBtn[0]);

    expect(screen.getByText('Cart - (2 items)')).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(7);

    fireEvent.click(screen.getByRole('button',{name:'Clear Cart'}));
    expect(screen.getAllByTestId('foodItems').length).toBe(5);

    expect(screen.getByText('Cart is empty . Add items to the cart')).toBeInTheDocument();
   
})