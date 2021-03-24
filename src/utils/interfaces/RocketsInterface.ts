export interface RocketData {
  mass: {
    kg: number;
  };
  cost_per_launch: number;
  stages: number;
  success_rate_pct: number;
  active: boolean;
  name: string;
}
