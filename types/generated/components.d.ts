import type { Schema, Attribute } from '@strapi/strapi';

export interface UiBanner extends Schema.Component {
  collectionName: 'components_ui_banners';
  info: {
    displayName: 'banner';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    active: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    destiny: Attribute.String;
    start: Attribute.DateTime;
    finish: Attribute.DateTime;
    source: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.banner': UiBanner;
    }
  }
}
