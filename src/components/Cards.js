import CardItem from './CardItem';
import '../styles/Cards.css';
import { cardsInfos } from '../datas/CardsInfo';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        {cardsInfos.map(({ src, text, label, path }) => (
                            <CardItem
                                key={src}
                                src={src}
                                text={text}
                                label={label}
                                path={path}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards