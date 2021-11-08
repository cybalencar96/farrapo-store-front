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

const PageLoadingContainer = styled.main`
    width: 100vw;
    height: calc(100vh - 100px);
    background-image: url('/logActions-bg.png');
`

export {
    PageLoading,
    ButtonLoading,
}