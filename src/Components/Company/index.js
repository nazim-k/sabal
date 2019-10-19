import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlexBox } from 'Components/StyledComponents';
import { CompnayContainer } from 'Containers';

function Company(props) {
  const { company } = props.match.params;

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return <FlexBox row wrapRow left>

    <FlexBox between width="50%" height="auto" padding="0 0 25px" borderRight="1px solid #a0aec0">

      <CompnayContainer.Info ticker={ company }/>
      <CompnayContainer.Comments ticker={ company }/>
      <CompnayContainer.Form ticker={ company }/>

    </FlexBox>

    <CompnayContainer.News ticker={ company }/>

  </FlexBox>
}

Company.defaultProps = {
  match: { params: '' }
};

Company.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      company: PropTypes.string.isRequired
    })
  })
};

export default Company;