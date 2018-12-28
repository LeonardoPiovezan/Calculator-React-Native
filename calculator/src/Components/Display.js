import React from 'react'
import {Text, 
    View
} from 'react-native'

import ViewStyles from '../Styles/ViewStyles'

 export default props => {
     return (
         <View style={ ViewStyles.display }>
            <Text style={ ViewStyles.displayText }
            numberOfLines={ 1 }>{ props.value }</Text>
         </View> 
     )
 }
