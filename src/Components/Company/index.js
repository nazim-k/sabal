import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlexBox, OverflowDivision } from 'Components/StyledComponents';
import {
  CompanyInfoContainer,
  CompanyCommentFormContainer,
  CompanyCommentsContainer,
  CompnayNewsContainer
} from 'Containers';
import CONFIG from 'CONFIG';

const height = 100 - CONFIG.header.height;

function Company(props) {
  const { company } = props.match.params;

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return <FlexBox row wrapRow>

    <FlexBox between width="50%" height={ `${ height }vh` } padding="0 0 25px">

      <OverflowDivision>
        <CompanyInfoContainer ticker={ company }/>
        <CompanyCommentsContainer ticker={ company }/>
        <CompanyCommentFormContainer ticker={ company }/>
      </OverflowDivision>

    </FlexBox>

    <CompnayNewsContainer ticker={ company }/>

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