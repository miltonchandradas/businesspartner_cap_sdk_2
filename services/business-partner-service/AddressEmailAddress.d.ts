import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_AddressEmailAddress" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressEmailAddress<T extends DeSerializers = DefaultDeSerializers> extends Entity implements AddressEmailAddressType<T> {
    /**
     * Technical entity name for AddressEmailAddress.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * All key fields of the AddressEmailAddress entity
     */
    static _keys: string[];
    /**
     * Address Number.
     * Internal key for identifying a Business Address Services address.
     * For more information about the meaning and use of the address number and the Business Address Services concepts, see the function group SZA0 documentation.
     * Maximum length: 10.
     */
    addressId: DeserializedType<T, 'Edm.String'>;
    /**
     * Person Number.
     * Internal key for identifying a person in Business Address Services.
     * For more information about the meaning and use of the person number and Business Address Services concepts, see the function group SZA0 documentation.
     * Maximum length: 10.
     */
    person: DeserializedType<T, 'Edm.String'>;
    /**
     * Sequence Number.
     * Maximum length: 3.
     */
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    /**
     * Flag: this address is the default address.
     * @nullable
     */
    isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
    /**
     * Email Address.
     * Internet mail address, also called e-mail address.
     * Example: user.name@company.comThe Internet mail address is used to send mail via the Internet world-wide; the protocol used is SMTP (Simple Mail Transfer Protocol).The Internet mail address format is specified in various RFCs (Internet Request for Comment), including RFCs 821 and 822.This is not an IP address (192.56.30.6).
     * Maximum length: 241.
     * @nullable
     */
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * E-Mail Address Search Field.
     * This field is generated by the system from the complete Internet mail address and is stored in table ADR6.
     * It contains the first 20 characters of the Internet mail address in normalized form, that is, without comment characters and converted into uppercase.The field cannot be maintained by the user or from an interface.The table ADR6 contains an index for this field.Using an Internet mail address, the corresponding key of table ADR6 and the owner of the address are determined (for example, business partner or user).
     * Maximum length: 20.
     * @nullable
     */
    searchEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Communication link notes.
     * Additional information about the communication connection
     * You can maintain further information about the communication connection here. In the case of telephone numbers, for example, you can maintain the times at which the call recipient is available and those at which they are not, or you can specify whether the number is that of the secretary.The information is stored in table ADRT, regardless of language.
     * Maximum length: 50.
     * @nullable
     */
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
export interface AddressEmailAddressType<T extends DeSerializers = DefaultDeSerializers> {
    addressId: DeserializedType<T, 'Edm.String'>;
    person: DeserializedType<T, 'Edm.String'>;
    ordinalNumber: DeserializedType<T, 'Edm.String'>;
    isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    searchEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
    addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=AddressEmailAddress.d.ts.map