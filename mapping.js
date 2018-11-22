// maps from publiccode.yml fields to fields in releases section of code.json
// need to import languages here for filtering


module.exports = [
  [ 'name', 'name' ],
  [ 'softwareVersion', 'version' ],
  // skipping organization in code.json
  [ 'description.eng.shortDescription', 'description' ],
  // skipping permissions.licenses[0].URL
  [ 'legal.license', 'permissions.licenses[0].name' ],
  [ () => 'openSource', 'permissions.usageType' ],
  [ () => null, 'permissions.exemptionText' ],
  [ 'tags', 'tags' ],
  [ 'maintenance.contacts.name', 'contact.name' ],
  [ 'maintenance.contacts.email', 'contact.email' ],
  [ 'developmentStatus', 'status' ],
  [ repo => repo.url.includes('.git') ? 'git' : '', 'vcs' ],
  [ 'url', 'repositoryURL' ],
  [ 'url', 'homepageURL' ],
  [ 'url', 'downloadURL' ],
  // need to import languages here and find languages in dependsOn
  [ 'releaseDate', 'date.lastModified']
];