import React from 'react'
import "./Bar/Bar.css";


const CicularBar = ({done}) => {
        const [style, setStyle] = React.useState({});
        
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }
            
            setStyle(newStyle);
        }, 200);

  return (
    <div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
	</div>
  )
}

export default CicularBar;