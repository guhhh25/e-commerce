import Card from './card'
import styles from './../promotionItems/style.module.css'
import burguer from './../../images/burguer.png'
import MediaCard from './card'

export default function PromotionItem(props:any){


const img = '/_next/static/media/burguer.e74e9860.png'

    return(
        <div className={styles.container}>
            <h2>PROMOÇÕES DA SEMANA</h2>
        
        <div className={styles.offerItems}>
            <Card image={burguer} title={'BIG MC'} description={'Melhor Lanche do Ferra!'} price={'20,00'}/>
            <Card image={burguer} title={'BIG MC'} description={'Melhor Lanche do Ferra!'} price={'20,00'}/>
            <Card image={burguer} title={'BIG MC'} description={'Melhor Lanche do Ferra!'} price={'20,00'}/>
            
            
        </div>
            
            </div>
    )
}
