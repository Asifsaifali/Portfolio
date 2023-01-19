import React from 'react'
import styled from 'styled-components'


const BOX=styled.div`
 background: transparent;
  color: ${(props) => props.theme.text};
  padding: 2rem 1rem;
  height: 60vh;
  width: 31vw;
  z-index: 3;
  line-height: 1.5;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 7px 6px rgba(0, 0, 0, 0.22);
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0rem;
  position: relative;
`



const Contact = () => {
  return (
    <BOX>
  
        <div>
            <form>
                <label>Email</label>
                <br></br>
                <input type="email" placeholder="Enter your email here.."/>
                <br></br>
                <label>Message</label>
                <br></br>
                <input type="text" />
                <br></br>
                <button>Submit</button>
            </form>
        </div>

    </BOX> 
  )
}

export default Contact