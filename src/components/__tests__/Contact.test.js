import {render,screen} from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test ("Should load Contact Us page",()=>{
    render(<Contact/>)

   const heading= screen.getByRole('heading')

   expect(heading).toBeInTheDocument();
});

test('Should load button in Contact page', ()=>{
    render(<Contact/>)

    const button=screen.getByRole('button')
    //const button=screen.getByText('Submit')

    expect(button).toBeInTheDocument();
});

test('Should load input inside Contact Us page',()=>{

    render(<Contact/>)

    const input=screen.getByPlaceholderText('Enter your name')

    //here getAllByRole gives us all input boxes , this is called QUERYING
    const inputNames=screen.getAllByRole('textbox') 


    //It will return JSX element (react element/Virtual DOM object) , its an array
    console.log(inputNames); 
    console.log(inputNames.length)

    expect(input).toBeInTheDocument()

    //If the legth is not 2 then the test cases will fail
    expect(inputNames.length).toBe(2);
    expect(inputNames.length).not.toBe(3) //it will say length should not be equal to be 3
})

describe("Contact us page test case" , ()=>{

    //These fore methods are basically used when we want to do something before/after all/each test cases to execute
    beforeAll(()=>{
        console.log('Before All')
    });
    beforeEach(()=>{
        console.log('Before Each')
    });
    afterAll(()=>{
        console.log('After All')
    });
    afterEach(()=>{
        console.log("After Each")
    });


     it ("Should load Contact Us page",()=>{
    render(<Contact/>)

   const heading= screen.getByRole('heading')

   expect(heading).toBeInTheDocument();
}),
test('Should load button in Contact page', ()=>{
    render(<Contact/>)

    const button=screen.getByRole('button')
    //const button=screen.getByText('Submit')

    expect(button).toBeInTheDocument();
})
})