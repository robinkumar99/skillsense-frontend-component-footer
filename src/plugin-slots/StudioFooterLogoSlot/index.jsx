import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { Hyperlink, Image } from '@openedx/paragon';

const StudioFooterLogoSlot = () => (
  <PluginSlot id="org.openedx.frontend.layout.studio_footer_logo.v1" idAliases={['studio_footer_logo_slot']}>
    <Hyperlink destination="#" className="float-right">
      <Image
        width="120px"
        alt="Powered by Skillsense"
        src="/images/add_your_site_logo.png"
      />
    </Hyperlink>
  </PluginSlot>
);

export default StudioFooterLogoSlot;
