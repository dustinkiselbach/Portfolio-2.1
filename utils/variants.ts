import { customEase } from './customEase'

export const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEase }
  },
  hidden: {
    opacity: 0,
    y: 72
  }
}
