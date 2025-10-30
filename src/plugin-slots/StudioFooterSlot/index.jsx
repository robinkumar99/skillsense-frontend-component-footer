import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import StudioIndigoFooter from '../../components/studio-footer';

const StudioFooterSlot = () => (
  <PluginSlot id="org.openedx.frontend.layout.studio_footer.v1" idAliases={['studio_footer_slot']}>
    <StudioIndigoFooter />
  </PluginSlot>
);

export default StudioFooterSlot;
