import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log("res getCompany", res);
    return res.company;
  }

  /** Get array of all companies. Also filter by name if passed query parameter. */

  static async getCompanies(query = {}) {
    const res =
      query.size === 0
        ? await this.request(`companies/`)
        : await this.request(`companies/`, query);
    return res.companies;
  }

  /** Get array of all jobs. Also filter by name if passed query parameter. */
  static async getJobs(query = {}) {
    const res =
      query.size === 0
        ? await this.request(`jobs/`)
        : await this.request(`jobs/`, query);
    return res.jobs;
  }

	  /** Registers a new user and return a token */
  static async signUp(userData) {
    const res = await this.request(`auth/register/`, userData, "post");
    this.token = res.token;
    return this.token;
  }
  /**
   * Returns { username, firstName, isAdmin, jobs }
   *   where jobs is { id, title, companyHandle, companyName, state }
   */
  static async getUser(currentUser) {
    const res = await this.request(`users/${currentUser}`);
    console.log('res getUser', res);
    const { username, firstName, isAdmin, jobs } = res.user;

    return {
      username,
      firstName,
      isAdmin,
      jobs,
    };
  }
}

export default JoblyApi;
