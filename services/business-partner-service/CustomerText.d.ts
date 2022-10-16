import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_CustomerText" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerTextType<T> {
    /**
     * Technical entity name for CustomerText.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the CustomerText entity
     */
    static _keys: string[];
    /**
     * Customer Number.
     * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
     * Maximum length: 10.
     */
    customer: DeserializedType<T, 'Edm.String'>;
    /**
     * Language key.
     * The language key is an abbreviation for the language of the object being processed (for example, standard text, form, style).
     * Maximum length: 2.
     */
    language: DeserializedType<T, 'Edm.String'>;
    /**
     * Text ID.
     * The text ID defines the various types of texts related to a text object. For example, the object "TEXT" (standard texts) can have the following text IDs:
     * ST for user-specific standard texts (individual texts)SYST for cross-application system textsvarious IDs for specific application departments. You must have the appropriate access authorization in order to access these texts.
     * Maximum length: 4.
     */
    longTextId: DeserializedType<T, 'Edm.String'>;
    /**
     * String.
     * @nullable
     */
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
export interface CustomerTextType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=CustomerText.d.ts.map