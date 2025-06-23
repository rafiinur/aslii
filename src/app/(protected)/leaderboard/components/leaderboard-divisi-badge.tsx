import { Badge } from "@/components/ui/badge"

interface Props {
  divisi: string
}

const LeaderboardDivisiBadge = ({ divisi }: Props) => {
  return (
    <div>
      {divisi === 'IT' && (
        <Badge className="bg-secondary-100 text-secondary-600 text-sm leading-5 text-center rounded px-2 py-1">IT</Badge>
      )}
      {divisi === 'Marketing' && (
        <Badge className="bg-primary-100 text-primary-600 text-sm leading-5 text-center rounded px-2 py-1">Marketing</Badge>
      )}
      {divisi === 'Copy Writer' && (
        <Badge className="bg-error-100 text-error-600 text-sm leading-5 text-center rounded px-2 py-1">Copy Writer</Badge>
      )}
      {divisi === 'Business' && (
        <Badge className="bg-success-100 text-success-600 text-sm leading-5 text-center rounded px-2 py-1">Business</Badge>
      )}
      {divisi === 'HR' && (
        <Badge className="bg-warning-100 text-warning-600 text-sm leading-5 text-center rounded px-2 py-1">HR</Badge>
      )}
    </div>
  )
}

export default LeaderboardDivisiBadge
