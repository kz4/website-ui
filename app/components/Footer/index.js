import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

const FooterWrapper = styled.footer`
  border-top: 1px solid #666;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <ContentContainer>
          <section>
            <FormattedMessage {...messages.licenseMessage} />
          </section>
          <section>
            <LocaleToggle />
          </section>
          <section>
            <FormattedMessage
              {...messages.authorMessage}
              values={{
                author: <A href="www.northeastern.edu/seattle/">Northeastern University</A>,
              }}
            />
          </section>
        </ContentContainer>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
