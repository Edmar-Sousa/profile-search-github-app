import React, { useState } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import {
    SafeAreaView,
    Image,
    TextLabel,
    DetailsContainer,
    HeaderDetails,
    RepoContainer,
    ScrollView,
    RepoHeader,
    RepoFooter,
} from './styled'

import axios from '../axiosConfig'


interface ArrayRepositoryData {
    name: string
    description : string
    forks: number
    watchers: number
}


function repositoryComponent(repository : ArrayRepositoryData) {
    return (<RepoContainer key={repository.name}>
        <RepoHeader>
            <MaterialCommunityIcons name="source-repository" size={25} color="white" />
            <TextLabel textColor="#fff" align="left" size={15}>
                { repository.name }
            </TextLabel>
        </RepoHeader>

        <TextLabel textColor="#fff" align="justify" size={13} top="10">
            { repository.description }
        </TextLabel>

        <RepoFooter>
            <AntDesign name="fork" size={15} color="white" />
            <TextLabel textColor="#fff" align="left" size={13} marginLeft="5" marginRight="15">
                { repository.forks }
            </TextLabel>

            <AntDesign name="eye" size={20} color="white" />
            <TextLabel textColor="#fff" align="left" size={13} marginLeft="5">
                { repository.watchers }
            </TextLabel>
        </RepoFooter>
    </RepoContainer>)
    
}


const UserDetails = ({ route, navigation } : any) => {
    const { userName } = route.params

    const [repoList, setRepoList] = useState<Array<ArrayRepositoryData>>()
    const [userAvatarURI, setUserAvatarURI] = useState<string>()

    axios.get(`/${userName}/repos`).then(response => {
        const repoCleanedList = response.data.map((repo : any) => {
            const { name, description, forks, watchers } = repo

            return { name, description, forks, watchers }
        })

        setRepoList(repoCleanedList)
    })
    .catch(err => {
        console.log('err', err)
    })

    axios.get(`/${userName}`).then(response => {
        const { avatar_url } = response.data
        setUserAvatarURI(avatar_url)
    })
    .catch(err => {
        console.log('err', err)
    })

    return (
        <SafeAreaView>
            <DetailsContainer>
                <HeaderDetails>
                    <Image source={{ uri : userAvatarURI }} radius="50"></Image>
                    <TextLabel textColor="#fff" align="left" size={23} marginLeft="10">
                        { userName }
                    </TextLabel>
                </HeaderDetails>

                <ScrollView>
                    {
                        repoList?.map(
                            (repository : ArrayRepositoryData ) => repositoryComponent(repository)
                        )
                    }
                </ScrollView>
            </DetailsContainer>
        </SafeAreaView>
    )
}

export default UserDetails
