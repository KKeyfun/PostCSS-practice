import Lorem from '../Lorem';

import './Hero.css';

export default function Hero() {
  return (
        <div className="Hero">
            <img className="Hero__Image" src="https://cdn.pixabay.com/photo/2023/05/30/15/43/koala-8028992_1280.jpg"/>
            <div className="Hero__Descriptor"><Lorem/></div>
        </div>
  );
}