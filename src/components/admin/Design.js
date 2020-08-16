import React from 'react';
import { DesignBox, StyledCol, StyledRow, StyledGrid, ColorPallete } from '../styledComponents/StyledDesign';
import Add from '../../assets/images/add.png';

const AdminCustomizer = () => {
  return (
      <DesignBox>
        <StyledGrid>
          <StyledRow>
            <StyledCol xs>
              <ColorPallete className='one' />
            </StyledCol>
            <StyledCol xs>
              <ColorPallete className='two' />
            </StyledCol>
            <StyledCol xs>
              <ColorPallete className='three' />
            </StyledCol>
            <StyledCol xs>
              <ColorPallete className='four' />
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol xs>
              <ColorPallete className='five' />
            </StyledCol>
            <StyledCol xs>
              <ColorPallete className='six' />
            </StyledCol>
            <StyledCol xs>
              <ColorPallete className='seven' />
            </StyledCol>
            <StyledCol xs>
              <ColorPallete className='eight' />
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol xs>
              <ColorPallete className='nine'>
                <img src={Add} alt='customize colour' style={{marginTop: '25px'}}/>
                <h6 style={{marginTop: '3px'}}>Customize</h6>
              </ColorPallete>
            </StyledCol>
          </StyledRow>
        </StyledGrid>
      </DesignBox>
  );
}

export default AdminCustomizer;
