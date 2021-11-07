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
    Loading('ThreeDots','white', '30px','30px')
}

const PageLoadingContainer = styled.main`
    width: 100vw;
    height: calc(100vh - 100px);
    background-image: url('https://www.nicepng.com/png/detail/215-2154046_transparent-geometric-background-png.png')
`

export {
    PageLoading,
    ButtonLoading,
}