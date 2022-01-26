import React, { useState, } from 'react'

import { 
    SafeAreaView,
    TextInput,
    TextLabel,
    FormFieldGroup,
    Image,
    ButtonBase,
    FormSearchContainer,
} from './styled'


const Search = ({ navigation } : any) => {
    const [userName, setUserName] = useState<string>()

    return (
        <SafeAreaView>
            <FormSearchContainer>
                <Image source={require('../assets/images/github-logo.png')} radius="0"></Image>

                <FormFieldGroup >
                    <TextLabel textColor="#fff" align="left" size={15} top="10">User name:</TextLabel>
                    <TextInput 
                        onChangeText={(text : string) => setUserName(text) }
                        value={userName}>
                    </TextInput>
                </FormFieldGroup>

                <FormFieldGroup>
                    <ButtonBase background="#039c0f" onPress={ () => navigation.navigate('Details', { userName }) }>
                        <TextLabel textColor="#fff" size={15} top="10">Search</TextLabel>
                    </ButtonBase>
                </FormFieldGroup>
            </FormSearchContainer>
        </SafeAreaView>
    )
}

export default Search
