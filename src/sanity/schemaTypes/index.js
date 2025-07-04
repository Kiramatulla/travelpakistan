import { blogs } from "./blogs"
import { category } from "./category"
import { region } from "./region"
import sitePolicies from "./sitePolicies"
import { spot } from "./spot"
import { subregion } from "./subregion"
import { tours } from "./tours"
import { treks } from "./trek"
import { vehicles } from "./vehicle"
export const schema = {
  types: [tours,category,blogs,treks,vehicles,sitePolicies,region,spot,subregion],
}
