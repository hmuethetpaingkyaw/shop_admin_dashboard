import {combineReducers} from 'redux'
import {product} from './product'
import {status} from './status'
import {user} from './user'
import {category} from './category'

export const reducer = combineReducers ({
     product , 
     status,
     user,
     category
})

// store = {
//      product, 
//      category :  {
//     categories: [] ,
//     category : {}
// }
// } 