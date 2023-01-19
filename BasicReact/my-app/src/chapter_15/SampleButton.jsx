import React from "react";
import styled from "styled-components";

//Button component 
const Button = styled.button`
  color: grey;
  border: 2px solid palevioletred;  
`;

//RoundButton component with style added to Button
const RoundedButton = styled(Button)`
    border-radious: 16px;
`

function Sample(props) {
    return (
        <div>
            <Button>Nomarl</Button>
            <RoundedButton>
                Rounded
            </RoundedButton>
        </div>
    )
}

export default Sample;