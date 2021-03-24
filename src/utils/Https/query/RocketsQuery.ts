import { gql } from "@apollo/client";

export const ROCKET_QUERY = gql`
  query rockets($limit: Int) {
    rockets(limit: $limit) {
      mass {
        kg
      }
      cost_per_launch
      stages
      success_rate_pct
      active
      name
    }
  }
`;
