export default function useQuery(localtion) {
  return new URLSearchParams(localtion.search)
}
