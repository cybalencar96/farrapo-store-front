import { Loading } from '../../utils/ReactLoader'
import styled from 'styled-components'


function PageLoading() {
    return (
        <PageLoadingContainer>
            {Loading('ThreeDots','white', '80px','80px')}
        </PageLoadingContainer>
    )
}

function ButtonLoading() {
    return Loading('ThreeDots','white', '40px','40px')
}

function LoadingHomePage() {
    return (
        <HomepageLoadingContainer homepage = {true}>
            {Loading('TailSpin', '#08B2AE', '300px', '300px')}
            <LoadingTitle> Carregando... </LoadingTitle>
        </HomepageLoadingContainer>
    )
}

const PageLoadingContainer = styled.main`
    width: 100vw;
    height: calc(100vh - 100px);
    background-image: url('/logActions-bg.png');
`

const HomepageLoadingContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoadingTitle = styled.span`
    font-size: 60px;
    display: inline-block;
    margin-top: 100px;
    color: #08B2AE;
`

export {
    PageLoading,
    ButtonLoading,
    LoadingHomePage,
}