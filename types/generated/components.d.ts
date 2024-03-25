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

export interface UiImageBanner extends Schema.Component {
  collectionName: 'components_ui_image_banners';
  info: {
    displayName: 'ImageBanner';
    icon: 'puzzle';
  };
  attributes: {
    position: Attribute.String;
    image: Attribute.Media;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.banner': UiBanner;
      'ui.image-banner': UiImageBanner;
    }
  }
}
