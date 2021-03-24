import { gql } from '@apollo/client';


export const COMPANY_INFO =  gql`
query {
    company {
     summary
      ceo
      coo
      cto_propulsion
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      links{
        elon_twitter
        flickr
        twitter
        website
      }
    }
  }
`
export const ROADSTER_QUERY = gql`
query {
    roadster {
      details
      earth_distance_km
      name
      launch_date_utc
      launch_mass_kg
      wikipedia
    }
  }
`



// import { gql } from '@apollo/client';
// import client from '../provider';


// export const dashboardQuery = client.query({
//     query: gql`
//     query {
//         company {
//           ceo
//           coo
//           cto_propulsion
//           employees
//           founded
//           founder
//           headquarters {
//             address
//             city
//             state
//           }
//           launch_sites
//           links{
//             elon_twitter
//             flickr
//             twitter
//             website
//           }
//         }
//       }
//   `
// })

  