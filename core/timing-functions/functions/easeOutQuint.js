import { pow } from '../utils'

export default function easeOutQuint(x) {
  return 1 - pow(1 - x, 5)
}
