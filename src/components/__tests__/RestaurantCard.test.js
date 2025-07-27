import { render,screen } from "@testing-library/react";
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMockData.json';
import "@testing-library/jest-dom";
import withPromotedLabel from '../RestaurantCard';


it("Should render Restaurant card with props data" , ()=>{

    /*here we have props data , so we have copied some data from backend and create a new json file and import it here and pass it 
    to the <RestaurantCard/> */
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText(`Leon's - Burgers & Wings (Leon Grill)`);

    expect(name).toBeInTheDocument();
})

it("Should render Restaurant component with promoted label",()=>{

    render(<withPromotedLabel  />)

    

})