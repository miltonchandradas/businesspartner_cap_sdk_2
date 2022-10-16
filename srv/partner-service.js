const cds = require("@sap/cds");
const businessPartnerService = require("../services/business-partner-service/service");

module.exports = (srv) => {
  const { BusinessPartners } = srv.entities;

  srv.on("READ", BusinessPartners, async () => {
    const { businessPartnerApi } =
      businessPartnerService.businessPartnerService();

    return await businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
        businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY
      )
      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals("1"))
      .top(10)
      .execute({
        url: process.env.URL,
      });
  });
};
