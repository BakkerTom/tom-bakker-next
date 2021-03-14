export default function extractHostname (url) {
  const domain = new URL(url)
  return domain.hostname.replace('www.', '')
}
