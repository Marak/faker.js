/*
 * Exports are organized by levels in order of hierarchy from top to bottom in order to let users
 * specify a level of the hierarchy for which they would like to generate a segment name, for
 * example, when generating hierarchical company data, I would want 'province' to be below 'worldwide'.
 *
 * Taken from (with some additions and omissions): https://en.wikipedia.org/wiki/Administrative_division
 */
module['exports'] = [
  // First element is generic since it is the default level if left unspecified. Taken from synonyms 
  // of 'section' (among some others that come to mind).
  [
    'region',
    'territory',
    'area',
    'division',
    'branch',
    'district',
    'zone',
    'sector',
  ],
  [
    'worldwide',
    'global',
    'international',
  ],
  [
    'multi-continent',
    'hemisphere',
  ],
  [
    'continent',
  ],
  [
    'continental section',
  ],
  [
    'country',
  ],
  [
    'national region',
    'national division',
    'national territory',
    'national area',
  ],
  [
    'province',
    'state'
  ],
  [
    'county',
    'metropolitan area',
    'district',
  ],
  [
    'borough',
    'burgh'
    'city',
    'municipality',
    'parish',
    'shire',
    'town',
    'township',
    'village'
  ],
  [
    'neighborhood'
  ]
];
