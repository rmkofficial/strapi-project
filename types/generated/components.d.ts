import type { Schema, Struct } from '@strapi/strapi';

export interface PackagesPackage extends Struct.ComponentSchema {
  collectionName: 'packages';
  info: {
    description: 'Course package information';
    displayName: 'Package';
  };
  attributes: {
    description: Schema.Attribute.Text;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'packages.package': PackagesPackage;
    }
  }
}
