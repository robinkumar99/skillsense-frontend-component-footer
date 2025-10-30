import React, { useContext } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useIntl } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import {
  ActionRow,
  Hyperlink,
} from '@openedx/paragon';

import messages from './messages';

ensureConfig([
  'LMS_BASE_URL',
  'MARKETING_SITE_BASE_URL',
  'TERMS_OF_SERVICE_URL',
  'PRIVACY_POLICY_URL',
  'SUPPORT_EMAIL',
  'SITE_NAME',
  'STUDIO_BASE_URL',
  'ENABLE_ACCESSIBILITY_PAGE',
], 'Studio Footer component');

const StudioIndigoFooter = () => {
  const intl = useIntl();
  const { config } = useContext(AppContext);
  return (
    <ActionRow className="pt-3 m-0 x-small">
      © {new Date().getFullYear()} <Hyperlink destination={config.MARKETING_SITE_BASE_URL} target="_blank" className="ml-2">{config.SITE_NAME}</Hyperlink>
      <ActionRow.Spacer />
      {!isEmpty(config.TERMS_OF_SERVICE_URL) && (
        <Hyperlink destination={config.TERMS_OF_SERVICE_URL} data-testid="termsOfService">
          {intl.formatMessage(messages.termsOfServiceLinkLabel)}
        </Hyperlink>
      )}{!isEmpty(config.PRIVACY_POLICY_URL) && (
        <Hyperlink destination={config.PRIVACY_POLICY_URL} data-testid="privacyPolicy">
          {intl.formatMessage(messages.privacyPolicyLinkLabel)}
        </Hyperlink>
      )}
      {config.ENABLE_ACCESSIBILITY_PAGE === 'true' && (
        <Hyperlink
          destination={`${config.STUDIO_BASE_URL}/accessibility`}
          data-testid="accessibilityRequest"
        >
          {intl.formatMessage(messages.accessibilityRequestLinkLabel)}
        </Hyperlink>
      )}
      <Hyperlink destination={config.LMS_BASE_URL}>LMS</Hyperlink>
    </ActionRow>
  );
};
export default StudioIndigoFooter;
