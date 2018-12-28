import React from 'react'
import {
    Text,
    TouchableHighlight
} from 'react-native'
import ButtonStyles from '../Styles/ButtonStyles'

export default props => {
    const stylesButton = [ButtonStyles.digit]

    if(props.double) stylesButton.push(ButtonStyles.mediumSize)
    if(props.triple) stylesButton.push(ButtonStyles.largeSize)
    if(props.operation) stylesButton.push(ButtonStyles.operation)
    return (
        <TouchableHighlight onPress={ () => props.onClick(props.label) }>
            <Text style = { stylesButton } > { props.label }</Text>
        </TouchableHighlight>
    )
}