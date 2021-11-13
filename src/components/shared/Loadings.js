import { Loading } from '../../utils/ReactLoader'
import styled from 'styled-components'


function PageLoading() {
    return (
        <PageLoadingContainer>
            {Loading('TailSpin','#08B2AE', '150px','150px')}
        </PageLoadingContainer>
    )
}

function ButtonLoading() {
    return Loading('ThreeDots','white', '40px','40px')
}

function TextLoading() {
    return Loading('ThreeDots','green', '40px','40px')
}

function LoadingHomePage() {
    return (
        <HomepageLoadingContainer homepage = {true}>
            {Loading('TailSpin', '#08B2AE', '300px', '300px')}
            <LoadingTitle> Carregando... </LoadingTitle>
        </HomepageLoadingContainer>
    )
}

function LoadingItem() {
    return (
        <LoadingItemContainer homepage = {true}>
            {Loading('TailSpin', '#08B2AE', '200px', '200px')}
            <LoadingTitle> Carregando... </LoadingTitle>
        </LoadingItemContainer>
    )
}


const PageLoadingContainer = styled.main`
    width: 100vw;
    margin-top: 100px;
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
`

const HomepageLoadingContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoadingTitle = styled.span`
    font-size: 50px;
    display: inline-block;
    margin-top: 100px;
    color: #08B2AE;
`

const LoadingItemContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export {
    PageLoading,
    ButtonLoading,
    LoadingHomePage,
    LoadingItem,
    TextLoading,
}