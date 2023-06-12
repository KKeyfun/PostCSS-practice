import { ReactElement, ReactNode } from 'react';
import Lorem from '../Lorem';
import './Articles.css';

export default function Articles({fontSize}:{fontSize:number}){
    const articles:ReactNode[] = [];
    for(let i=0;i<6;i++){
        articles.push(
            <Article fontSize={fontSize} />
        )
    }
    return (
        <div className="Articles">
            {articles}
        </div>
    )
}

function Article({fontSize}:{fontSize:number}):ReactElement {
    return (
        <article className={`Article TextSize_${fontSize}`}>
            <h2 className='Article__Header'>Lorem Ipsum</h2>
            <div className='Article__Body'>
                <Lorem/>
            </div>
        </article>
    )
}