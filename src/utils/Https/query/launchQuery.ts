import { gql } from '@apollo/client';

export const PAST_LAUNCHES =  gql`
query launchesPast($limit:Int){
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
      
      launch_site {
        site_name
      }
      rocket {
        rocket_name
      }
      launch_success
    }
  }
`

