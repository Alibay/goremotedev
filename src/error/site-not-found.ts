class SiteNotFound extends Error {

  public constructor(domain: string) {
    super(`Site ${domain} is not found`);
  }
}

export default SiteNotFound;
