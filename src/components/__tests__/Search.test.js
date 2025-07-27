import { fireEvent, render } from "@testing-library/react";
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json';
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


/* Here in body we have fetch() , its browser function not a js one . So jsdom didn't understand it 
So we create a dummy function like fetch()
Basically fecth fucntion return a Promise which gives a json, then this json will have a function which again return a promise 
having data
We create this mock fetch() bcoz test cases doesn't do network call as they didn't have any browser, they have json dom which is like 
browser like environment not actualy browser*/
global.fecth=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


/*Whenever we are doing test on some async operations like fetch() or state updates , wrap your component inside act() */
it("Should search Res List for burger text input" , async()=>{
    await act(async()=>render(
   <BrowserRouter>
    <Body/>
    </BrowserRouter>
)) 

const cardBeforeClick=screen.getAllByTestId('resCard');
expect(cardBeforeClick.length).toBe(20)

const searchButton=screen.getByRole("button",{name:'Search'});
console.log(searchButton);

/*For eg : we want to type something in the search box and search it
1. Find the seacrh box*/
const searchInput=screen.getByTestId('searchInput')

/*2. Type something in this , means fire and event here its onChnage
fireEvent.change(searchInput ,{target:{value:""}}
searchInput-> is what you want to chnage ,
{target:{value:""} -> pass an object which 
simulates onChange={(e)=>setSearchText(e.target.value)})  
basically it takes what we get inside the e , e is given by browser and here we are mocking it
Its like we have written burger inside the search box*/
fireEvent.change(searchInput, {target:{value:"burger"}})

//3. Now I want to click the seacrh button
fireEvent.click(searchButton)

/*Now we want all the 4 four cards to appear(lets say), we will give a testId to the card parent and search for this id
so whichever card has that id will be returned here*/
const cards=screen.getAllByTestId('resCard');

//If we are expecting 4 cards
expect(cards.length).toBe(4);

expect(searchButton).toBeInTheDocument();
})

it("Should filter top-rated restaurant list", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
               <Body/>
            </BrowserRouter>
        )
    })

     const cardBeforeFilter=screen.getAllByTestId('resCard');
     expect(cardBeforeFilter.length).toBe(20)

     const topRatedBtn=screen.getByRole('button', {name:"Top Rated Restaurants"})

     fireEvent.click(topRatedBtn);

     const cardAfterFilter=screen.getAllByTestId('resCard')
     expect(cardAfterFilter.length).toBe(13)
})

