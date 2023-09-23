import { post } from '../helpers/api_helpers';
import { urls } from '../helpers/urls_helpers';

export async function ContactUs(user, config = {}) {
  return await post(urls.CONTACT_US, user, config);
}
