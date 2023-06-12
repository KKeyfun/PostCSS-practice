import { ReactElement, ReactNode } from 'react';
import './TextSizeBar.css';

const startSize = 8;
const stepSize = 4;
const endSize = 36;
const buttonQty = 8;

export default function TextSizeBar({setFontSize}:{setFontSize:(val:number) => void}):ReactElement {
  const buttonArr:ReactNode[] = [];

  for (let i = 0;i < buttonQty;i++) {
    const size = startSize + (stepSize * i);
    buttonArr.push(<button 
      className={`TextSize_${size}`} 
      onClick={() => {console.log(size);
        setFontSize(size)}}>{`${size}px`}
    </button>);
    if (size >= endSize) {
      break;
    }
  }
  console.log(buttonArr);

  return (
    <>
      <div className="TextSizeBar">
        <span className="TextSizeBar__Label">
          Pick a font size
        </span>
        <div className="TextSizeBar__Buttons">
          {buttonArr}
        </div>
      </div>

    </>
    
  );
}