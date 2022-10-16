using {demo} from '../db/schema';

@path : 'service/demo'
service PartnerService {
    entity BusinessPartners as select from demo.BusinessPartners;
}
