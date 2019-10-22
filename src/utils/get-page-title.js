import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Element Admin'

export default function getPageTitle(key) {
  const hasKey = key
  if (hasKey) {
    const pageName = key
    return `${pageName} - ${title}`
  }
  return `${title}`
}
