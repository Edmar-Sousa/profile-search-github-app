import styled from 'styled-components'


export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: ${props => `${props.radius}px`}
`

export const FormSearchContainer = styled.View`
    width: 100%;
    align-items: center;
`

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #272044;
`

export const FormFieldGroup = styled.View`
    width: 80%;
`

export const TextLabel = styled.Text`
    margin-top: ${props => props.top ? `${props.top}px` : '0px'};
    text-align: ${props => props.align ? props.align : 'center' };
    color: ${props => props.textColor};
    font-size: ${props => `${props.size}px`};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px' };
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px' };
`

export const TextInput = styled.TextInput`
    width: 100%;
    height: 30px;
    font-size: 15px;
    padding-left: 10px;
    margin: 10px 0px;
    color: #fff;
    border: 0.5px solid #fff;
    border-radius: 5px;
`

export const ButtonBase = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-weight: bold;
    background: ${props => props.background}
`

export const DetailsContainer = styled.View`
    flex: 1;
    width: 100%;
`

export const HeaderDetails = styled.View`
    width: 100%;
    padding: 40px 20px 10px;
    flex-direction: row;
    align-items: center;
    border: 1px solid #231c3b;
    background: #2d254e;
`

export const RepoContainer = styled.View`
    width: 100%;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #231c3b;
    background: #2d254e;
    border-radius: 5px;
`

export const ScrollView = styled.ScrollView`
    flex: 1;
    padding: 0px 20px;
`

export const RepoHeader = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`

export const RepoFooter = styled.View`
    padding-top: 10px;
    width: 100%;
    flex-direction: row;
    align-items: center;
`
