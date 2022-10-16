namespace demo;

// using an external service from S/4
using {API_BUSINESS_PARTNER as external} from '../srv/external/API_BUSINESS_PARTNER.csn';

entity BusinessPartners       as projection on external.A_BusinessPartner {
    key BusinessPartner         as businessPartner,
        LastName                as lastName,
        FirstName               as firstName,
        BusinessPartnerCategory as businessPartnerCategory
}

entity BusinessPartnerAddress as projection on external.A_BusinessPartnerAddress {
    key BusinessPartner as businessPartner,
    key AddressID       as addressId,
        PostalCode      as postalCode,
        CityName        as cityName,
        StreetName      as streetName,
        HouseNumber     as houseNumber
}
