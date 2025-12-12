import {create} from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

const countStore = create(persist(devtools(immer((set)=>{
    return {
        count: 0,
        incrementCount: () =>{
            set(state =>{
                state.count++
            })
        },
        decrementCount: () =>{
            set(state =>{
               if(state.count > 0) state.count--
            })
        },
        resetCount: () =>{
            set(state =>{
                state.count = 0
            })
        },
        plusCount: () =>{
            set(state =>{
                 if(state.count < 15) state.count += 5
            })
        },
            minusCount: () =>{
            set(state =>{
                 if(state.count > 0) state.count -= 5
                 if(state.count < 0 ) state.count = 0
            })
        
    }
}}))));

export default countStore;
