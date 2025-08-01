import {CDN_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList=({items})=>{
    console.log(items)
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
      //Dispatching the action
      dispatch(addItem(item))
    }

    return(
        <div>
            {items.map((item)=>(
                 <div  data-testid='foodItems'
                 key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className='w-9/12'>
                    <div className='py-2'> 
                        <span className="p-2 font-semibold">{item.card.info.name}</span>
                        <span className="font-semibold">- ₹ {item.card.info.price /100}</span>
                    </div>
                    
                    <p className="text-xs px-2">{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12'>
                    <div className='absolute'>
                        <button className='p-2 bg-black text-white shadow-lg m-auto' 
                        onClick={()=>handleAddItem(item)}>Add + </button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className='w-full'/>
                    
                    </div>
                 </div>
            ))}
        </div>
    )
}
export default ItemList;