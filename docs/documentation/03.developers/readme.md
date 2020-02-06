# Getting Started

At skyhop we pride ourselves on our aim towards excellence. As a technically challenging platform, pushing the boundaries at what's possible, we have the aim to provide a great developer experience. While primarily for ourselves we have also decided on providing access to some of our resources to external developers. Due to this philosophy we have made one of our primary components around which most of our infrastructure is based, our GraphQL api, available to 3rd party developers.

## Open Source Code
Skyhop has published some open source packages. These packages can be used to develop your own flight analysis solutions.

## The Graph API
Via this GraphQL api it's possible to do everything which is also possible in our web application. For more information on the GraphQL specification, please visit the GraphQL documentation.

The graph api is available at [https://api.skyhop.org/graph](https://api.skyhop.org/graph).

## Issuing a request
Issuing a request for the last flight from EHWO, via the graph api, looks as follows:

```gql
query {
  flights(first: 1, airfields: ["ehwo"]) {
    edges {
      cursor
      node {
        aircraft {
          callsign
          registration
          type
        }
        departure {
          airfield {
            icao
            name
          }
          runway
          time
        }
        arrival {
          airfield {
            icao
            name
          }
          runway
          time
        }
      }
    }
  }
}
```

With the response being:

```json
{
  "data": {
    "flights": {
      "edges": [
        {
          "cursor": "MgFygF67g0uhTzm0LLJW6g==",
          "node": {
            "aircraft": {
              "callsign": "W3",
              "registration": "PH-1384",
              "type": "Discus"
            },
            "departure": {
              "airfield": {
                "icao": "EHWO",
                "name": "Woensdrecht Air Base"
              },
              "runway": "25",
              "time": "2019-08-15T18:51:29.524844"
            },
            "arrival": {
              "airfield": {
                "icao": "EHWO",
                "name": "Woensdrecht Air Base"
              },
              "runway": "23",
              "time": "2019-08-15T19:01:35.3013464"
            }
          }
        }
      ]
    }
  }
}
```
