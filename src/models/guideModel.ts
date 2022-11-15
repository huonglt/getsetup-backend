import { guides } from '../data/seedData'

const getGuideList = async () => {
  return Promise.resolve(guides)
}
export const GuideModel = {
  getGuideList,
}
