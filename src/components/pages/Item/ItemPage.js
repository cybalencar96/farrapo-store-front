import {
    ItemPageContainer,
    ItemContainer,
} from './ItemPageStyle'
import api from '../../../services/api'
import Menu from '../../shared/HomePageMenu/HomePageMenu'
export default function ItemPage() {
    return (
        <ItemPageContainer>
            <ItemContainer>
                <div className='left-side'>
                    <img src='https://images2.marisa.com.br/medias/sys_master/images/images/hbc/h19/12284903850014/Vestido-Feminino-Midi-Canelado-Fendas-10043656516-C1.jpg' alt='dress'/>
                </div>

                <div className='right-side'>
                    <div>
                        <span className='categories'>moças / </span>
                        <span className='categories'>roupas / </span>
                        <span className='categories'>vestidos / </span>
                    </div>
                    <h2 className='item-name'>vestido midi ciganinha verde bandeira com fenda</h2>
                    <p className='price'>R$ 190</p>
                    <p className='qty'>2 unidade(s)</p>
                    <div className='buy-button-container'>
                        <button >{true ? 'Comprar' : 'produto vendido'}</button>
                    </div>
                    <div className='size-container'>
                        tamanho
                        <p className='size'>38</p>
                    </div>
                    <p className='description'>
                        <span>Descrição</span>
                        tênis de couro branco com detalhes da marca em relevo
                        solado de borracha off white
                        tamanho 38 (26 cm)
                        sem nenhum defeito
                    </p>
                </div>
            </ItemContainer>

            <Menu
                    title={'leve mais produtos dessa loja e aproveite o frete único na sacolinha'}
                    forwardMessage={'forwardMessage'}
                    itens = {[]}
            />

            <Menu
                    title={'leve mais produtos dessa loja e aproveite o frete único na sacolinha'}
                    forwardMessage={'forwardMessage'}
                    itens = {[]}
            />
        </ItemPageContainer>
    )
}